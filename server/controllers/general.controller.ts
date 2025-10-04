import type { Request, Response } from "express";
import { consultationService } from "../services/consultation.service";
import { storage } from "../data/storage";
import { insertConsultationRequestSchema } from "@shared/schema";
import { z } from "zod";

export class ConsultationController {
  async createConsultationRequest(req: Request, res: Response): Promise<void> {
    try {
      const data = insertConsultationRequestSchema.parse(req.body);
      const consultationRequest = await consultationService.createConsultationRequest(data);
      
      // Notify about new consultation (in background)
      consultationService.notifyNewConsultation(consultationRequest).catch(error => {
        console.error("Failed to send consultation notification:", error);
      });
      
      res.json({ 
        message: "Consultation request submitted successfully", 
        id: consultationRequest.id 
      });
    } catch (error) {
      console.error("Error creating consultation request:", error);
      
      if (error instanceof z.ZodError) {
        res.status(400).json({ 
          message: "Invalid request data", 
          errors: error.errors 
        });
        return;
      }
      
      if (error instanceof Error) {
        res.status(400).json({ 
          message: error.message 
        });
        return;
      }
      
      res.status(500).json({ 
        message: "Failed to submit consultation request" 
      });
    }
  }
}

export class GeneralController {
  async getAboutInfo(req: Request, res: Response): Promise<void> {
    try {
      const aboutInfo = await storage.getAboutInfo();
      res.json(aboutInfo);
    } catch (error) {
      console.error("Error fetching about info:", error);
      res.status(500).json({ message: "Failed to fetch about information" });
    }
  }

  async getContactInfo(req: Request, res: Response): Promise<void> {
    try {
      const contactInfo = await storage.getContactInfo();
      res.json(contactInfo);
    } catch (error) {
      console.error("Error fetching contact info:", error);
      res.status(500).json({ message: "Failed to fetch contact information" });
    }
  }

  async getPartners(req: Request, res: Response): Promise<void> {
    try {
      const partners = await storage.getPartners();
      res.json(partners);
    } catch (error) {
      console.error("Error fetching partners:", error);
      res.status(500).json({ message: "Failed to fetch partners" });
    }
  }
}

export const consultationController = new ConsultationController();
export const generalController = new GeneralController();
import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertConsultationRequestSchema } from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // Get courses
  app.get("/api/courses", async (req, res) => {
    try {
      const courses = await storage.getCourses();
      res.json(courses);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch courses" });
    }
  });

  // Get faculty members
  app.get("/api/faculty", async (req, res) => {
    try {
      const faculty = await storage.getFacultyMembers();
      res.json(faculty);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch faculty members" });
    }
  });

  // Get news articles
  app.get("/api/news", async (req, res) => {
    try {
      const news = await storage.getNewsArticles();
      res.json(news);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch news articles" });
    }
  });

  // Get partners
  app.get("/api/partners", async (req, res) => {
    try {
      const partners = await storage.getPartners();
      res.json(partners);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch partners" });
    }
  });

  // Get single course
  app.get("/api/courses/:id", async (req, res) => {
    try {
      const course = await storage.getCourse(req.params.id);
      if (!course) {
        return res.status(404).json({ message: "Course not found" });
      }
      res.json(course);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch course" });
    }
  });

  // Get single news article
  app.get("/api/news/:id", async (req, res) => {
    try {
      const article = await storage.getNewsArticle(req.params.id);
      if (!article) {
        return res.status(404).json({ message: "News article not found" });
      }
      res.json(article);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch news article" });
    }
  });

  // Get about info
  app.get("/api/about", async (req, res) => {
    try {
      const aboutInfo = await storage.getAboutInfo();
      res.json(aboutInfo);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch about information" });
    }
  });

  // Get contact info
  app.get("/api/contact", async (req, res) => {
    try {
      const contactInfo = await storage.getContactInfo();
      res.json(contactInfo);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch contact information" });
    }
  });

  // Create consultation request
  app.post("/api/consultation", async (req, res) => {
    try {
      const data = insertConsultationRequestSchema.parse(req.body);
      const consultationRequest = await storage.createConsultationRequest(data);
      res.json({ message: "Consultation request submitted successfully", id: consultationRequest.id });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ message: "Invalid request data", errors: error.errors });
      } else {
        res.status(500).json({ message: "Failed to submit consultation request" });
      }
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}

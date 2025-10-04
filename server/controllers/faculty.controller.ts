import type { Request, Response } from "express";
import { facultyService } from "../services/faculty.service";

export class FacultyController {
  async getAllFaculty(req: Request, res: Response): Promise<void> {
    try {
      const faculty = await facultyService.getAllFaculty();
      res.json(faculty);
    } catch (error) {
      console.error("Error fetching faculty:", error);
      res.status(500).json({ message: "Failed to fetch faculty members" });
    }
  }

  async getCoreFaculty(req: Request, res: Response): Promise<void> {
    try {
      const faculty = await facultyService.getCoreFaculty();
      res.json(faculty);
    } catch (error) {
      console.error("Error fetching core faculty:", error);
      res.status(500).json({ message: "Failed to fetch core faculty members" });
    }
  }

  async getExtendedFaculty(req: Request, res: Response): Promise<void> {
    try {
      const faculty = await facultyService.getExtendedFaculty();
      res.json(faculty);
    } catch (error) {
      console.error("Error fetching extended faculty:", error);
      res.status(500).json({ message: "Failed to fetch extended faculty members" });
    }
  }

  async getFacultyBySpecialty(req: Request, res: Response): Promise<void> {
    try {
      const { specialty } = req.params;
      const faculty = await facultyService.getFacultyBySpecialty(specialty);
      res.json(faculty);
    } catch (error) {
      console.error("Error fetching faculty by specialty:", error);
      res.status(500).json({ message: "Failed to fetch faculty by specialty" });
    }
  }
}

export const facultyController = new FacultyController();
import type { Request, Response } from "express";
import { courseService } from "../services/course.service";

export class CourseController {
  async getAllCourses(req: Request, res: Response): Promise<void> {
    try {
      const courses = await courseService.getAllCourses();
      res.json(courses);
    } catch (error) {
      console.error("Error fetching courses:", error);
      res.status(500).json({ message: "Failed to fetch courses" });
    }
  }

  async getCourseById(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const course = await courseService.getCourseById(id);
      
      if (!course) {
        res.status(404).json({ message: "Course not found" });
        return;
      }
      
      res.json(course);
    } catch (error) {
      console.error("Error fetching course:", error);
      res.status(500).json({ message: "Failed to fetch course" });
    }
  }

  async searchCourses(req: Request, res: Response): Promise<void> {
    try {
      const { q } = req.query;
      
      if (!q || typeof q !== 'string') {
        res.status(400).json({ message: "Search query is required" });
        return;
      }
      
      const courses = await courseService.searchCourses(q);
      res.json(courses);
    } catch (error) {
      console.error("Error searching courses:", error);
      res.status(500).json({ message: "Failed to search courses" });
    }
  }
}

export const courseController = new CourseController();
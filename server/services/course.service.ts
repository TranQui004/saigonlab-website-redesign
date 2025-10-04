import { type Course } from "@shared/schema";
import { storage } from "../data/storage";

export class CourseService {
  async getAllCourses(): Promise<Course[]> {
    return await storage.getCourses();
  }

  async getCourseById(id: string): Promise<Course | undefined> {
    return await storage.getCourse(id);
  }

  async searchCourses(query: string): Promise<Course[]> {
    const courses = await storage.getCourses();
    const searchTerm = query.toLowerCase();
    
    return courses.filter(course => 
      course.title.toLowerCase().includes(searchTerm) ||
      course.description.toLowerCase().includes(searchTerm) ||
      course.duration.toLowerCase().includes(searchTerm)
    );
  }
}

export const courseService = new CourseService();
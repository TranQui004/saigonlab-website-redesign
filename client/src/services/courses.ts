import { apiClient } from './api';
import type { Course } from '@shared/schema';

export class CourseService {
  async getAllCourses(): Promise<Course[]> {
    return apiClient.get<Course[]>('/courses');
  }

  async getCourseById(id: string): Promise<Course> {
    return apiClient.get<Course>(`/courses/${id}`);
  }

  async searchCourses(query: string): Promise<Course[]> {
    return apiClient.get<Course[]>(`/courses/search?q=${encodeURIComponent(query)}`);
  }
}

export const courseService = new CourseService();
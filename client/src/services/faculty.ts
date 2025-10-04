import { apiClient } from './api';
import type { Faculty } from '@shared/schema';

export class FacultyService {
  async getAllFaculty(): Promise<Faculty[]> {
    return apiClient.get<Faculty[]>('/faculty');
  }

  async getCoreFaculty(): Promise<Faculty[]> {
    return apiClient.get<Faculty[]>('/faculty/core');
  }

  async getExtendedFaculty(): Promise<Faculty[]> {
    return apiClient.get<Faculty[]>('/faculty/extended');
  }

  async getFacultyBySpecialty(specialty: string): Promise<Faculty[]> {
    return apiClient.get<Faculty[]>(`/faculty/specialty/${encodeURIComponent(specialty)}`);
  }
}

export const facultyService = new FacultyService();
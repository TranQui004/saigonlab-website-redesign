import { type Faculty } from "@shared/schema";
import { storage } from "../data/storage";

export class FacultyService {
  async getAllFaculty(): Promise<Faculty[]> {
    return await storage.getFacultyMembers();
  }

  async getCoreFaculty(): Promise<Faculty[]> {
    const faculty = await storage.getFacultyMembers();
    return faculty.filter(member => member.isCore === 1);
  }

  async getExtendedFaculty(): Promise<Faculty[]> {
    const faculty = await storage.getFacultyMembers();
    return faculty.filter(member => member.isCore === 0);
  }

  async getFacultyBySpecialty(specialty: string): Promise<Faculty[]> {
    const faculty = await storage.getFacultyMembers();
    const searchTerm = specialty.toLowerCase();
    
    return faculty.filter(member => 
      member.specialty?.toLowerCase().includes(searchTerm)
    );
  }
}

export const facultyService = new FacultyService();
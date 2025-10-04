import { type User, type InsertUser, type ConsultationRequest, type InsertConsultationRequest, type Course, type Faculty, type NewsArticle, type Partner, type AboutInfo, type ContactInfo } from "@shared/schema";
import { randomUUID } from "crypto";
import { coursesData } from "./courses.data";
import { facultyData } from "./faculty.data";
import { newsData } from "./news.data";
import { partnersData, aboutData, contactData } from "./other.data";

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  createConsultationRequest(request: InsertConsultationRequest): Promise<ConsultationRequest>;
  getCourses(): Promise<Course[]>;
  getCourse(id: string): Promise<Course | undefined>;
  getFacultyMembers(): Promise<Faculty[]>;
  getNewsArticles(): Promise<NewsArticle[]>;
  getNewsArticle(id: string): Promise<NewsArticle | undefined>;
  getPartners(): Promise<Partner[]>;
  getAboutInfo(): Promise<AboutInfo[]>;
  getContactInfo(): Promise<ContactInfo>;
}

export class MemStorage implements IStorage {
  private users: Map<string, User>;
  private consultationRequests: Map<string, ConsultationRequest>;

  constructor() {
    this.users = new Map();
    this.consultationRequests = new Map();
  }

  async getUser(id: string): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = randomUUID();
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async createConsultationRequest(insertRequest: InsertConsultationRequest): Promise<ConsultationRequest> {
    const id = randomUUID();
    const request: ConsultationRequest = { 
      ...insertRequest,
      message: insertRequest.message || null,
      email: insertRequest.email || null,
      courseInterest: insertRequest.courseInterest || null,
      id, 
      createdAt: new Date().toISOString() 
    };
    this.consultationRequests.set(id, request);
    return request;
  }

  async getCourses(): Promise<Course[]> {
    return coursesData;
  }

  async getCourse(id: string): Promise<Course | undefined> {
    return coursesData.find(course => course.id === id);
  }

  async getFacultyMembers(): Promise<Faculty[]> {
    return facultyData;
  }

  async getNewsArticles(): Promise<NewsArticle[]> {
    return newsData;
  }

  async getNewsArticle(id: string): Promise<NewsArticle | undefined> {
    return newsData.find(article => article.id === id);
  }

  async getPartners(): Promise<Partner[]> {
    return partnersData;
  }

  async getAboutInfo(): Promise<AboutInfo[]> {
    return aboutData.sort((a, b) => (a.orderIndex || 0) - (b.orderIndex || 0));
  }

  async getContactInfo(): Promise<ContactInfo> {
    return contactData;
  }
}

export const storage = new MemStorage();
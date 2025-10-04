import { type InsertConsultationRequest, type ConsultationRequest } from "@shared/schema";
import { storage } from "../data/storage";

export class ConsultationService {
  async createConsultationRequest(request: InsertConsultationRequest): Promise<ConsultationRequest> {
    // Validate request data
    this.validateConsultationRequest(request);
    
    // Create and save the consultation request
    return await storage.createConsultationRequest(request);
  }

  private validateConsultationRequest(request: InsertConsultationRequest): void {
    if (!request.fullName || request.fullName.trim().length === 0) {
      throw new Error("Họ và tên là bắt buộc");
    }

    if (!request.phone || request.phone.trim().length === 0) {
      throw new Error("Số điện thoại là bắt buộc");
    }

    if (!request.email || request.email.trim().length === 0) {
      throw new Error("Email là bắt buộc");
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(request.email)) {
      throw new Error("Email không hợp lệ");
    }

    // Phone number validation (Vietnamese format)
    const phoneRegex = /^(\+84|84|0)([3|5|7|8|9])+([0-9]{8})$/;
    if (!phoneRegex.test(request.phone.replace(/\s/g, ''))) {
      throw new Error("Số điện thoại không hợp lệ");
    }
  }

  async notifyNewConsultation(request: ConsultationRequest): Promise<void> {
    // In a real application, this would send emails, notifications, etc.
    console.log(`New consultation request from ${request.fullName} (${request.email})`);
    
    // Log the request for admin tracking
    console.log(`Request details:`, {
      id: request.id,
      fullName: request.fullName,
      phone: request.phone,
      email: request.email,
      courseInterest: request.courseInterest,
      message: request.message,
      createdAt: request.createdAt
    });
  }
}

export const consultationService = new ConsultationService();
import { apiClient } from './api';
import type { Partner, AboutInfo, ContactInfo, InsertConsultationRequest } from '@shared/schema';

export class GeneralService {
  async getPartners(): Promise<Partner[]> {
    return apiClient.get<Partner[]>('/partners');
  }

  async getAboutInfo(): Promise<AboutInfo[]> {
    return apiClient.get<AboutInfo[]>('/about');
  }

  async getContactInfo(): Promise<ContactInfo> {
    return apiClient.get<ContactInfo>('/contact');
  }

  async submitConsultationRequest(request: InsertConsultationRequest): Promise<{ message: string; id: string }> {
    return apiClient.post<{ message: string; id: string }>('/consultation', request);
  }
}

export const generalService = new GeneralService();
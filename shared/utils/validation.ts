import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";
import { 
  users, 
  consultationRequests,
  courses,
  faculty,
  newsArticles,
  partners,
  aboutInfo,
  contactInfo
} from "../types/database";

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export const insertConsultationRequestSchema = createInsertSchema(consultationRequests).pick({
  fullName: true,
  phone: true,
  email: true,
  courseInterest: true,
  message: true,
}).extend({
  fullName: z.string().min(1, "Họ và tên là bắt buộc"),
  phone: z.string().min(1, "Số điện thoại là bắt buộc"),
  email: z.string().min(1, "Email là bắt buộc").email("Email không hợp lệ"),
  courseInterest: z.string().optional(),
  message: z.string().optional(),
});

// Validation schemas for search and filtering
export const searchSchema = z.object({
  query: z.string().min(1, "Search query is required"),
  limit: z.number().min(1).max(50).optional(),
  offset: z.number().min(0).optional(),
});

export const paginationSchema = z.object({
  page: z.number().min(1).optional().default(1),
  limit: z.number().min(1).max(50).optional().default(10),
});

// Export inferred types
export type InsertUser = z.infer<typeof insertUserSchema>;
export type InsertConsultationRequest = z.infer<typeof insertConsultationRequestSchema>;
export type SearchParams = z.infer<typeof searchSchema>;
export type PaginationParams = z.infer<typeof paginationSchema>;
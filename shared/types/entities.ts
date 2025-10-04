// Inferred types from database schema
export type User = {
  id: string;
  username: string;
  password: string;
};

export type ConsultationRequest = {
  id: string;
  fullName: string;
  phone: string;
  email: string | null;
  courseInterest: string | null;
  message: string | null;
  createdAt: string | null;
};

export type Course = {
  id: string;
  title: string;
  duration: string;
  description: string;
  imageUrl: string;
  detailUrl: string;
};

export type Faculty = {
  id: string;
  name: string;
  degree: string;
  experience: string;
  specialty: string | null;
  isCore: number | null;
  imageUrl: string;
};

export type NewsArticle = {
  id: string;
  title: string;
  author: string;
  date: string;
  imageUrl: string;
  url: string;
};

export type Partner = {
  id: string;
  name: string;
  imageUrl: string;
};

export type AboutInfo = {
  id: string;
  title: string;
  content: string;
  imageUrl: string | null;
  orderIndex: number | null;
};

export type ContactInfo = {
  id: string;
  address: string;
  phone: string;
  email: string;
  website: string | null;
  workingHours: string | null;
};
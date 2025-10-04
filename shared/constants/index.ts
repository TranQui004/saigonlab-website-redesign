export const API_ENDPOINTS = {
  COURSES: '/api/courses',
  FACULTY: '/api/faculty',
  NEWS: '/api/news',
  PARTNERS: '/api/partners',
  ABOUT: '/api/about',
  CONTACT: '/api/contact',
  CONSULTATION: '/api/consultation',
} as const;

export const PAGINATION = {
  DEFAULT_LIMIT: 10,
  MAX_LIMIT: 50,
} as const;

export const PHONE_REGEX = /^(\+84|84|0)([3|5|7|8|9])+([0-9]{8})$/;
export const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
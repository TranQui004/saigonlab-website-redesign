// Common API types
export interface ApiResponse<T> {
  data: T;
  message?: string;
  success: boolean;
}

export interface ApiError {
  message: string;
  errors?: any[];
  statusCode?: number;
}

export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}

// Form submission types
export interface ConsultationFormData {
  fullName: string;
  phone: string;
  email: string;
  courseInterest?: string;
  message?: string;
}

export interface SearchParams {
  query: string;
  limit?: number;
  offset?: number;
}

// Component props types
export interface LoadingState {
  isLoading: boolean;
  error?: string | null;
}

export interface ComponentWithChildren {
  children: React.ReactNode;
}

export interface OptionalClassName {
  className?: string;
}
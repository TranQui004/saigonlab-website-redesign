// Re-export database tables and types
export * from './types/database';
export * from './types/entities';
export * from './types/api';
export * from './constants';

// Export validation schemas and types with explicit names to avoid conflicts
export {
  insertUserSchema,
  insertConsultationRequestSchema,
  searchSchema,
  paginationSchema,
  type InsertUser,
  type InsertConsultationRequest,
  type SearchParams as ValidationSearchParams,
  type PaginationParams
} from './utils/validation';

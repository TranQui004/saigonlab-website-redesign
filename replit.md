# SAIGONLAB Educational Website

## Overview

This is a modern educational website for SAIGONLAB, a training center specializing in international network engineering certifications. The application is built as a full-stack web application using React for the frontend and Express.js for the backend, with a focus on showcasing courses, faculty, news, and partner information.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

The application follows a monorepo structure with clear separation between client and server code:

- **Frontend**: React with TypeScript, using Vite as the build tool
- **Backend**: Express.js with TypeScript for API endpoints
- **Database**: PostgreSQL with Drizzle ORM for database operations
- **Styling**: Tailwind CSS with shadcn/ui component library
- **State Management**: TanStack Query for server state management
- **Routing**: Wouter for client-side routing

## Key Components

### Frontend Architecture
- **Component Structure**: Modular React components organized by feature
- **UI Library**: shadcn/ui components built on Radix UI primitives
- **Styling**: Tailwind CSS with custom CSS variables for theming
- **Form Handling**: React Hook Form with Zod validation
- **HTTP Client**: Custom API client with TanStack Query integration

### Backend Architecture  
- **API Structure**: RESTful endpoints organized in Express routes
- **Data Layer**: Drizzle ORM with PostgreSQL for data persistence
- **Storage**: Abstracted storage interface supporting both memory and database implementations
- **Middleware**: Request logging and error handling middleware

### Database Schema
- **Users**: Basic user authentication structure
- **Consultation Requests**: Contact form submissions
- **Courses**: Course catalog with details and images
- **Faculty**: Instructor profiles with specialties
- **News Articles**: News and updates content
- **Partners**: Partner organization information

## Data Flow

1. **Client Requests**: Frontend makes API calls using the custom `apiRequest` function
2. **Server Processing**: Express routes handle requests and interact with the storage layer
3. **Data Persistence**: Drizzle ORM manages database operations with PostgreSQL
4. **Response Handling**: TanStack Query manages caching and state updates on the frontend
5. **UI Updates**: React components re-render based on query state changes

The application uses a traditional request-response pattern with optimistic updates and caching provided by TanStack Query.

## External Dependencies

### Core Framework Dependencies
- **@neondatabase/serverless**: PostgreSQL database connection for Neon DB
- **drizzle-orm**: Type-safe database ORM
- **@tanstack/react-query**: Server state management
- **wouter**: Lightweight client-side routing

### UI and Styling Dependencies
- **@radix-ui/***: Accessible UI component primitives
- **tailwindcss**: Utility-first CSS framework
- **class-variance-authority**: Component variant management
- **lucide-react**: Icon library

### Development Dependencies
- **vite**: Frontend build tool and dev server
- **typescript**: Type checking and compilation
- **@replit/vite-plugin-runtime-error-modal**: Development error handling

## Deployment Strategy

The application is configured for deployment on Replit with the following setup:

- **Development**: Vite dev server with hot module replacement
- **Production Build**: 
  - Frontend: Vite builds static assets to `dist/public`
  - Backend: esbuild bundles server code to `dist/index.js`
- **Server Configuration**: Express serves both API routes and static frontend assets
- **Database**: PostgreSQL connection via environment variable `DATABASE_URL`
- **Environment**: NODE_ENV determines development vs production behavior

The build process creates a single deployable artifact with the Express server serving both the API and static frontend files. The application expects a PostgreSQL database connection and uses Drizzle for schema management and migrations.
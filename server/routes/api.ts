import type { Express } from "express";
import { createServer, type Server } from "http";
import { courseController } from "../controllers/courses.controller";
import { facultyController } from "../controllers/faculty.controller";
import { newsController } from "../controllers/news.controller";
import { consultationController, generalController } from "../controllers/general.controller";

export async function registerRoutes(app: Express): Promise<Server> {
  // Course routes
  app.get("/api/courses", courseController.getAllCourses.bind(courseController));
  app.get("/api/courses/search", courseController.searchCourses.bind(courseController));
  app.get("/api/courses/:id", courseController.getCourseById.bind(courseController));

  // Faculty routes
  app.get("/api/faculty", facultyController.getAllFaculty.bind(facultyController));
  app.get("/api/faculty/core", facultyController.getCoreFaculty.bind(facultyController));
  app.get("/api/faculty/extended", facultyController.getExtendedFaculty.bind(facultyController));
  app.get("/api/faculty/specialty/:specialty", facultyController.getFacultyBySpecialty.bind(facultyController));

  // News routes
  app.get("/api/news", newsController.getAllNews.bind(newsController));
  app.get("/api/news/recent", newsController.getRecentNews.bind(newsController));
  app.get("/api/news/search", newsController.searchNews.bind(newsController));
  app.get("/api/news/author/:author", newsController.getNewsByAuthor.bind(newsController));
  app.get("/api/news/:id", newsController.getNewsById.bind(newsController));

  // General info routes
  app.get("/api/about", generalController.getAboutInfo.bind(generalController));
  app.get("/api/contact", generalController.getContactInfo.bind(generalController));
  app.get("/api/partners", generalController.getPartners.bind(generalController));

  // Consultation routes
  app.post("/api/consultation", consultationController.createConsultationRequest.bind(consultationController));

  const httpServer = createServer(app);
  return httpServer;
}
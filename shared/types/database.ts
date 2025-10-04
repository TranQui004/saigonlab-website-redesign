import { sql } from "drizzle-orm";
import { pgTable, text, varchar, integer } from "drizzle-orm/pg-core";

export const users = pgTable("users", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const consultationRequests = pgTable("consultation_requests", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  fullName: text("full_name").notNull(),
  phone: text("phone").notNull(),
  email: text("email"),
  courseInterest: text("course_interest"),
  message: text("message"),
  createdAt: text("created_at").default(sql`CURRENT_TIMESTAMP`),
});

export const courses = pgTable("courses", {
  id: varchar("id").primaryKey(),
  title: text("title").notNull(),
  duration: text("duration").notNull(),
  description: text("description").notNull(),
  imageUrl: text("image_url").notNull(),
  detailUrl: text("detail_url").notNull(),
});

export const faculty = pgTable("faculty", {
  id: varchar("id").primaryKey(),
  name: text("name").notNull(),
  degree: text("degree").notNull(),
  experience: text("experience").notNull(),
  specialty: text("specialty"),
  isCore: integer("is_core").default(0), // 0 for extended, 1 for core
  imageUrl: text("image_url").notNull(),
});

export const newsArticles = pgTable("news_articles", {
  id: varchar("id").primaryKey(),
  title: text("title").notNull(),
  author: text("author").notNull(),
  date: text("date").notNull(),
  imageUrl: text("image_url").notNull(),
  url: text("url").notNull(),
});

export const partners = pgTable("partners", {
  id: varchar("id").primaryKey(),
  name: text("name").notNull(),
  imageUrl: text("image_url").notNull(),
});

export const aboutInfo = pgTable("about_info", {
  id: varchar("id").primaryKey(),
  title: text("title").notNull(),
  content: text("content").notNull(),
  imageUrl: text("image_url"),
  orderIndex: integer("order_index").default(0),
});

export const contactInfo = pgTable("contact_info", {
  id: varchar("id").primaryKey(),
  address: text("address").notNull(),
  phone: text("phone").notNull(),
  email: text("email").notNull(),
  website: text("website"),
  workingHours: text("working_hours"),
});
import type { Request, Response } from "express";
import { newsService } from "../services/news.service";

export class NewsController {
  async getAllNews(req: Request, res: Response): Promise<void> {
    try {
      const news = await newsService.getAllNews();
      res.json(news);
    } catch (error) {
      console.error("Error fetching news:", error);
      res.status(500).json({ message: "Failed to fetch news articles" });
    }
  }

  async getNewsById(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const article = await newsService.getNewsById(id);
      
      if (!article) {
        res.status(404).json({ message: "News article not found" });
        return;
      }
      
      res.json(article);
    } catch (error) {
      console.error("Error fetching news article:", error);
      res.status(500).json({ message: "Failed to fetch news article" });
    }
  }

  async getRecentNews(req: Request, res: Response): Promise<void> {
    try {
      const { limit } = req.query;
      const newsLimit = limit ? parseInt(limit as string, 10) : 10;
      
      const news = await newsService.getRecentNews(newsLimit);
      res.json(news);
    } catch (error) {
      console.error("Error fetching recent news:", error);
      res.status(500).json({ message: "Failed to fetch recent news" });
    }
  }

  async searchNews(req: Request, res: Response): Promise<void> {
    try {
      const { q } = req.query;
      
      if (!q || typeof q !== 'string') {
        res.status(400).json({ message: "Search query is required" });
        return;
      }
      
      const news = await newsService.searchNews(q);
      res.json(news);
    } catch (error) {
      console.error("Error searching news:", error);
      res.status(500).json({ message: "Failed to search news" });
    }
  }

  async getNewsByAuthor(req: Request, res: Response): Promise<void> {
    try {
      const { author } = req.params;
      const news = await newsService.getNewsByAuthor(author);
      res.json(news);
    } catch (error) {
      console.error("Error fetching news by author:", error);
      res.status(500).json({ message: "Failed to fetch news by author" });
    }
  }
}

export const newsController = new NewsController();
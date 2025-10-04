import { type NewsArticle } from "@shared/schema";
import { storage } from "../data/storage";

export class NewsService {
  async getAllNews(): Promise<NewsArticle[]> {
    return await storage.getNewsArticles();
  }

  async getNewsById(id: string): Promise<NewsArticle | undefined> {
    return await storage.getNewsArticle(id);
  }

  async getRecentNews(limit: number = 10): Promise<NewsArticle[]> {
    const news = await storage.getNewsArticles();
    
    // Sort by date (descending) and limit results
    return news
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
      .slice(0, limit);
  }

  async searchNews(query: string): Promise<NewsArticle[]> {
    const news = await storage.getNewsArticles();
    const searchTerm = query.toLowerCase();
    
    return news.filter(article => 
      article.title.toLowerCase().includes(searchTerm) ||
      article.author.toLowerCase().includes(searchTerm)
    );
  }

  async getNewsByAuthor(author: string): Promise<NewsArticle[]> {
    const news = await storage.getNewsArticles();
    
    return news.filter(article => 
      article.author.toLowerCase() === author.toLowerCase()
    );
  }
}

export const newsService = new NewsService();
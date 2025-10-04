import { apiClient } from './api';
import type { NewsArticle } from '@shared/schema';

export class NewsService {
  async getAllNews(): Promise<NewsArticle[]> {
    return apiClient.get<NewsArticle[]>('/news');
  }

  async getNewsById(id: string): Promise<NewsArticle> {
    return apiClient.get<NewsArticle>(`/news/${id}`);
  }

  async getRecentNews(limit: number = 10): Promise<NewsArticle[]> {
    return apiClient.get<NewsArticle[]>(`/news/recent?limit=${limit}`);
  }

  async searchNews(query: string): Promise<NewsArticle[]> {
    return apiClient.get<NewsArticle[]>(`/news/search?q=${encodeURIComponent(query)}`);
  }

  async getNewsByAuthor(author: string): Promise<NewsArticle[]> {
    return apiClient.get<NewsArticle[]>(`/news/author/${encodeURIComponent(author)}`);
  }
}

export const newsService = new NewsService();
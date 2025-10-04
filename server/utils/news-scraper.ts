import * as cheerio from 'cheerio';
import cron from 'node-cron';
import type { IStorage } from '../data/storage';

export interface NewsItem {
  id: string;
  title: string;
  author: string;
  date: string;
  imageUrl: string;
  url: string;
  content?: string;
  excerpt?: string;
}

export class NewsScraper {
  private storage: IStorage;
  private baseUrl: string = 'https://www.saigonlab.edu.vn';

  constructor(storage: IStorage) {
    this.storage = storage;
  }

  async scrapeNews(): Promise<NewsItem[]> {
    try {
      console.log('Starting news scraping...');
      
      const response = await fetch(`${this.baseUrl}/tin-tuc/`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const html = await response.text();
      const $ = cheerio.load(html);
      
      const newsItems: NewsItem[] = [];
      
      // Improved parsing for SAIGONLAB website structure
      $('article, .post, .news-item, .entry').each((index, element) => {
        const $element = $(element);
        
        // More specific selectors for SAIGONLAB structure
        const title = $element.find('h1, h2, h3, .entry-title, .post-title, .title').first().text().trim();
        const link = $element.find('a').first().attr('href') || 
                    $element.find('.entry-title a, .post-title a').attr('href') ||
                    $element.find('h1 a, h2 a, h3 a').attr('href');
                    
        let image = $element.find('img').first().attr('src') || 
                   $element.find('.featured-image img, .post-thumbnail img').attr('src');
                   
        // Handle WordPress image URLs properly
        if (image && !image.startsWith('http')) {
          image = image.startsWith('/') ? `${this.baseUrl}${image}` : `${this.baseUrl}/${image}`;
        }
        
        const date = $element.find('.date, .post-date, .entry-date, time, .published').first().text().trim() ||
                    $element.find('[datetime]').attr('datetime') || '';
                    
        const author = $element.find('.author, .post-author, .entry-author, .by-author').first().text().trim() || 'SAIGONLAB';
        
        // Get excerpt/content preview
        const excerpt = $element.find('.excerpt, .entry-summary, .post-excerpt, p').first().text().trim();
        
        if (title && link) {
          const fullUrl = link.startsWith('http') ? link : `${this.baseUrl}${link}`;
          const fullImageUrl = image || `${this.baseUrl}/wp-content/uploads/2024/04/logosglab.jpg`;
          
          const newsItem: NewsItem = {
            id: this.generateId(title),
            title,
            author: author || 'SAIGONLAB',
            date: this.parseDate(date),
            imageUrl: fullImageUrl,
            url: fullUrl,
            excerpt: excerpt.substring(0, 200) + '...' // Limit excerpt length
          };
          
          newsItems.push(newsItem);
        }
      });
      
      // If no articles found with standard selectors, try WordPress specific
      if (newsItems.length === 0) {
        $('.wp-block-post, .post-item, .blog-post').each((index, element) => {
          const $element = $(element);
          const title = $element.find('.wp-block-post-title, .entry-title').text().trim();
          const link = $element.find('a').first().attr('href');
          
          if (title && link) {
            const newsItem: NewsItem = {
              id: this.generateId(title),
              title,
              author: 'SAIGONLAB',
              date: new Date().toLocaleDateString('vi-VN'),
              imageUrl: `${this.baseUrl}/wp-content/uploads/2024/04/logosglab.jpg`,
              url: link.startsWith('http') ? link : `${this.baseUrl}${link}`,
              excerpt: 'Tin tức mới từ SAIGONLAB...'
            };
            newsItems.push(newsItem);
          }
        });
      }
      
      console.log(`Scraped ${newsItems.length} news items`);
      return newsItems.slice(0, 20); // Limit to 20 most recent items
      
    } catch (error) {
      console.error('Error scraping news:', error);
      return [];
    }
  }

  async scrapeNewsDetail(url: string): Promise<string> {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const html = await response.text();
      const $ = cheerio.load(html);
      
      // Remove unwanted elements
      $('script, style, nav, header, footer, .sidebar, .ads, .social-share').remove();
      
      // Get main content
      let content = $('.entry-content, .post-content, .content, .article-content, main').first().html() ||
                   $('article').first().html() ||
                   $('.post').first().html() ||
                   '';
      
      // Clean up content
      content = content.replace(/<script[^>]*>.*?<\/script>/gi, '');
      content = content.replace(/<style[^>]*>.*?<\/style>/gi, '');
      content = content.replace(/<!--[\s\S]*?-->/g, '');
      
      return content;
    } catch (error) {
      console.error('Error scraping news detail:', error);
      return '';
    }
  }

  private generateId(title: string): string {
    return title
      .toLowerCase()
      .replace(/[àáạảãâầấậẩẫăằắặẳẵ]/g, 'a')
      .replace(/[èéẹẻẽêềếệểễ]/g, 'e')
      .replace(/[ìíịỉĩ]/g, 'i')
      .replace(/[òóọỏõôồốộổỗơờớợởỡ]/g, 'o')
      .replace(/[ùúụủũưừứựửữ]/g, 'u')
      .replace(/[ỳýỵỷỹ]/g, 'y')
      .replace(/đ/g, 'd')
      .replace(/[^a-z0-9\s]/g, '')
      .replace(/\s+/g, '-')
      .substring(0, 50);
  }

  private parseDate(dateStr: string): string {
    if (!dateStr) {
      return new Date().toLocaleDateString('vi-VN');
    }
    
    // Try to parse various date formats
    const vietnameseMonths: Record<string, string> = {
      'tháng 1': '01', 'tháng 2': '02', 'tháng 3': '03', 'tháng 4': '04',
      'tháng 5': '05', 'tháng 6': '06', 'tháng 7': '07', 'tháng 8': '08',
      'tháng 9': '09', 'tháng 10': '10', 'tháng 11': '11', 'tháng 12': '12'
    };
    
    let normalizedDate = dateStr.toLowerCase();
    Object.entries(vietnameseMonths).forEach(([vn, num]) => {
      normalizedDate = normalizedDate.replace(vn, num);
    });
    
    // Try to extract date patterns
    const datePatterns = [
      /(\d{1,2})\/(\d{1,2})\/(\d{4})/,
      /(\d{1,2})-(\d{1,2})-(\d{4})/,
      /(\d{1,2})\s+(\d{1,2})\s+(\d{4})/
    ];
    
    for (const pattern of datePatterns) {
      const match = normalizedDate.match(pattern);
      if (match) {
        const [, day, month, year] = match;
        return `${day.padStart(2, '0')}/${month.padStart(2, '0')}/${year}`;
      }
    }
    
    return new Date().toLocaleDateString('vi-VN');
  }

  startScheduledScraping(): void {
    // Run every 6 hours
    cron.schedule('0 */6 * * *', async () => {
      console.log('Running scheduled news scraping...');
      await this.scrapeNews();
    });

    // Run once immediately
    setTimeout(() => {
      this.scrapeNews();
    }, 5000);
  }

  async manualScrape(): Promise<NewsItem[]> {
    return await this.scrapeNews();
  }

  async getNewsDetail(url: string): Promise<string> {
    return await this.scrapeNewsDetail(url);
  }
}
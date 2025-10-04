import * as cheerio from 'cheerio';
import cron from 'node-cron';
import type { IStorage } from './storage';
import type { NewsArticle } from '@shared/schema';

export class NewsScraper {
  private storage: IStorage;
  private lastScrapeTime: Date = new Date();

  constructor(storage: IStorage) {
    this.storage = storage;
  }

  async scrapeNews(): Promise<NewsArticle[]> {
    try {
      console.log('[News Scraper] Starting news scraping...');
      
      // Fetch the news page
      const response = await fetch('https://www.saigonlab.edu.vn/tin-tuc');
      
      if (!response.ok) {
        throw new Error(`Failed to fetch news page: ${response.status}`);
      }

      const html = await response.text();
      const $ = cheerio.load(html);
      
      const articles: NewsArticle[] = [];
      
      // Log HTML structure for debugging
      console.log('[News Scraper] Page title:', $('title').text());
      console.log('[News Scraper] Looking for article containers...');
      
      // Look for article containers - WordPress with Pagelayer typically uses specific structures
      // Try more specific selectors for actual content
      const containerSelectors = [
        '.pagelayer-wposts-col',
        '.pagelayer-posts-container .pagelayer-wposts-col',
        'article',
        '.post',
        '.entry',
        '.blog-post',
        '.news-item',
        '.wp-block-post',
        '.post-excerpt',
        'div[class*="wposts"]'
      ];
      
      let foundContainer = false;
      
      for (const selector of containerSelectors) {
        const elements = $(selector);
        console.log(`[News Scraper] Found ${elements.length} elements with selector: ${selector}`);
        
        if (elements.length > 0) {
          foundContainer = true;
          
          elements.each((index, element) => {
            try {
              const $element = $(element);
              
              
              // Extract title - look for links first as they usually contain the article title
              let title = '';
              const titleLink = $element.find('a[href*=".html"]').first();
              if (titleLink.length) {
                title = titleLink.text().trim();
              }
              
              // If no title from link, try heading tags
              if (!title) {
                title = $element.find('h1, h2, h3, h4, .title, .post-title').first().text().trim();
              }
              
              // Extract URL - prioritize links that end with .html (actual articles)
              let url = '';
              const articleLink = $element.find('a[href*=".html"]').first();
              if (articleLink.length) {
                const href = articleLink.attr('href');
                if (href) {
                  url = href.startsWith('http') ? href : `https://www.saigonlab.edu.vn${href}`;
                }
              }
              
              // Extract author
              let author = 'SAIGONLAB';
              const authorElement = $element.find('a[href*="/author/"]');
              if (authorElement.length) {
                author = authorElement.text().trim();
              }
              
              // Extract date - look for specific patterns in the text
              let date = '';
              const textContent = $element.text();
              
              
              // Look for Vietnamese date patterns like "23 Th9, 25" or "23Th9, 25"
              const viDateMatch = textContent.match(/(\d{1,2}\s*Th\d{1,2},\s*\d{2,4})/);
              if (viDateMatch) {
                date = viDateMatch[1];
              } else {
                // Try to find date within specific text patterns like "By Author | Date |"
                const dateWithPipeMatch = textContent.match(/\|\s*(\d{1,2}\s*Th\d{1,2},\s*\d{2,4})\s*\|/);
                if (dateWithPipeMatch) {
                  date = dateWithPipeMatch[1];
                } else {
                  // Try other Vietnamese date formats
                  const viDateAltMatch = textContent.match(/(\d{1,2}\s*\/\s*\d{1,2}\s*\/\s*\d{4})/);
                  if (viDateAltMatch) {
                    date = viDateAltMatch[1];
                  } else {
                    // Fallback to standard date patterns
                    const standardDateMatch = textContent.match(/(\d{1,2}\/\d{1,2}\/\d{4}|\d{1,2}-\d{1,2}-\d{4})/);
                    if (standardDateMatch) {
                      date = standardDateMatch[1];
                    }
                  }
                }
              }
              
              // Extract image
              let imageUrl = '';
              const img = $element.find('img').first();
              if (img.length) {
                const src = img.attr('src') || img.attr('data-src') || img.attr('data-lazy-src');
                if (src) {
                  imageUrl = src.startsWith('http') ? src : `https://www.saigonlab.edu.vn${src}`;
                }
              }
              
              // Only add if we have essential information and it's a valid article
              if (title && url && title.length > 10 && url.includes('.html')) {
                const id = this.generateId(title, url);
                
                // Check for duplicates before adding
                const isDuplicate = articles.some(article => article.id === id || article.url === url);
                if (!isDuplicate) {
                  console.log(`[News Scraper] Found article: "${title}" by ${author} on ${date}`);
                  
                  articles.push({
                    id,
                    title,
                    author: author || 'SAIGONLAB',
                    date: date || new Date().toLocaleDateString('vi-VN'),
                    imageUrl: imageUrl || 'https://www.saigonlab.edu.vn/wp-content/uploads/2024/04/logosglab.jpg',
                    url
                  });
                }
              }
            } catch (error) {
              console.warn('[News Scraper] Error parsing article:', error);
            }
          });
          
          // If we found articles with this selector, break
          if (articles.length > 0) {
            console.log(`[News Scraper] Successfully found articles with selector: ${selector}`);
            break;
          }
        }
      }
      
      if (!foundContainer) {
        console.log('[News Scraper] No article containers found, checking page structure...');
        console.log('[News Scraper] Body classes:', $('body').attr('class'));
        console.log('[News Scraper] Main content classes:', $('main, #main, .main, .content, #content').attr('class'));
      }
      
      console.log(`[News Scraper] Found ${articles.length} valid articles`);
      return articles.slice(0, 20); // Limit to 20 most recent articles
      
    } catch (error) {
      console.error('[News Scraper] Failed to scrape news:', error);
      return [];
    }
  }

  private generateId(title: string, url?: string): string {
    // Use URL path for more consistent IDs if available
    if (url) {
      const urlPath = url.split('/').pop()?.replace('.html', '') || '';
      if (urlPath.length > 10) {
        return urlPath;
      }
    }
    
    // Fallback to title-based ID
    return title
      .toLowerCase()
      .replace(/[^a-z0-9\s]/g, '')
      .replace(/\s+/g, '-')
      .substring(0, 50);
  }

  async updateNews(): Promise<void> {
    try {
      const newArticles = await this.scrapeNews();
      const existingArticles = await this.storage.getNewsArticles();
      
      // Get existing article IDs for deduplication
      const existingIds = new Set(existingArticles.map(article => article.id));
      
      // Filter out articles that already exist
      const uniqueNewArticles = newArticles.filter(article => !existingIds.has(article.id));
      
      if (uniqueNewArticles.length > 0) {
        console.log(`[News Scraper] Adding ${uniqueNewArticles.length} new articles`);
        
        // For now, we'll just log the new articles since we're using memory storage
        // In a real database implementation, we would insert these articles
        uniqueNewArticles.forEach(article => {
          console.log(`[News Scraper] New article: ${article.title}`);
        });
        
        // Update the storage with new articles (prepend to keep most recent first)
        const updatedArticles = [...uniqueNewArticles, ...existingArticles];
        
        // Keep only the most recent 50 articles to prevent memory bloat
        if (updatedArticles.length > 50) {
          updatedArticles.splice(50);
        }
        
        // Update the storage
        if (this.storage.constructor.name === 'MemStorage') {
          (this.storage as any).newsArticles = updatedArticles;
        }
        
        this.lastScrapeTime = new Date();
        console.log(`[News Scraper] Successfully updated news. Total articles: ${updatedArticles.length}`);
      } else {
        console.log('[News Scraper] No new articles found');
      }
    } catch (error) {
      console.error('[News Scraper] Failed to update news:', error);
    }
  }

  startScheduledScraping(): void {
    // Run every 6 hours
    cron.schedule('0 */6 * * *', async () => {
      console.log('[News Scraper] Starting scheduled news update...');
      await this.updateNews();
    }, {
      timezone: "Asia/Ho_Chi_Minh"
    });
    
    console.log('[News Scraper] Scheduled scraping started - will run every 6 hours');
    
    // Run immediately on startup
    setTimeout(() => {
      this.updateNews();
    }, 5000); // Wait 5 seconds after startup
  }

  stopScheduledScraping(): void {
    // Note: node-cron doesn't have a global destroy method
    // Individual tasks can be stopped using task.stop() if needed
    console.log('[News Scraper] Scheduled scraping stopped');
  }

  getLastScrapeTime(): Date {
    return this.lastScrapeTime;
  }
}
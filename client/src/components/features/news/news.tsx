import { useQuery } from "@tanstack/react-query";
import { ArrowRight, Calendar, User, ExternalLink } from "lucide-react";
import { Link } from "wouter";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { Badge } from "@/components/ui/badge";
import type { NewsArticle } from "@shared/schema";

export default function News() {
  const { data: news, isLoading } = useQuery<NewsArticle[]>({
    queryKey: ["/api/news"],
  });

  if (isLoading) {
    return (
      <section className="py-20 bg-gray-50" id="news">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Skeleton className="h-12 w-48 mx-auto mb-6" />
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Array.from({ length: 6 }).map((_, i) => (
              <Card key={i} className="overflow-hidden">
                <Skeleton className="aspect-video w-full" />
                <CardContent className="p-6">
                  <Skeleton className="h-20 w-full mb-3" />
                  <Skeleton className="h-4 w-32" />
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-gray-50" id="news">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">TIN TỨC</h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {news?.slice(0, 6).map((article) => (
            <Card key={article.id} className="overflow-hidden group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 bg-white border-0 shadow-lg relative h-full flex flex-col">
              <div className="absolute top-4 right-4 z-10">
                <Badge variant="secondary" className="bg-white/90 text-gray-700 backdrop-blur-sm">
                  <Calendar className="w-3 h-3 mr-1" />
                  {article.date}
                </Badge>
              </div>
              
              <div className="relative aspect-[4/3] overflow-hidden">
                <img 
                  src={article.imageUrl} 
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              <CardContent className="p-6 flex-grow flex flex-col">
                <div className="mb-4">
                  <Badge variant="outline" className="text-xs text-primary border-primary">
                    <User className="w-3 h-3 mr-1" />
                    {article.author}
                  </Badge>
                </div>
                
                <h3 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-primary transition-colors line-clamp-3 leading-snug flex-grow min-h-[4.5rem]">
                  {article.title}
                </h3>
                
                <div className="flex items-center justify-between pt-4 border-t border-gray-100 mt-auto">
                  <Link 
                    href={`/news/${article.id}`}
                    className="inline-flex items-center text-primary font-semibold hover:text-blue-700 transition-colors group bg-blue-50 hover:bg-blue-100 px-4 py-2 rounded-xl"
                  >
                    Đọc thêm
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  
                  <a 
                    href={article.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-2 text-gray-400 hover:text-primary hover:bg-gray-100 rounded-lg transition-all duration-300"
                    title="Xem nguồn gốc"
                  >
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* View More Button */}
        <div className="text-center mt-12">
          <Link href="/news">
            <Button size="lg" className="px-8 py-3">
              <ArrowRight className="mr-2 h-5 w-5" />
              Xem tất cả tin tức
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

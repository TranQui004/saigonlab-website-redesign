import { useState, useMemo } from "react";
import { useQuery } from "@tanstack/react-query";
import { Link } from "wouter";
import { Calendar, User, ArrowRight, ExternalLink, ChevronLeft, ChevronRight, Search, TrendingUp, Clock, Tag } from "lucide-react";
import { Header, Footer } from "@/components/layout";
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import type { NewsArticle } from "@shared/schema";

export default function News() {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const itemsPerPage = 6;
  const { data: news, isLoading } = useQuery<NewsArticle[]>({
    queryKey: ["/api/news"],
  });

  // Filter news based on search query
  const filteredNews = useMemo(() => {
    if (!news || !searchQuery.trim()) return news;
    return news.filter(article => 
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.author.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [news, searchQuery]);

  // Reset page when search changes
  const handleSearchChange = (value: string) => {
    setSearchQuery(value);
    setCurrentPage(1);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <Skeleton className="h-12 w-96 mx-auto mb-6" />
              <Skeleton className="h-24 w-full max-w-4xl mx-auto" />
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {Array.from({ length: 6 }).map((_, i) => (
                <Card key={i} className="overflow-hidden">
                  <Skeleton className="aspect-video w-full" />
                  <CardContent className="p-6">
                    <Skeleton className="h-6 w-full mb-3" />
                    <Skeleton className="h-4 w-32 mb-4" />
                    <Skeleton className="h-4 w-24" />
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const featuredNews = filteredNews?.slice(0, 3) || [];
  const otherNews = filteredNews?.slice(3) || [];
  
  // Pagination calculations
  const totalPages = Math.ceil(otherNews.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentNews = otherNews.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-blue-600 text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-yellow-300/20 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/3 w-20 h-20 bg-blue-300/15 rounded-full blur-xl"></div>
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-center space-x-2 mb-6">
              <TrendingUp className="w-8 h-8 text-yellow-300" />
              <span className="text-lg font-medium text-yellow-200">Tin Tức Công Nghệ</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Tin Tức & Sự Kiện
            </h1>
            <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto mb-10 leading-relaxed">
              Cập nhật những thông tin mới nhất về hoạt động đào tạo, hợp tác và phát triển của SAIGONLAB
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto relative">
              <div className="relative group">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-6 h-6 group-focus-within:text-primary transition-colors" />
                <Input
                  type="text"
                  placeholder="Tìm kiếm tin tức, tác giả..."
                  value={searchQuery}
                  onChange={(e) => handleSearchChange(e.target.value)}
                  className="pl-12 pr-6 py-4 w-full text-lg text-black bg-white/95 backdrop-blur-sm border-0 rounded-2xl shadow-2xl focus:ring-4 focus:ring-yellow-400/50 focus:shadow-3xl transition-all duration-300 hover:bg-white"
                />
                {searchQuery && (
                  <button
                    onClick={() => handleSearchChange("")}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    ×
                  </button>
                )}
              </div>
              {searchQuery && (
                <div className="mt-4 text-sm text-blue-100">
                  Tìm thấy {filteredNews?.length || 0} kết quả cho "{searchQuery}"
                </div>
              )}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-12 max-w-2xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                <div className="text-2xl font-bold text-yellow-300">{news?.length || 0}</div>
                <div className="text-sm text-blue-100">Tổng tin tức</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                <div className="text-2xl font-bold text-green-300">24/7</div>
                <div className="text-sm text-blue-100">Cập nhật</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 col-span-2 md:col-span-1">
                <div className="text-2xl font-bold text-orange-300">IT</div>
                <div className="text-sm text-blue-100">Chuyên ngành</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured News */}
      {featuredNews.length > 0 && (
        <section className="py-24 bg-white relative">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <div className="inline-flex items-center space-x-2 bg-orange-100 text-orange-600 px-4 py-2 rounded-full mb-6">
                <TrendingUp className="w-5 h-5" />
                <span className="font-medium">Nổi Bật</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                Tin Tức Nổi Bật
              </h2>
              <div className="w-24 h-1 bg-orange-500 mx-auto mb-6 rounded-full"></div>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Những thông tin quan trọng nhất về công nghệ và đào tạo
              </p>
            </div>
            
            <div className="grid lg:grid-cols-12 gap-8">
              {/* Main Featured Article */}
              {featuredNews[0] && (
                <Card className="lg:col-span-8 overflow-hidden group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-white border-0 shadow-xl">
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <img 
                      src={featuredNews[0].imageUrl} 
                      alt={featuredNews[0].title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                    <div className="absolute top-6 left-6">
                      <Badge className="bg-red-500 text-white px-3 py-1 text-sm font-medium">
                        🔥 Tin Nóng
                      </Badge>
                    </div>
                    <div className="absolute bottom-6 left-6 right-6 text-white">
                      <h3 className="text-2xl md:text-3xl font-bold mb-3 leading-tight">
                        {featuredNews[0].title}
                      </h3>
                      <div className="flex items-center gap-4 text-sm opacity-90">
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-2" />
                          {featuredNews[0].date}
                        </div>
                        <div className="flex items-center">
                          <User className="w-4 h-4 mr-2" />
                          {featuredNews[0].author}
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <CardContent className="p-8">
                    <div className="flex items-center justify-between">
                      <Link 
                        href={`/news/${featuredNews[0].id}`}
                        className="inline-flex items-center bg-primary text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                      >
                        Đọc thêm
                        <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                      </Link>
                      
                      <a 
                        href={featuredNews[0].url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="p-3 text-gray-400 hover:text-primary hover:bg-blue-50 rounded-xl transition-all duration-300"
                      >
                        <ExternalLink className="h-5 w-5" />
                      </a>
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Side Featured Articles */}
              <div className="lg:col-span-4 space-y-6">
                {featuredNews.slice(1, 3).map((article, index) => (
                  <Card key={article.id} className="overflow-hidden group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 bg-white border-0 shadow-lg">
                    <div className="flex h-48">
                      <div className="w-2/5 relative overflow-hidden">
                        <img 
                          src={article.imageUrl} 
                          alt={article.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.style.display = 'none';
                          }}
                        />
                        <Badge className="absolute top-3 left-3 bg-orange-500 text-white text-xs">
                          Nổi bật
                        </Badge>
                      </div>
                      
                      <CardContent className="w-3/5 p-6 flex flex-col justify-between">
                        <div>
                          <h4 className="font-bold text-gray-800 mb-3 group-hover:text-primary transition-colors line-clamp-3 text-lg leading-snug">
                            {article.title}
                          </h4>
                          
                          <div className="flex items-center gap-3 text-xs text-gray-500 mb-4">
                            <div className="flex items-center">
                              <Clock className="w-3 h-3 mr-1" />
                              {article.date}
                            </div>
                            <div className="flex items-center">
                              <User className="w-3 h-3 mr-1" />
                              {article.author}
                            </div>
                          </div>
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <Link 
                            href={`/news/${article.id}`}
                            className="text-primary font-semibold hover:text-blue-700 transition-colors text-sm group inline-flex items-center"
                          >
                            Đọc thêm
                            <ArrowRight className="ml-1 h-3 w-3 group-hover:translate-x-1 transition-transform" />
                          </Link>
                          
                          <a 
                            href={article.url} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-gray-600 transition-colors p-1"
                          >
                            <ExternalLink className="h-4 w-4" />
                          </a>
                        </div>
                      </CardContent>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Other News */}
      {otherNews.length > 0 && (
        <section className="py-24 bg-gray-50 relative">
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-20 left-20 w-64 h-64 bg-blue-500 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-20 w-48 h-48 bg-orange-500 rounded-full blur-3xl"></div>
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-16">
              <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-600 px-4 py-2 rounded-full mb-6">
                <Tag className="w-5 h-5" />
                <span className="font-medium">Tất Cả Tin Tức</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                Tin Tức Khác
              </h2>
              <div className="w-24 h-1 bg-blue-500 mx-auto mb-6 rounded-full"></div>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Khám phá thêm những thông tin hữu ích về công nghệ và đào tạo
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {currentNews.map((article) => (
                <Card key={article.id} className="overflow-hidden group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 bg-white border-0 shadow-lg relative h-full flex flex-col">
                  <div className="absolute top-4 right-4 z-10">
                    <Badge variant="secondary" className="bg-white/90 text-gray-700 backdrop-blur-sm">
                      <Clock className="w-3 h-3 mr-1" />
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

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex justify-center items-center space-x-3">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                  className="p-3 rounded-xl border-2 hover:bg-primary hover:text-white hover:border-primary transition-all duration-300"
                >
                  <ChevronLeft className="h-5 w-5" />
                </Button>
                
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <Button
                    key={page}
                    variant={currentPage === page ? "default" : "outline"}
                    size="sm"
                    onClick={() => handlePageChange(page)}
                    className={`min-w-[3rem] h-12 rounded-xl border-2 font-semibold transition-all duration-300 ${
                      currentPage === page 
                        ? 'bg-primary text-white border-primary shadow-lg transform scale-110' 
                        : 'hover:bg-primary hover:text-white hover:border-primary'
                    }`}
                  >
                    {page}
                  </Button>
                ))}
                
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className="p-3 rounded-xl border-2 hover:bg-primary hover:text-white hover:border-primary transition-all duration-300"
                >
                  <ChevronRight className="h-5 w-5" />
                </Button>
              </div>
            )}
          </div>
        </section>
      )}

      {/* Newsletter Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-50 via-white to-orange-50"></div>
          <div className="absolute top-10 right-10 w-32 h-32 bg-blue-200/30 rounded-full blur-2xl"></div>
          <div className="absolute bottom-10 left-10 w-40 h-40 bg-orange-200/30 rounded-full blur-2xl"></div>
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-primary to-blue-600 text-white px-6 py-3 rounded-full mb-8">
              <TrendingUp className="w-5 h-5" />
              <span className="font-semibold">Đăng Ký Nhận Tin</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Đăng ký nhận tin tức mới nhất
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 mb-10 leading-relaxed">
              Nhận thông báo về các khóa học mới, sự kiện và tin tức công nghệ từ SAIGONLAB
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center max-w-2xl mx-auto mb-10">
              <a 
                href="/#contact" 
                className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-primary to-blue-600 text-white rounded-2xl font-bold hover:from-blue-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl"
              >
                <TrendingUp className="w-5 h-5 mr-2" />
                Đăng ký ngay
              </a>
              <a 
                href="/contact" 
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-primary text-primary rounded-2xl font-bold hover:bg-primary hover:text-white transition-all duration-300 transform hover:scale-105"
              >
                Liên hệ tư vấn
              </a>
            </div>

            {/* Features */}
            <div className="grid md:grid-cols-3 gap-8 mt-16">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-100">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">Tin Tức Nóng</h3>
                <p className="text-gray-600 text-sm">Cập nhật thông tin mới nhất về công nghệ</p>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-100">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <User className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">Sự Kiện</h3>
                <p className="text-gray-600 text-sm">Thông báo về các sự kiện đào tạo</p>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-100">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Tag className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">Khóa Học</h3>
                <p className="text-gray-600 text-sm">Thông tin về các khóa học mới</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
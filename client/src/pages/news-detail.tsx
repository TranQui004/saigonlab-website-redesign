import { useQuery } from "@tanstack/react-query";
import { useRoute } from "wouter";
import { ArrowLeft, Calendar, User, ExternalLink } from "lucide-react";
import { Link } from "wouter";
import { Header, Footer } from "@/components/layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import type { NewsArticle } from "@shared/schema";

export default function NewsDetail() {
  const [match, params] = useRoute("/news/:id");
  const newsId = params?.id;

  const { data: article, isLoading, error } = useQuery<NewsArticle>({
    queryKey: ["/api/news", newsId],
    enabled: !!newsId,
  });

  const { data: allNews } = useQuery<NewsArticle[]>({
    queryKey: ["/api/news"],
  });

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="py-20">
          <div className="container mx-auto px-4">
            <Skeleton className="h-8 w-32 mb-8" />
            <div className="grid lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2">
                <Skeleton className="h-12 w-full mb-6" />
                <Skeleton className="h-6 w-64 mb-8" />
                <Skeleton className="aspect-video w-full mb-8" />
                <Skeleton className="h-64 w-full" />
              </div>
              <div>
                <Card className="p-6">
                  <Skeleton className="h-8 w-32 mb-6" />
                  <div className="space-y-4">
                    {Array.from({ length: 3 }).map((_, i) => (
                      <Skeleton key={i} className="h-16 w-full" />
                    ))}
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  if (error || !article) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">Không tìm thấy bài viết</h1>
            <p className="text-gray-600 mb-8">Bài viết bạn đang tìm kiếm không tồn tại.</p>
            <Link href="/news">
              <Button>
                <ArrowLeft className="mr-2 h-4 w-4" />
                Quay lại tin tức
              </Button>
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const relatedNews = allNews?.filter(news => news.id !== article.id).slice(0, 3) || [];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <section className="py-20">
        <div className="container mx-auto px-4">
          {/* Breadcrumb */}
          <div className="flex items-center mb-8 text-sm">
            <Link href="/news" className="text-primary hover:text-blue-700 flex items-center">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Quay lại tin tức
            </Link>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <h1 className="text-4xl font-bold text-gray-800 mb-6 leading-tight">{article.title}</h1>
              
              <div className="flex items-center gap-6 mb-8 text-gray-600">
                <div className="flex items-center">
                  <Calendar className="w-5 h-5 mr-2" />
                  {article.date}
                </div>
                <div className="flex items-center">
                  <User className="w-5 h-5 mr-2" />
                  {article.author}
                </div>
              </div>

              {/* Article Image */}
              <div className="mb-8 rounded-2xl overflow-hidden">
                <img 
                  src={article.imageUrl} 
                  alt={article.title} 
                  className="w-full h-auto object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                  }}
                />
              </div>

              {/* Article Content */}
              <Card className="mb-8">
                <CardContent className="p-8">
                  <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                    {/* Nội dung dựa trên URL Ethical Hacking Core Skills */}
                    {(article.id === "ethical-hacking-core-skills" || article.id === "ethical-hacking-core-skills-chuong-trinh-dao-tao-thuc-chien-tai-saigonlab") && (
                      <>
                        <p className="text-xl font-medium text-gray-800 mb-6">
                          Trước sự gia tăng của các nguy cơ tấn công mạng ngày càng tinh vi, việc nâng cao nhận thức và năng lực kỹ thuật về an toàn thông tin là nhiệm vụ cấp thiết đối với mọi tổ chức.
                        </p>
                        
                        <p className="mb-6">
                          Nhằm đáp ứng nhu cầu này, Trung tâm Đào tạo SaigonLab đã phối hợp cùng Tổng công ty Phát điện 3 (EVNGENCO3) và Công ty An ninh mạng VSEC tổ chức khóa đào tạo chuyên đề "Ethical Hacking Core Skills" (EHCS), thiết kế riêng theo yêu cầu thực tiễn của doanh nghiệp.
                        </p>
                        
                        <div className="my-8">
                          <img 
                            src="https://www.saigonlab.edu.vn/wp-content/uploads/2025/08/2.-web-1.png" 
                            alt="Khai giảng khóa học Ethical Hacking Core Skills" 
                            className="w-full rounded-lg shadow-md"
                          />
                          <p className="text-center text-sm text-gray-600 mt-2 italic">Khai giảng khóa học Ethical Hacking Core Skills</p>
                        </div>
                        
                        <h3 className="text-2xl font-bold text-gray-800 mb-4">Mục tiêu khóa học</h3>
                        <p className="mb-4">Khóa học EHCS giúp học viên:</p>
                        <ul className="list-none space-y-3 mb-6">
                          <li className="flex items-start">
                            <span className="text-primary mr-3">◽</span>
                            Hiểu rõ giao thức TCP/IP và kỹ thuật phân tích lưu lượng mạng
                          </li>
                          <li className="flex items-start">
                            <span className="text-primary mr-3">◽</span>
                            Phát hiện và xử lý các hành vi tấn công mạng ở cấp độ gói tin
                          </li>
                          <li className="flex items-start">
                            <span className="text-primary mr-3">◽</span>
                            Làm chủ hệ điều hành Linux và các công cụ kiểm thử bảo mật
                          </li>
                          <li className="flex items-start">
                            <span className="text-primary mr-3">◽</span>
                            Xây dựng môi trường lab ảo để thực hành tình huống tấn công – phòng thủ
                          </li>
                          <li className="flex items-start">
                            <span className="text-primary mr-3">◽</span>
                            Áp dụng quy trình ethical hacking trong đánh giá và xử lý lỗ hổng
                          </li>
                          <li className="flex items-start">
                            <span className="text-primary mr-3">◽</span>
                            Nhận diện các hình thức tấn công như Social Engineering và cách phòng tránh
                          </li>
                        </ul>
                        
                        <h3 className="text-2xl font-bold text-gray-800 mb-4">Nội dung chương trình đào tạo</h3>
                        <p className="mb-4">Chương trình gồm 8 chuyên đề, tổng thời lượng 24 giờ, tập trung vào:</p>
                        <ul className="list-none space-y-3 mb-6">
                          <li className="flex items-start">
                            <span className="text-primary mr-3">◽</span>
                            Tổng quan về bảo mật thông tin và các kỹ năng cần thiết
                          </li>
                          <li className="flex items-start">
                            <span className="text-primary mr-3">◽</span>
                            Các khái niệm trong ethical hacking và quy trình kiểm thử xâm nhập
                          </li>
                          <li className="flex items-start">
                            <span className="text-primary mr-3">◽</span>
                            Làm việc với UNIX/Linux và hệ điều hành Kali
                          </li>
                          <li className="flex items-start">
                            <span className="text-primary mr-3">◽</span>
                            Thiết lập máy ảo và lab kiểm thử nội bộ
                          </li>
                          <li className="flex items-start">
                            <span className="text-primary mr-3">◽</span>
                            Đánh giá lỗ hổng bảo mật với công cụ như Nmap, Nessus
                          </li>
                          <li className="flex items-start">
                            <span className="text-primary mr-3">◽</span>
                            Thực hành toàn bộ quá trình tấn công có đạo đức
                          </li>
                          <li className="flex items-start">
                            <span className="text-primary mr-3">◽</span>
                            Nhận diện và ứng phó với các hình thức tấn công phổ biến
                          </li>
                          <li className="flex items-start">
                            <span className="text-primary mr-3">◽</span>
                            Phân tích tình huống tấn công xã hội (Social Engineering)
                          </li>
                        </ul>
                        
                        <div className="my-8 grid md:grid-cols-2 gap-6">
                          <img 
                            src="https://www.saigonlab.edu.vn/wp-content/uploads/2025/08/3.png" 
                            alt="Thực hành ethical hacking" 
                            className="w-full rounded-lg shadow-md"
                          />
                          <img 
                            src="https://www.saigonlab.edu.vn/wp-content/uploads/2025/08/7.png" 
                            alt="Môi trường lab thực hành" 
                            className="w-full rounded-lg shadow-md"
                          />
                        </div>
                        
                        <h3 className="text-2xl font-bold text-gray-800 mb-4">Lợi ích dành cho doanh nghiệp</h3>
                        <ul className="list-none space-y-3 mb-6">
                          <li className="flex items-start">
                            <span className="text-primary mr-3">◽</span>
                            Chương trình được thiết kế riêng, phù hợp với đặc thù công việc và hệ thống đang vận hành
                          </li>
                          <li className="flex items-start">
                            <span className="text-primary mr-3">◽</span>
                            Học viên được thực hành trên hệ thống lab mô phỏng sát với tình huống thực tế
                          </li>
                          <li className="flex items-start">
                            <span className="text-primary mr-3">◽</span>
                            Sau khi hoàn thành, học viên được cấp chứng nhận hoàn tất khóa đào tạo
                          </li>
                          <li className="flex items-start">
                            <span className="text-primary mr-3">◽</span>
                            Giảng viên đồng hành giải đáp bài toán thực tế trong quá trình học
                          </li>
                        </ul>
                        
                        <div className="bg-blue-50 border-l-4 border-primary p-6 my-8">
                          <h4 className="font-bold text-gray-800 mb-2">Liên hệ tư vấn: Trung tâm Đào tạo SaigonLab</h4>
                          <div className="text-gray-700 space-y-1">
                            <p><strong>Địa chỉ:</strong> 28/61 đường số 2, Cư xá Lữ Gia, Phường Phú Thọ, Quận 11, TP.HCM</p>
                            <p><strong>Website:</strong> https://saigonlab.edu.vn</p>
                            <p><strong>Email:</strong> info@saigonlab.edu.vn</p>
                            <p><strong>Hotline:</strong> 028.3863.8239</p>
                            <p><strong>Zalo OA:</strong> SaigonLab</p>
                            <p><strong>Fanpage:</strong> facebook.com/saigonlab</p>
                          </div>
                        </div>
                      </>
                    )}
                    
                    {/* Nội dung cho AI hành chính văn phòng Long Khánh */}
                    {article.id === "ai-hanh-chinh-van-phong-long-khanh" && (
                      <>
                        <p className="text-xl font-medium text-gray-800 mb-6">
                          Ngày 19 tháng 9 năm 2025, Ban Chỉ huy Phòng thủ Khu vực 2 - Long Khánh đã hoàn thành khóa đào tạo "Ứng dụng Trí tuệ Nhân tạo (AI) trong Công tác Hành chính Văn phòng".
                        </p>
                        
                        <div className="my-8">
                          <img 
                            src="https://www.saigonlab.edu.vn/wp-content/uploads/2025/09/1.png" 
                            alt="Khóa đào tạo AI tại Long Khánh" 
                            className="w-full rounded-lg shadow-md"
                          />
                        </div>
                        
                        <h3 className="text-2xl font-bold text-gray-800 mb-4">Nội dung đào tạo</h3>
                        <ul className="list-none space-y-3 mb-6">
                          <li className="flex items-start">
                            <span className="text-primary mr-3">◽</span>
                            Kiến thức cơ bản về AI và ChatGPT
                          </li>
                          <li className="flex items-start">
                            <span className="text-primary mr-3">◽</span>
                            Kỹ năng viết prompt hiệu quả
                          </li>
                          <li className="flex items-start">
                            <span className="text-primary mr-3">◽</span>
                            Ứng dụng thực tế trong công việc
                          </li>
                        </ul>
                        
                        <div className="bg-blue-50 border-l-4 border-primary p-6 my-8">
                          <p className="text-gray-700 italic">
                            "Tiết kiệm 30-40% thời gian soạn thảo văn bản, nâng cao chất lượng báo cáo và thuyết trình."
                          </p>
                        </div>
                      </>
                    )}
                    
                    {/* Nội dung cho chợ Bình Tây */}
                    {article.id === "chuyen-doi-so-cho-binh-tay" && (
                      <>
                        <p className="text-xl font-medium text-gray-800 mb-6">
                          Ngày 08/07/2025, hơn 100 tiểu thương đã tham gia buổi tập huấn chuyển đổi số với giải pháp DP247 tại chợ Bình Tây.
                        </p>
                        
                        <div className="my-8">
                          <img 
                            src="https://www.saigonlab.edu.vn/wp-content/uploads/2025/08/2-1-scaled.png" 
                            alt="Tập huấn chợ Bình Tây" 
                            className="w-full rounded-lg shadow-md"
                          />
                        </div>
                        
                        <h3 className="text-2xl font-bold text-gray-800 mb-4">Nội dung tập huấn</h3>
                        <ul className="list-none space-y-3 mb-6">
                          <li className="flex items-start">
                            <span className="text-primary mr-3">◽</span>
                            Giới thiệu phần mềm DP247 và hóa đơn điện tử
                          </li>
                          <li className="flex items-start">
                            <span className="text-primary mr-3">◽</span>
                            Quản lý gian hàng, bán hàng và đơn hàng
                          </li>
                          <li className="flex items-start">
                            <span className="text-primary mr-3">◽</span>
                            Kết nối My DP247 xây dựng gian hàng online
                          </li>
                        </ul>
                      </>
                    )}
                    
                    {/* Nội dung cho AI quân đội Z755 */}
                    {article.id === "ai-military-training" && (
                      <>
                        <p className="text-xl font-medium text-gray-800 mb-6">
                          Khóa tập huấn "Ứng dụng AI trong công tác Hành chính – Kỹ thuật" do SAIGONLAB tổ chức tại Công Ty Thông tin điện tử Z755.
                        </p>
                        
                        <div className="my-8">
                          <img 
                            src="https://www.saigonlab.edu.vn/wp-content/uploads/2025/07/z6810414425852_7f2008a9e44f3d608b1e683d4767f931-1024x575.jpg" 
                            alt="Tập huấn AI tại Z755" 
                            className="w-full rounded-lg shadow-md"
                          />
                        </div>
                        
                        <h3 className="text-2xl font-bold text-gray-800 mb-4">Mục tiêu</h3>
                        <ul className="list-none space-y-3 mb-6">
                          <li className="flex items-start">
                            <span className="text-primary mr-3">●</span>
                            Tăng tốc hiệu quả công việc hành chính với AI
                          </li>
                          <li className="flex items-start">
                            <span className="text-primary mr-3">●</span>
                            Tự động hóa quy trình kỹ thuật
                          </li>
                          <li className="flex items-start">
                            <span className="text-primary mr-3">●</span>
                            Đảm bảo an toàn thông tin quân đội
                          </li>
                        </ul>
                      </>
                    )}
                    
                    {/* Nội dung cho VNPT AI video */}
                    {article.id === "vnpt-ai-video" && (
                      <>
                        <p className="text-xl font-medium text-gray-800 mb-6">
                          VNPT Bến Tre hoàn thành thành công khóa học "Ứng dụng AI sản xuất video content" do SAIGONLAB tổ chức.
                        </p>
                        
                        <div className="my-8">
                          <img 
                            src="https://www.saigonlab.edu.vn/wp-content/uploads/2025/06/3.png" 
                            alt="VNPT Bến Tre AI video training" 
                            className="w-full rounded-lg shadow-md"
                          />
                        </div>
                        
                        <h3 className="text-2xl font-bold text-gray-800 mb-4">Nội dung nổi bật</h3>
                        <ul className="list-none space-y-3 mb-6">
                          <li className="flex items-start">
                            <span className="text-primary mr-3">◽</span>
                            Cập nhật hơn 25.000 công cụ AI
                          </li>
                          <li className="flex items-start">
                            <span className="text-primary mr-3">◽</span>
                            Xây dựng kênh TikTok từ số 0
                          </li>
                          <li className="flex items-start">
                            <span className="text-primary mr-3">◽</span>
                            Sản xuất video theo nhóm khách hàng
                          </li>
                        </ul>
                        
                        <div className="bg-blue-50 border-l-4 border-primary p-6 my-8">
                          <p className="text-gray-700 italic">
                            "100% học viên tự tạo video hoàn chỉnh sau khóa học."
                          </p>
                        </div>
                      </>
                    )}
                    
                    {/* Nội dung mặc định cho các tin tức khác */}
                    {!(article.id === "ethical-hacking-core-skills" || article.id === "ethical-hacking-core-skills-chuong-trinh-dao-tao-thuc-chien-tai-saigonlab" || 
                       article.id === "ai-hanh-chinh-van-phong-long-khanh" || article.id === "chuyen-doi-so-cho-binh-tay" ||
                       article.id === "ai-military-training" || article.id === "vnpt-ai-video") && (
                      <>
                        <p className="text-xl font-medium text-gray-800 mb-6">
                          SAIGONLAB tiếp tục khẳng định vị thế là trung tâm đào tạo công nghệ thông tin hàng đầu 
                          với những hoạt động đào tạo chuyên nghiệp và hợp tác với các đối tác lớn trong ngành.
                        </p>
                        
                        <p className="mb-6">
                          Với đội ngũ giảng viên giàu kinh nghiệm và phòng lab hiện đại, SAIGONLAB cam kết 
                          mang đến những khóa học chất lượng cao, đáp ứng nhu cầu phát triển kỹ năng 
                          và nâng cao trình độ chuyên môn cho học viên.
                        </p>
                        
                        <p className="mb-6">
                          Hoạt động này một lần nữa thể hiện cam kết của SAIGONLAB trong việc đồng hành 
                          cùng các doanh nghiệp và tổ chức trong hành trình chuyển đổi số và phát triển công nghệ.
                        </p>
                      </>
                    )}
                    
                    <div className="bg-blue-50 border-l-4 border-primary p-6 my-8">
                      <p className="text-gray-700 italic">
                        "Thành công của mỗi học viên chính là thành công của chúng tôi. 
                        SAIGONLAB luôn nỗ lực không ngừng để cung cấp chương trình đào tạo 
                        chất lượng cao nhất." - Đại diện SAIGONLAB
                      </p>
                    </div>
                    
                    <p className="mb-6">
                      Để biết thêm chi tiết về nội dung bài viết này, vui lòng truy cập 
                      trang web chính thức của SAIGONLAB hoặc liên hệ trực tiếp với trung tâm.
                    </p>
                  </div>
                  
                  <div className="mt-8 pt-8 border-t border-gray-200">
                    <a 
                      href={article.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-primary font-semibold hover:text-blue-700 transition-colors"
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Xem bài viết gốc
                    </a>
                  </div>
                </CardContent>
              </Card>

              {/* CTA Section */}
              <Card className="bg-primary text-white">
                <CardContent className="p-8 text-center">
                  <h3 className="text-2xl font-bold mb-4">Quan tâm đến các khóa học của SAIGONLAB?</h3>
                  <p className="mb-6 opacity-90">
                    Khám phá các chương trình đào tạo chuyên nghiệp và đăng ký tư vấn miễn phí
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link href="/courses">
                      <Button variant="secondary" size="lg">
                        Xem khóa học
                      </Button>
                    </Link>
                    <Link href="/#contact">
                      <Button variant="outline" size="lg" className="text-white border-white hover:bg-white hover:text-blue-600 bg-transparent">
                        Đăng ký tư vấn
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div>
              {/* Related News */}
              {relatedNews.length > 0 && (
                <Card className="mb-8">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-6">Tin tức liên quan</h3>
                    <div className="space-y-4">
                      {relatedNews.map((news) => (
                        <Link key={news.id} href={`/news/${news.id}`}>
                          <div className="flex gap-4 p-3 rounded-lg hover:bg-gray-50 transition-colors group cursor-pointer">
                            <div className="w-16 h-16 flex-shrink-0 rounded-lg overflow-hidden">
                              <img 
                                src={news.imageUrl} 
                                alt={news.title} 
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                onError={(e) => {
                                  const target = e.target as HTMLImageElement;
                                  target.style.display = 'none';
                                }}
                              />
                            </div>
                            <div className="flex-1 min-w-0">
                              <h4 className="font-semibold text-gray-800 text-sm line-clamp-2 group-hover:text-primary transition-colors">
                                {news.title}
                              </h4>
                              <p className="text-xs text-gray-500 mt-2">{news.date}</p>
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Contact CTA */}
              <Card className="bg-gray-100">
                <CardContent className="p-6 text-center">
                  <h3 className="text-lg font-bold text-gray-800 mb-4">Cần tư vấn thêm?</h3>
                  <p className="text-gray-600 mb-6 text-sm">
                    Liên hệ với SAIGONLAB để được tư vấn chi tiết về các chương trình đào tạo
                  </p>
                  <Link href="/contact">
                    <Button className="w-full">
                      Liên hệ ngay
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
import { useQuery } from "@tanstack/react-query";
import { Award, BookOpen, Users, Star, Trophy, Target, Heart } from "lucide-react";
import { Header, Footer } from "@/components/layout";
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { Badge } from "@/components/ui/badge";
import type { Faculty } from "@shared/schema";

export default function Faculty() {
  const { data: faculty, isLoading } = useQuery<Faculty[]>({
    queryKey: ["/api/faculty"],
  });

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
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {Array.from({ length: 8 }).map((_, i) => (
                <Card key={i} className="p-6 text-center">
                  <Skeleton className="w-24 h-24 rounded-full mx-auto mb-4" />
                  <Skeleton className="h-6 w-32 mx-auto mb-2" />
                  <Skeleton className="h-4 w-24 mx-auto mb-2" />
                  <Skeleton className="h-12 w-full" />
                </Card>
              ))}
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const coreFaculty = faculty?.filter(member => member.isCore === 1) || [];
  const extendedFaculty = faculty?.filter(member => member.isCore === 0) || [];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-blue-600 text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-32 h-32 bg-yellow-300/20 rounded-full blur-2xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-green-300/15 rounded-full blur-xl"></div>
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-center space-x-2 mb-6">
              <Users className="w-8 h-8 text-yellow-300" />
              <span className="text-lg font-medium text-yellow-200">Đội Ngũ Chuyên Nghiệp</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Đội Ngũ Giảng Viên SAIGONLAB
            </h1>
            <p className="text-xl md:text-2xl opacity-90 max-w-4xl mx-auto mb-10 leading-relaxed">
              Đội ngũ nhân lực được đào tạo bài bản, có kinh nghiệm chuyên môn cao, 
              tập hợp các chuyên viên hoạt động trong lĩnh vực tin học và các chuyên gia trong ngành
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 max-w-3xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                <div className="text-2xl font-bold text-yellow-300">{coreFaculty.length}</div>
                <div className="text-sm text-blue-100">Giảng viên nòng cốt</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                <div className="text-2xl font-bold text-green-300">{extendedFaculty.length}+</div>
                <div className="text-sm text-blue-100">Giảng viên</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                <div className="text-2xl font-bold text-orange-300">15+</div>
                <div className="text-sm text-blue-100">Năm kinh nghiệm</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                <div className="text-2xl font-bold text-pink-300">100%</div>
                <div className="text-sm text-blue-100">Chứng chỉ quốc tế</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Faculty */}
      <section className="py-24 bg-white relative">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-20 w-64 h-64 bg-orange-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-48 h-48 bg-blue-500 rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center space-x-2 bg-orange-100 text-orange-600 px-6 py-3 rounded-full mb-8">
              <Trophy className="w-6 h-6" />
              <span className="font-semibold">Chuyên Gia Hàng Đầu</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Đội Ngũ Giảng Viên Nòng Cốt
            </h2>
            <div className="w-32 h-1 bg-orange-500 mx-auto mb-8 rounded-full"></div>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Những chuyên gia hàng đầu với nhiều năm kinh nghiệm trong lĩnh vực đào tạo và phát triển công nghệ thông tin
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {coreFaculty.map((member, index) => (
              <Card key={member.id} className="group relative bg-white rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 border-0 shadow-lg h-full flex flex-col">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 via-transparent to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <CardContent className="p-8 text-center relative z-10 flex flex-col h-full">
                  <div className="relative mb-6">
                    <div className="w-28 h-28 mx-auto mb-6 relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-red-500 rounded-full p-1 animate-pulse group-hover:animate-none">
                        <div className="w-full h-full rounded-full bg-white flex items-center justify-center overflow-hidden">
                          <img 
                            src={member.imageUrl} 
                            alt={member.name} 
                            className="w-24 h-24 object-cover rounded-full transition-transform duration-500 group-hover:scale-110"
                            onError={(e) => {
                              const target = e.target as HTMLImageElement;
                              target.style.display = 'none';
                            }}
                          />
                        </div>
                      </div>
                      <div className="absolute -top-2 -right-2">
                        <Badge className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-3 py-1 text-xs font-bold shadow-lg">
                          <Star className="w-3 h-3 mr-1" />
                          Nòng Cốt
                        </Badge>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-4 flex-grow flex flex-col">
                    <h3 className="text-2xl font-bold text-gray-800 group-hover:text-orange-600 transition-colors duration-300">
                      {member.name}
                    </h3>
                    
                    <div className="bg-blue-50 rounded-xl p-3">
                      <p className="text-primary font-bold text-lg">{member.degree}</p>
                    </div>
                    
                    {member.specialty && (
                      <div className="bg-orange-50 rounded-xl p-3">
                        <div className="flex items-center justify-center space-x-2 text-orange-600">
                          <Target className="w-4 h-4" />
                          <p className="font-semibold text-sm">{member.specialty}</p>
                        </div>
                      </div>
                    )}
                    
                    <div className="bg-gray-50 rounded-xl p-4 flex-grow">
                      <div className="flex items-start space-x-2 h-full">
                        <BookOpen className="w-4 h-4 text-gray-600 mt-1 flex-shrink-0" />
                        <p className="text-sm text-gray-700 leading-relaxed text-left flex-grow">
                          {member.experience}
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-6 pt-6 border-t border-gray-100">
                    <div className="flex items-center justify-center space-x-2 text-orange-500">
                      <Award className="w-4 h-4" />
                      <span className="text-xs font-semibold">Giảng Viên Cốt Cán</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Extended Faculty */}
      <section className="py-24 bg-gray-50 relative">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 right-20 w-64 h-64 bg-blue-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-48 h-48 bg-green-500 rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-600 px-6 py-3 rounded-full mb-8">
              <Users className="w-6 h-6" />
              <span className="font-semibold">Đội Ngũ Rộng Lớn</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Đội Ngũ Giảng Viên
            </h2>
            <div className="w-32 h-1 bg-blue-500 mx-auto mb-8 rounded-full"></div>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Đội ngũ giảng viên đa dạng với chuyên môn sâu trong các lĩnh vực khác nhau
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {extendedFaculty.map((member, index) => (
              <Card key={member.id} className="group bg-white rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0 shadow-md h-full flex flex-col">
                <CardContent className="p-6 text-center flex flex-col h-full">
                  <div className="relative mb-6">
                    <div className="w-20 h-20 mx-auto mb-4 relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-green-500 rounded-full p-1 group-hover:from-blue-600 group-hover:to-green-600 transition-all duration-300">
                        <div className="w-full h-full rounded-full bg-white flex items-center justify-center overflow-hidden">
                          <img 
                            src={member.imageUrl} 
                            alt={member.name} 
                            className="w-16 h-16 object-cover rounded-full transition-transform duration-300 group-hover:scale-110"
                            onError={(e) => {
                              const target = e.target as HTMLImageElement;
                              target.style.display = 'none';
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-3 flex-grow flex flex-col">
                    <h4 className="text-lg font-bold text-gray-800 group-hover:text-blue-600 transition-colors duration-300 min-h-[3rem] flex items-center justify-center">
                      {member.name}
                    </h4>
                    
                    <div className="bg-blue-50 rounded-lg p-2 min-h-[2.5rem] flex items-center justify-center">
                      <p className="text-primary font-semibold text-sm">{member.degree}</p>
                    </div>
                    
                    <div className="bg-gray-50 rounded-lg p-3 flex-grow min-h-[4rem] flex items-center">
                      <p className="text-gray-600 text-xs leading-relaxed">{member.experience}</p>
                    </div>
                    
                    {member.specialty && (
                      <div className="mt-auto">
                        <Badge variant="outline" className="text-xs border-blue-200 text-blue-600 bg-blue-50">
                          <BookOpen className="w-3 h-3 mr-1" />
                          {member.specialty}
                        </Badge>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-50 via-white to-orange-50"></div>
          <div className="absolute top-10 right-10 w-40 h-40 bg-blue-200/30 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 left-10 w-32 h-32 bg-orange-200/30 rounded-full blur-2xl"></div>
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-primary to-blue-600 text-white px-6 py-3 rounded-full mb-8">
              <Heart className="w-5 h-5" />
              <span className="font-semibold">Cùng Nhau Phát Triển</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Học cùng các chuyên gia hàng đầu
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 mb-12 leading-relaxed">
              Đội ngũ giảng viên của SAIGONLAB luôn sẵn sàng chia sẻ kiến thức và kinh nghiệm 
              để giúp bạn đạt được mục tiêu nghề nghiệp
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
              <a 
                href="/#contact" 
                className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-primary to-blue-600 text-white rounded-2xl font-bold hover:from-blue-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl"
              >
                <Users className="w-5 h-5 mr-2" />
                Đăng ký tư vấn ngay
              </a>
              <a 
                href="/courses" 
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-primary text-primary rounded-2xl font-bold hover:bg-primary hover:text-white transition-all duration-300 transform hover:scale-105"
              >
                <BookOpen className="w-5 h-5 mr-2" />
                Xem các khóa học
              </a>
            </div>

            {/* Features */}
            <div className="grid md:grid-cols-3 gap-8 mt-16">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-100">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">Chuyên Môn Cao</h3>
                <p className="text-gray-600 text-sm">Giảng viên có chứng chỉ quốc tế và kinh nghiệm thực tế</p>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-100">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">Phương Pháp Hiện Đại</h3>
                <p className="text-gray-600 text-sm">Áp dụng phương pháp giảng dạy tiến tiến và hiệu quả</p>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-100">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">Tận Tâm Hỗ Trợ</h3>
                <p className="text-gray-600 text-sm">Luôn sẵn sàng hỗ trợ và giải đáp thắc mắc của học viên</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
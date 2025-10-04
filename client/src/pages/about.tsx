import { Header, Footer } from "@/components/layout";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useQuery } from "@tanstack/react-query";
import { CheckCircle, Target, Eye, Users, Award, Shield, Lightbulb, Clock, Zap, HandHeart, Star, Sparkles, TrendingUp, Heart } from "lucide-react";
import saigonlabLogo from "@assets/logo_1753803873544.png";

interface AboutInfo {
  id: string;
  title: string;
  content: string;
  imageUrl: string | null;
  orderIndex: number;
}

export default function About() {
  const { data: aboutInfo, isLoading } = useQuery<AboutInfo[]>({
    queryKey: ['/api/about']
  });

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        <Header />
        <div className="flex items-center justify-center py-20">
          <div className="text-lg text-gray-600 dark:text-gray-300">Đang tải...</div>
        </div>
        <Footer />
      </div>
    );
  }

  // Get specific content by ID
  const getContent = (id: string) => aboutInfo?.find(item => item.id === id);
  const introduction = getContent('introduction');
  const timeline2016 = getContent('timeline-2016');
  const timeline2017 = getContent('timeline-2017');
  const timelinePresent = getContent('timeline-present');
  const vision = getContent('vision');
  const missionStudents = getContent('mission-students');
  const missionBusiness = getContent('mission-business');
  const missionSociety = getContent('mission-society');
  const coreValuesInnovation = getContent('core-values-innovation');
  const coreValuesCooperation = getContent('core-values-cooperation');
  const coreValuesQuality = getContent('core-values-quality');
  const coreValuesResponsibility = getContent('core-values-responsibility');
  const callToAction = getContent('call-to-action');

  // Timeline data from backend
  const timelineData = [
    {
      year: "2016",
      title: timeline2016?.title || "2016",
      description: timeline2016?.content || ""
    },
    {
      year: "2017",
      title: timeline2017?.title || "2017",
      description: timeline2017?.content || ""
    },
    {
      year: "Hiện nay",
      title: timelinePresent?.title || "Hiện nay",
      description: timelinePresent?.content || ""
    }
  ];

  // Core values with icons and slide-style design
  const coreValues = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Đổi Mới & Sáng Tạo",
      description: coreValuesInnovation?.content || "",
      color: "from-yellow-500 to-orange-500",
      bgColor: "from-yellow-50 to-orange-50"
    },
    {
      icon: <HandHeart className="w-8 h-8" />,
      title: "Hợp Tác & Phát Triển",
      description: coreValuesCooperation?.content || "",
      color: "from-green-500 to-teal-500",
      bgColor: "from-green-50 to-teal-50"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Chất Lượng & Thực Tiễn",
      description: coreValuesQuality?.content || "",
      color: "from-blue-500 to-purple-500",
      bgColor: "from-blue-50 to-purple-50"
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: "Trách Nhiệm & Cam Kết",
      description: coreValuesResponsibility?.content || "",
      color: "from-pink-500 to-red-500",
      bgColor: "from-pink-50 to-red-50"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Header />
      
      {/* Hero Section - Introduction */}
      <section className="relative bg-primary text-white py-24 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-40 h-40 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-32 h-32 bg-yellow-300/20 rounded-full blur-2xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-green-300/15 rounded-full blur-xl animate-pulse delay-500"></div>
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-center space-x-2 mb-6">
              <Sparkles className="w-8 h-8 text-yellow-300" />
              <span className="text-lg font-medium text-yellow-200">Về Chúng Tôi</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight" data-testid="hero-title">
              {introduction?.title || "GIỚI THIỆU VỀ SAIGONLAB"}
            </h1>
            <p className="text-xl md:text-2xl opacity-90 max-w-4xl mx-auto leading-relaxed" data-testid="hero-description">
              {introduction?.content || ""}
            </p>
          </div>
        </div>
      </section>
      {/* Vision and Mission Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6" data-testid="vision-mission-heading">
              Tầm nhìn & Sứ mệnh
            </h2>
            <div className="w-32 h-1 bg-orange-500 mx-auto mb-8 rounded-full"></div>
          </div>
          
          {/* Vision */}
          <Card className="bg-white shadow-2xl max-w-5xl mx-auto mb-16 overflow-hidden border-0">
            <div className="bg-blue-500 p-8">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mr-4">
                  <Eye className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-white" data-testid="vision-title">
                  {vision?.title || "Tầm nhìn"}
                </h3>
              </div>
            </div>
            <CardContent className="p-8">
              <p className="text-gray-700 leading-relaxed text-xl" data-testid="vision-content">
                {vision?.content || ""}
              </p>
            </CardContent>
          </Card>
          
          {/* Mission */}
          <div className="mb-12">
            <div className="text-center mb-12">
              <h3 className="text-4xl font-bold text-gray-800" data-testid="mission-heading">
                Sứ mệnh
              </h3>
              <div className="w-24 h-1 bg-blue-500 mx-auto mt-4 rounded-full"></div>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {/* Mission for Students */}
              <Card className="group bg-white shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 border-0 overflow-hidden">
                <div className="bg-green-500 p-6">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                </div>
                <CardContent className="p-8">
                  <h4 className="text-2xl font-bold text-gray-800 mb-4 text-center group-hover:text-green-600 transition-colors" data-testid="mission-students-title">
                    Đối với học viên
                  </h4>
                  <p className="text-gray-600 leading-relaxed text-center" data-testid="mission-students-content">
                    {missionStudents?.content || ""}
                  </p>
                </CardContent>
              </Card>

              {/* Mission for Business */}
              <Card className="group bg-white shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 border-0 overflow-hidden">
                <div className="bg-blue-500 p-6">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto">
                    <Target className="w-8 h-8 text-white" />
                  </div>
                </div>
                <CardContent className="p-8">
                  <h4 className="text-2xl font-bold text-gray-800 mb-4 text-center group-hover:text-blue-600 transition-colors" data-testid="mission-business-title">
                    Đối với doanh nghiệp
                  </h4>
                  <p className="text-gray-600 leading-relaxed text-center" data-testid="mission-business-content">
                    {missionBusiness?.content || ""}
                  </p>
                </CardContent>
              </Card>

              {/* Mission for Society */}
              <Card className="group bg-white shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 border-0 overflow-hidden">
                <div className="bg-orange-500 p-6">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto">
                    <CheckCircle className="w-8 h-8 text-white" />
                  </div>
                </div>
                <CardContent className="p-8">
                  <h4 className="text-2xl font-bold text-gray-800 mb-4 text-center group-hover:text-orange-600 transition-colors" data-testid="mission-society-title">
                    Đối với xã hội
                  </h4>
                  <p className="text-gray-600 leading-relaxed text-center" data-testid="mission-society-content">
                    {missionSociety?.content || ""}
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
      {/* Timeline Section */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-orange-500 mb-6 uppercase" data-testid="timeline-heading">Lịch sử hình thành</h2>
            <div className="w-16 h-1 bg-orange-500 mx-auto mb-8"></div>
          </div>

          <div className="relative max-w-6xl mx-auto">
            {/* Blue Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-blue-500 hidden lg:block" style={{height: 'calc(100% - 100px)'}}></div>
            
            {timelineData.map((item, index) => (
              <div key={item.year} className="relative mb-16 lg:mb-24">
                {/* Timeline dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-500 rounded-full border-4 border-white dark:border-gray-900 hidden lg:block z-10" style={{top: '80px'}}></div>
                
                <div className={`flex flex-col lg:flex-row items-center gap-8 ${
                  index % 2 === 0 ? '' : 'lg:flex-row-reverse'
                }`}>
                  {/* Image */}
                  <div className="w-full lg:w-1/3">
                    <div className="w-48 h-48 mx-auto rounded-3xl overflow-hidden shadow-lg">
                      <img 
                        src={saigonlabLogo} 
                        alt="SaigonLab Logo" 
                        className="w-full h-full object-contain p-4"
                        data-testid={`timeline-image-${item.year}`}
                      />
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="w-full lg:w-2/3">
                    <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
                      {/* Year Badge */}
                      <div className="mb-4">
                        <Badge className="bg-blue-500 hover:bg-blue-600 text-white text-lg px-4 py-2 rounded-full font-bold" data-testid={`timeline-year-${item.year}`}>
                          {item.year}
                        </Badge>
                      </div>
                      
                      {/* Description */}
                      <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed" data-testid={`timeline-description-${item.year}`}>
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Core Values Section - Slide Style */}
      <section className="py-24 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6" data-testid="values-heading">
              Giá trị cốt lõi
            </h2>
            <div className="w-32 h-1 bg-blue-500 mx-auto mb-8 rounded-full"></div>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Những giá trị cốt lõi dẫn dắt mọi hoạt động của SAIGONLAB
            </p>
          </div>

          {/* Slide-style layout for core values */}
          <div className="grid md:grid-cols-2 gap-8">
            {coreValues.map((value, index) => (
              <Card key={index} className="group bg-white shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-6 border-0 overflow-hidden">
                <CardContent className="p-10">
                  <div className="flex items-start space-x-6">
                    <div className={`flex-shrink-0 w-20 h-20 ${value.color.includes('yellow') ? 'bg-yellow-500' : value.color.includes('green') ? 'bg-green-500' : value.color.includes('blue') ? 'bg-blue-500' : 'bg-pink-500'} rounded-3xl flex items-center justify-center text-white shadow-2xl group-hover:scale-110 transition-transform duration-500`}>
                      {value.icon}
                    </div>
                    <div className="flex-grow">
                      <h3 className="text-3xl font-bold text-gray-800 dark:text-white mb-6" data-testid={`value-title-${index}`}>
                        {value.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg" data-testid={`value-description-${index}`}>
                        {value.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      {/* Call to Action Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center space-x-2 bg-primary text-white px-6 py-3 rounded-full mb-8">
              <TrendingUp className="w-5 h-5" />
              <span className="font-semibold">Bắt Đầu Hành Trình</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6" data-testid="cta-title">
              {callToAction?.title || "Sẵn Sàng Bắt Đầu Hành Trình Học Tập?"}
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed" data-testid="cta-description">
              {callToAction?.content || ""}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
              <Button 
                size="lg" 
                className="group bg-primary hover:bg-blue-600 text-white text-lg px-8 py-4 font-bold shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300"
                data-testid="button-consultation"
              >
                <Users className="w-5 h-5 mr-2" />
                Đăng ký tư vấn
                <TrendingUp className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="group border-2 border-primary text-primary hover:bg-primary hover:text-white text-lg px-8 py-4 font-bold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                data-testid="button-courses"
              >
                <Award className="w-5 h-5 mr-2" />
                Xem khóa học
                <TrendingUp className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>

            {/* Features */}
            <div className="grid md:grid-cols-3 gap-8 mt-16">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-100">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">Chất Lượng Hàng Đầu</h3>
                <p className="text-gray-600 text-sm">Chương trình đào tạo chuẩn quốc tế với chất lượng cao</p>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-100">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">Giảng Viên Chuyên Nghiệp</h3>
                <p className="text-gray-600 text-sm">Đội ngũ giảng viên giàu kinh nghiệm và chuyên môn cao</p>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-100">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">Cơ Hội Nghề Nghiệp</h3>
                <p className="text-gray-600 text-sm">Hỗ trợ kết nối việc làm và phát triển sự nghiệp</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
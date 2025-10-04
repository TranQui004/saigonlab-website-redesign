import { useQuery } from "@tanstack/react-query";
import { Link } from "wouter";
import { ArrowRight, Clock, Users, Search } from "lucide-react";
import { useState, useMemo } from "react";
import { Header, Footer } from "@/components/layout";
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { CourseDescription } from "@/components/features/courses";
import type { Course } from "@shared/schema";

export default function Courses() {
  const [searchQuery, setSearchQuery] = useState("");
  const { data: courses, isLoading } = useQuery<Course[]>({
    queryKey: ["/api/courses"],
  });

  // Filter courses based on search query
  const filteredCourses = useMemo(() => {
    if (!courses || !searchQuery.trim()) return courses;
    return courses.filter(course => 
      course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.description.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [courses, searchQuery]);

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
              {Array.from({ length: 9 }).map((_, i) => (
                <Card key={i} className="overflow-hidden">
                  <Skeleton className="aspect-video w-full" />
                  <CardContent className="p-6">
                    <Skeleton className="h-6 w-32 mb-2" />
                    <Skeleton className="h-4 w-24 mb-4" />
                    <Skeleton className="h-20 w-full mb-6" />
                    <Skeleton className="h-4 w-20" />
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

  // Group courses by category (using filtered courses)
  const securityCourses = filteredCourses?.filter(course => 
    course.title.includes("SECURITY") || 
    course.title.includes("CEH") || 
    course.title.includes("CHFI") ||
    course.title.includes("CSCU") ||
    course.title.includes("BẢO MẬT") ||
    course.title.includes("ATTT") ||
    course.title.includes("ASA")
  ) || [];

  const networkCourses = filteredCourses?.filter(course => 
    course.title.includes("JNCIP") || 
    course.title.includes("JNCIS") ||
    course.title.includes("PHÂN TÍCH")
  ) || [];

  const otherCourses = filteredCourses?.filter(course => 
    !securityCourses.includes(course) && !networkCourses.includes(course)
  ) || [];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      {/* Hero Section */}
      <section className="bg-primary text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Các Khóa Học Tại SAIGONLAB</h1>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Chuyên đào tạo các chứng chỉ kỹ sư mạng Quốc tế của các hãng nổi tiếng như: Cisco, Microsoft, Sun, Linux, Juniper, Oracle,...
          </p>
        </div>
      </section>
      {/* Courses Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <p className="text-xl opacity-90 max-w-3xl mx-auto text-center">
            Với phòng LAB hiện đại, đội ngũ Giảng viên chuyên nghiệp và uy tín, đội ngũ kỹ thuật lành nghề, 
            SAIGONLAB mang đến những dịch vụ chất lượng và chuyên nghiệp.
          </p>
        </div>
      </section>
      {/* Training Programs Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-orange-500 mb-6 uppercase">Các Chương Trình Đào Tạo</h2>
            <div className="w-16 h-1 bg-orange-500 mx-auto mb-8"></div>
          </div>

          {/* Top Row - Network, System, Security */}
          <div className="grid md:grid-cols-3 gap-12 mb-16">
            <div className="text-center">
              <div className="mb-6">
                <img src="https://www.saigonlab.edu.vn/wp-content/uploads/2024/05/network.png" alt="Network" className="w-24 h-24 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-blue-600 mb-4">NETWORK</h3>
              </div>
              <div className="text-left space-y-2 text-sm">
                <p>• Đào tạo theo chuẩn hãng từ cơ bản đến nâng cao: Cisco, Juniper</p>
                <p>• Đào tạo theo yêu cầu của doanh nghiệp</p>
              </div>
            </div>

            <div className="text-center">
              <div className="mb-6">
                <img src="https://www.saigonlab.edu.vn/wp-content/uploads/2024/05/system.png" alt="System" className="w-24 h-24 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-red-600 mb-4">SYSTEM</h3>
              </div>
              <div className="text-left space-y-2 text-sm">
                <p>• Đào tạo theo chuẩn của hãng từ cơ bản đến nâng cao: VMware, Linux, Microsoft</p>
                <p>• Đào tạo theo yêu cầu của doanh nghiệp</p>
              </div>
            </div>

            <div className="text-center">
              <div className="mb-6">
                <img src="https://www.saigonlab.edu.vn/wp-content/uploads/2024/05/security.png" alt="Security" className="w-24 h-24 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-black mb-4">SECURITY</h3>
              </div>
              <div className="text-left space-y-2 text-sm">
                <p>• Đào tạo theo chuẩn của EC-Council, CompTIA, Fortinet, Cisco, Juniper</p>
                <p>• Đào tạo theo yêu cầu của doanh nghiệp</p>
                <p className="text-xs">1. Bảo mật web trên nền Mã nguồn mở</p>
                <p className="text-xs">2. ATTT cho người dùng cuối</p>
                <p className="text-xs">3. ATTT cho cán bộ Kỹ thuật/Quản lý</p>
              </div>
            </div>
          </div>

          {/* Bottom Row - Mobile, OJT, Soft Skills */}
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="mb-6">
                <img src="https://www.saigonlab.edu.vn/wp-content/uploads/2024/05/mobile.png" alt="Mobile Computing" className="w-24 h-24 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-red-600 mb-4">MOBILE COMPUTING</h3>
              </div>
              <div className="text-left space-y-2 text-sm">
                <p>• Mobile Security Basic</p>
                <p>• Mobile Security for Android</p>
                <p>• Mobile Security for iOS</p>
              </div>
            </div>

            <div className="text-center">
              <div className="mb-6">
                <img src="https://www.saigonlab.edu.vn/wp-content/uploads/2024/05/jobtrain.png" alt="On The Job Training" className="w-24 h-24 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-blue-600 mb-4">ON THE JOB TRAINING</h3>
              </div>
              <div className="text-left space-y-2 text-sm">
                <p>• Ngôn ngữ lập trình PHP</p>
                <p>• Ngôn ngữ lập trình Java</p>
                <p>• Ngôn ngữ lập trình DotNet</p>
                <p>• Ngôn ngữ lập trình Swift</p>
                <p>• Ngôn ngữ lập trình Android</p>
              </div>
            </div>

            <div className="text-center">
              <div className="mb-6">
                <img src="https://www.saigonlab.edu.vn/wp-content/uploads/2024/05/skill.png" alt="Soft Skills" className="w-24 h-24 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-purple-600 mb-4">SOFT SKILL</h3>
              </div>
              <div className="text-left space-y-2 text-sm">
                <p>• Kỹ năng giao tiếp, thuyết trình</p>
                <p>• Kỹ năng quản lý thời gian</p>
                <p>• Kỹ năng làm việc nhóm</p>
                <p>• Kỹ năng quản trị nguồn nhân lực</p>
                <p>• Kỹ năng bán hàng qua điện thoại</p>
                <p>• Kỹ năng xử lý xung đột</p>
                <p>• Kỹ năng lãnh đạo</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Courses Content */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4">
          
          {/* Search Bar */}
          <div className="max-w-xl mx-auto mb-12">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                type="text"
                placeholder="Tìm kiếm khóa học..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-4 py-3 w-full text-black bg-white border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                data-testid="input-search-courses"
              />
            </div>
          </div>
          
          {/* Security Courses */}
          {securityCourses.length > 0 && (
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-8 text-center">Khóa Học Bảo Mật & An Ninh Mạng</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-fr">
                {securityCourses.map((course) => (
                  <CourseCard key={course.id} course={course} />
                ))}
              </div>
            </div>
          )}

          {/* Network Courses */}
          {networkCourses.length > 0 && (
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-8 text-center">Khóa Học Mạng & Hệ Thống</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-fr">
                {networkCourses.map((course) => (
                  <CourseCard key={course.id} course={course} />
                ))}
              </div>
            </div>
          )}

          {/* Other Courses */}
          {otherCourses.length > 0 && (
            <div>
              <h2 className="text-3xl font-bold mb-8 text-center text-white">Khóa Học Khác</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-fr">
                {otherCourses.map((course) => (
                  <CourseCard key={course.id} course={course} />
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
      <Footer />
    </div>
  );
}

function CourseCard({ course }: { course: Course }) {
  return (
    <Card 
      className="bg-white rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden flex flex-col h-full relative"
      data-testid={`card-course-${course.id}`}
    >
      {/* Duration Badge */}
      <div className="absolute top-4 left-4 z-10">
        <Badge className="bg-yellow-500 hover:bg-yellow-500 text-white text-sm px-3 py-1 rounded-full font-medium">
          <Clock className="w-3 h-3 mr-1" />
          {course.duration}
        </Badge>
      </div>
      
      {/* Course Image */}
      <div className="aspect-video bg-gray-50 flex items-center justify-center p-6 flex-shrink-0">
        <img 
          src={course.imageUrl} 
          alt={course.title} 
          className="max-h-full max-w-full object-contain"
          data-testid={`img-course-${course.id}`}
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.style.display = 'none';
          }}
        />
      </div>
      
      <CardContent className="p-6 flex flex-col flex-grow">
        {/* Course Title */}
        <h3 className="text-xl font-bold mb-4 text-gray-900 leading-tight" data-testid={`text-title-${course.id}`}>
          {course.title}
        </h3>
        
        {/* Course Description */}
        <div className="mb-6 flex-grow" data-testid={`description-${course.id}`}>
          <CourseDescription 
            description={course.description} 
            isExpanded={false}
            className="text-sm"
          />
        </div>
        
        {/* Details Button */}
        <div className="mt-auto">
          <Link 
            href={`/courses/${course.id}`}
            className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-800 transition-colors group text-sm"
            data-testid={`link-details-${course.id}`}
          >
            Xem chi tiết
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}
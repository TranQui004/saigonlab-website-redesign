import { useQuery } from "@tanstack/react-query";
import { useRoute } from "wouter";
import { ArrowLeft, Clock, Users, ExternalLink } from "lucide-react";
import { Link } from "wouter";
import { Header, Footer } from "@/components/layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { CourseDescription, CourseReview } from "@/components/features/courses";
import type { Course } from "@shared/schema";

export default function CourseDetail() {
  const [match, params] = useRoute("/courses/:id");
  const courseId = params?.id;

  const { data: course, isLoading, error } = useQuery<Course>({
    queryKey: ["/api/courses", courseId],
    enabled: !!courseId,
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
                <Skeleton className="h-64 w-full mb-8" />
                <Skeleton className="h-32 w-full" />
              </div>
              <div>
                <Card className="p-6">
                  <Skeleton className="h-48 w-full mb-6" />
                  <Skeleton className="h-32 w-full" />
                </Card>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  if (error || !course) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">Không tìm thấy khóa học</h1>
            <p className="text-gray-600 mb-8">Khóa học bạn đang tìm kiếm không tồn tại.</p>
            <Link href="/courses">
              <Button>
                <ArrowLeft className="mr-2 h-4 w-4" />
                Quay lại danh sách khóa học
              </Button>
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <section className="py-20">
        <div className="container mx-auto px-4">
          {/* Breadcrumb */}
          <div className="flex items-center mb-8 text-sm">
            <Link href="/courses" className="text-primary hover:text-blue-700 flex items-center">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Quay lại khóa học
            </Link>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <h1 className="text-4xl font-bold text-gray-800 mb-6">{course.title}</h1>
              
              <div className="flex items-center gap-4 mb-8">
                <Badge variant="secondary" className="text-sm">
                  <Clock className="w-4 h-4 mr-2" />
                  {course.duration}
                </Badge>
                <Badge variant="outline" className="text-sm">
                  <Users className="w-4 h-4 mr-2" />
                  Chuyên nghiệp
                </Badge>
              </div>

              {/* Course Image */}
              <div className="bg-white rounded-2xl p-8 mb-8 text-center">
                <img 
                  src={course.imageUrl} 
                  alt={course.title} 
                  className="max-h-64 mx-auto object-contain"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                  }}
                />
              </div>

              {/* Course Description */}
              <Card className="mb-8">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-gray-800 mb-6">Mô tả khóa học</h2>
                  <CourseDescription 
                    description={course.description} 
                    isExpanded={true}
                    className="text-base"
                  />
                </CardContent>
              </Card>

              {/* Course Benefits */}
              <Card className="mb-8">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-gray-800 mb-6">Lợi ích khi tham gia</h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-success rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-800 mb-1">Chứng chỉ quốc tế</h3>
                        <p className="text-gray-600">Nhận chứng chỉ được công nhận toàn cầu</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-success rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-800 mb-1">Phòng LAB thực hành</h3>
                        <p className="text-gray-600">Thực hành trên thiết bị thật</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-success rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-800 mb-1">Giảng viên chuyên nghiệp</h3>
                        <p className="text-gray-600">Đội ngũ có kinh nghiệm thực tế</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-success rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-800 mb-1">Hỗ trợ việc làm</h3>
                        <p className="text-gray-600">Kết nối với đối tác doanh nghiệp</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Course Review Section */}
              <CourseReview courseTitle={course.title} />
            </div>

            {/* Sidebar */}
            <div>
              <Card className="sticky top-24">
                <CardContent className="p-6">
                  <div className="text-center mb-6">
                    <div className="text-3xl font-bold text-primary mb-2">Đăng ký ngay</div>
                    <p className="text-gray-600">Nhận tư vấn miễn phí</p>
                  </div>

                  <div className="space-y-4 mb-6">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Thời lượng:</span>
                      <span className="font-semibold">{course.duration}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Hình thức:</span>
                      <span className="font-semibold">Trực tiếp</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Chứng chỉ:</span>
                      <span className="font-semibold">Có</span>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <Link href="/#contact">
                      <Button className="w-full" size="lg">
                        Đăng ký tư vấn
                      </Button>
                    </Link>
                    
                    <a 
                      href={course.detailUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-full"
                    >
                      <Button variant="outline" className="w-full" size="lg">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Xem brochure khóa học
                      </Button>
                    </a>
                  </div>

                  <div className="mt-6 pt-6 border-t border-gray-200">
                    <p className="text-sm text-gray-600 text-center">
                      Liên hệ hotline để được tư vấn chi tiết về khóa học
                    </p>
                  </div>
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
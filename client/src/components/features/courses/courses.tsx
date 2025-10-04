import { useQuery } from "@tanstack/react-query";
import { ArrowRight, Clock, Users } from "lucide-react";
import { Link } from "wouter";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import CourseDescription from "./course-description";
import type { Course } from "@shared/schema";

export default function Courses() {
  const { data: courses, isLoading } = useQuery<Course[]>({
    queryKey: ["/api/courses"],
  });

  if (isLoading) {
    return (
      <section className="py-20 bg-gray-50" id="courses">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Skeleton className="h-12 w-96 mx-auto mb-6" />
            <Skeleton className="h-24 w-full max-w-4xl mx-auto" />
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Array.from({ length: 6 }).map((_, i) => (
              <Card key={i} className="overflow-hidden">
                <CardContent className="p-6">
                  <Skeleton className="h-16 w-16 mb-4" />
                  <Skeleton className="h-6 w-32 mb-2" />
                  <Skeleton className="h-4 w-24 mb-4" />
                  <Skeleton className="h-20 w-full mb-6" />
                  <Skeleton className="h-4 w-20" />
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-gradient-to-br from-blue-600 via-blue-500 to-blue-700" id="courses">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-6">CÁC KHÓA HỌC TẠI SAIGONLAB</h2>
          <p className="text-xl text-white opacity-90 max-w-4xl mx-auto leading-relaxed">
            Với phòng LAB hiện đại, đội ngũ Giảng viên chuyên nghiệp và uy tín, đội ngũ kỹ thuật lành nghề, SAIGONLAB mang đến những dịch vụ chất lượng và chuyên nghiệp, đáp ứng được mọi nhu cầu, mong đợi của Khách hàng/Học viên.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-fr">
          {courses?.slice(0, 6).map((course) => (
            <Card 
              key={course.id} 
              className="bg-white rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden flex flex-col h-full relative"
              data-testid={`card-homepage-course-${course.id}`}
            >
              {/* Duration Badge */}
              <div className="absolute top-4 left-4 z-10">
                <Badge className="bg-yellow-500 hover:bg-yellow-500 text-white text-sm px-3 py-1 rounded-full font-medium">
                  <Clock className="w-3 h-3 mr-1" />
                  {course.duration}
                </Badge>
              </div>
              
              {/* Course Image */}
              <div className="aspect-video bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-6 flex-shrink-0">
                <img 
                  src={course.imageUrl} 
                  alt={course.title} 
                  className="max-h-full max-w-full object-contain"
                  data-testid={`img-homepage-course-${course.id}`}
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                  }}
                />
              </div>
              
              <CardContent className="p-6 flex flex-col flex-grow">
                {/* Course Title */}
                <h3 className="text-xl font-bold mb-4 text-gray-900 leading-tight" data-testid={`text-homepage-title-${course.id}`}>
                  {course.title}
                </h3>
                
                {/* Course Description */}
                <div className="mb-6 flex-grow" data-testid={`homepage-description-${course.id}`}>
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
                    data-testid={`link-homepage-details-${course.id}`}
                  >
                    Xem chi tiết
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* View More Button */}
        <div className="text-center mt-12">
          <Link href="/courses">
            <Button 
              size="lg" 
              className="px-8 py-3 bg-white text-blue-600 hover:bg-blue-50 hover:text-blue-700 border border-blue-200"
              data-testid="button-view-all-courses"
            >
              <ArrowRight className="mr-2 h-5 w-5" />
              Xem tất cả khóa học
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

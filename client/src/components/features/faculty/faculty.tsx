import { useQuery } from "@tanstack/react-query";
import { ArrowRight } from "lucide-react";
import { Link } from "wouter";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import type { Faculty } from "@shared/schema";

export default function Faculty() {
  const { data: faculty, isLoading } = useQuery<Faculty[]>({
    queryKey: ["/api/faculty"],
  });

  if (isLoading) {
    return (
      <section className="py-20 bg-white" id="faculty">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Skeleton className="h-12 w-96 mx-auto mb-6" />
            <Skeleton className="h-24 w-full max-w-4xl mx-auto" />
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {Array.from({ length: 4 }).map((_, i) => (
              <Card key={i} className="p-6 text-center">
                <Skeleton className="w-20 h-20 rounded-full mx-auto mb-4" />
                <Skeleton className="h-6 w-32 mx-auto mb-2" />
                <Skeleton className="h-4 w-24 mx-auto mb-2" />
                <Skeleton className="h-12 w-full" />
              </Card>
            ))}
          </div>
        </div>
      </section>
    );
  }

  const coreFaculty = faculty?.filter(member => member.isCore === 1) || [];
  const extendedFaculty = faculty?.filter(member => member.isCore === 0) || [];

  return (
    <section className="py-20 bg-white" id="faculty">
      <div className="container mx-auto px-4">
        {/* Core Faculty */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">ĐỘI NGŨ GIẢNG VIÊN NÒNG CỐT</h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            SAIGONLAB tự hào với đội ngũ nhân lực được đào tạo bài bản, có kinh nghiệm chuyên môn cao, tập hợp các chuyên viên hoạt động trong lĩnh vực tin học và các chuyên gia trong ngành, nhiệt tình trong công việc để có khả năng đáp ứng tốt nhất nhu cầu của khách hàng.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {coreFaculty.slice(0, 4).map((member) => (
            <Card key={member.id} className="bg-gray-50 rounded-2xl p-6 text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0">
              <CardContent className="p-0">
                <div className="relative mb-6">
                  <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-r from-primary to-blue-600 p-1">
                    <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                      <img 
                        src={member.imageUrl} 
                        alt={member.name} 
                        className="w-20 h-20 object-cover rounded-full"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                        }}
                      />
                    </div>
                  </div>
                  <Badge className="absolute -top-2 -right-2 bg-secondary text-white">
                    Nòng cốt
                  </Badge>
                </div>
                
                <h3 className="text-xl font-bold text-gray-800 mb-3">{member.name}</h3>
                <p className="text-primary font-semibold mb-2">{member.degree}</p>
                {member.specialty && (
                  <p className="text-gray-600 mb-3 text-sm">{member.specialty}</p>
                )}
                <p className="text-sm text-gray-600 leading-relaxed">{member.experience}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* View More Button */}
        <div className="text-center">
          <Link href="/faculty">
            <Button size="lg" className="px-8 py-3">
              <ArrowRight className="mr-2 h-5 w-5" />
              Xem tất cả giảng viên
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

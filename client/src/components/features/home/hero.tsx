import { CheckCircle, Star, Users, Award, ArrowRight, Sparkles } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ConsultationForm } from "@/components/forms";

export default function Hero() {
  return (
    <section className="relative bg-primary text-white py-24 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-40 h-40 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-yellow-300/20 rounded-full blur-2xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-green-300/15 rounded-full blur-xl animate-pulse delay-500"></div>
        <div className="absolute top-1/4 right-1/4 w-16 h-16 bg-orange-300/20 rounded-full blur-lg animate-pulse delay-700"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full">
              <Star className="w-5 h-5 text-yellow-300" />
              <span className="font-medium">SAIGONLAB - Đào Tạo Chuyên Nghiệp</span>
            </div>
            
            <div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Trung tâm chuyên đào tạo 
                <span className="block text-yellow-300">Chứng chỉ Kỹ sư Mạng Quốc tế</span>
              </h1>
              
              <div className="text-2xl mb-8 font-semibold text-yellow-200 italic">
                <Sparkles className="inline w-6 h-6 mr-2" />
                "Nâng Cao Năng Lực - Phát Triển Bền Vững"
              </div>
              
              <p className="text-xl md:text-2xl mb-10 opacity-90 leading-relaxed">
                Chuyên đào tạo các chứng chỉ kỹ sư mạng Quốc tế của các hãng nổi tiếng như: 
                <span className="font-bold text-yellow-200">Cisco, Microsoft, Sun, Linux, Juniper, Oracle</span>
              </p>
            </div>
            
            {/* Key Features */}
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-xl p-4">
                <CheckCircle className="text-green-300 h-6 w-6 flex-shrink-0" />
                <span className="font-medium">Chương trình theo chuẩn quốc tế</span>
              </div>
              <div className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-xl p-4">
                <Users className="text-blue-300 h-6 w-6 flex-shrink-0" />
                <span className="font-medium">Đội ngũ giảng viên chuyên môn cao</span>
              </div>
              <div className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-xl p-4">
                <Award className="text-orange-300 h-6 w-6 flex-shrink-0" />
                <span className="font-medium">Hệ thống đối tác lớn</span>
              </div>
              <div className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-xl p-4">
                <Star className="text-yellow-300 h-6 w-6 flex-shrink-0" />
                <span className="font-medium">Chứng chỉ quốc tế uy tín</span>
              </div>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6">
              <Link href="/courses">
                <Button size="lg" className="group bg-yellow-500 hover:bg-yellow-600 text-black font-bold px-8 py-4 shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300 w-full sm:w-auto">
                  <Award className="w-5 h-5 mr-2" />
                  Xem Khóa Học
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" className="group bg-white hover:bg-gray-100 text-primary font-bold px-8 py-4 shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300 w-full sm:w-auto">
                  <Users className="w-5 h-5 mr-2" />
                  Tư Vấn Miễn Phí
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </div>
          
          {/* Consultation Form */}
          <div className="relative">
            <div className="absolute inset-0 bg-white/5 backdrop-blur-sm rounded-3xl"></div>
            <div className="relative">
              <ConsultationForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import { useQuery } from "@tanstack/react-query";
import { MapPin, Phone, Mail, Clock, Globe, MessageCircle, Users, Award, Star } from "lucide-react";
import { Header, Footer } from "@/components/layout";
import { ContactConsultationForm } from "@/components/forms";
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import type { ContactInfo } from "@shared/schema";

export default function Contact() {
  const { data: contactInfo, isLoading } = useQuery<ContactInfo>({
    queryKey: ["/api/contact"],
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
            <div className="grid lg:grid-cols-2 gap-12">
              <div className="space-y-8">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Card key={i} className="p-6">
                    <div className="flex items-center space-x-4">
                      <Skeleton className="w-12 h-12 rounded-full" />
                      <div className="flex-1">
                        <Skeleton className="h-6 w-32 mb-2" />
                        <Skeleton className="h-4 w-48" />
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
              <Card className="p-8">
                <Skeleton className="h-64 w-full" />
              </Card>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-blue-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Liên Hệ SAIGONLAB
            </h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto leading-relaxed">
              Chúng tôi luôn sẵn sàng tư vấn và hỗ trợ bạn tìm hiểu về các chương trình đào tạo chuyên nghiệp
            </p>
            <div className="flex flex-wrap justify-center gap-6 mt-8">
              <div className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
                <Star className="w-5 h-5 text-yellow-300" />
                <span className="text-sm font-medium">Tư vấn miễn phí 24/7</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
                <Users className="w-5 h-5 text-green-300" />
                <span className="text-sm font-medium">Đội ngũ chuyên gia</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
                <Award className="w-5 h-5 text-orange-300" />
                <span className="text-sm font-medium">Chứng chỉ quốc tế</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <div className="lg:col-span-2">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-orange-500 mb-6">
                  THÔNG TIN LIÊN HỆ
                </h2>
                <div className="w-24 h-1 bg-orange-500 mx-auto mb-8 rounded-full"></div>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Hãy liên hệ với chúng tôi để được tư vấn chi tiết về các khóa học và lộ trình học tập phù hợp
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8 mb-16">
                {/* Address */}
                <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 text-center border border-gray-100 hover:border-blue-200">
                  <div className="w-20 h-20 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <MapPin className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4">Địa Chỉ Trung Tâm</h3>
                  <a 
                    href={`https://maps.google.com/?q=${encodeURIComponent(contactInfo?.address || '28/61 Cư Xá Lữ Gia, phường 15, quận 11, Tp. HCM')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-blue-600 transition-colors cursor-pointer block"
                  >
                    {contactInfo?.address || '28/61 Cư Xá Lữ Gia, phường 15, quận 11, Tp. HCM'}
                  </a>
                  <div className="mt-4">
                    <span className="inline-flex items-center space-x-1 text-sm text-blue-600 font-medium">
                      <MapPin className="w-4 h-4" />
                      <span>Nhấp để xem bản đồ</span>
                    </span>
                  </div>
                </div>

                {/* Phone */}
                <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 text-center border border-gray-100 hover:border-green-200">
                  <div className="w-20 h-20 bg-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <Phone className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4">Hotline Tư Vấn</h3>
                  <a 
                    href={`tel:${contactInfo?.phone || '02838638239'}`}
                    className="text-gray-600 hover:text-green-600 transition-colors cursor-pointer block text-lg font-semibold"
                  >
                    {contactInfo?.phone || '028.3863.8239'}
                  </a>
                  <div className="mt-4">
                    <span className="inline-flex items-center space-x-1 text-sm text-green-600 font-medium">
                      <Phone className="w-4 h-4" />
                      <span>Nhấp để gọi ngay</span>
                    </span>
                  </div>
                </div>

                {/* Email */}
                <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 text-center border border-gray-100 hover:border-red-200">
                  <div className="w-20 h-20 bg-red-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <Mail className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4">Email Hỗ Trợ</h3>
                  <a 
                    href={`mailto:${contactInfo?.email || 'info@saigonlab.edu.vn'}`}
                    className="text-gray-600 hover:text-red-600 transition-colors cursor-pointer block"
                  >
                    {contactInfo?.email || 'info@saigonlab.edu.vn'}
                  </a>
                  <div className="mt-4">
                    <span className="inline-flex items-center space-x-1 text-sm text-red-600 font-medium">
                      <Mail className="w-4 h-4" />
                      <span>Nhấp để gửi email</span>
                    </span>
                  </div>
                </div>

                {/* Working Hours */}
                <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 text-center border border-gray-100 hover:border-orange-200">
                  <div className="w-20 h-20 bg-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <Clock className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4">Giờ Làm Việc</h3>
                  <div className="text-gray-600 space-y-2">
                    <div className="flex justify-center items-center space-x-2">
                      <span className="font-semibold">Sáng:</span>
                      <span>8:00 - 12:00</span>
                    </div>
                    <div className="flex justify-center items-center space-x-2">
                      <span className="font-semibold">Chiều:</span>
                      <span>13:30 - 17:00</span>
                    </div>
                    <div className="text-sm text-orange-600 font-medium mt-2">
                      Thứ 2 - Thứ 6
                    </div>
                  </div>
                </div>
              </div>

              {/* Map Section */}
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
                <div className="bg-primary text-white text-center py-8">
                  <h3 className="text-3xl font-bold mb-2">Vị Trí Trung Tâm</h3>
                  <p className="text-blue-100">Tìm đường đến SAIGONLAB dễ dàng</p>
                </div>
                <div className="p-6">
                  <div className="relative w-full h-96 rounded-xl overflow-hidden shadow-lg">
                    <iframe
                      src="https://maps.google.com/maps?q=28/61+C%C6%B0+X%C3%A1+L%E1%BB%AF+Gia,+ph%C6%B0%E1%BB%9Dng+15,+qu%E1%BA%ADn+11,+Tp.+HCM&t=&z=17&ie=UTF8&iwloc=&output=embed"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="SAIGONLAB Location"
                      className="rounded-xl"
                    ></iframe>
                  </div>
                  <div className="text-center mt-6">
                    <p className="text-gray-600 mb-4 text-lg">
                      {contactInfo?.address || '28/61 Cư Xá Lữ Gia, phường 15, quận 11, Tp. HCM'}
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                      <a 
                        href={`https://maps.google.com/?q=${encodeURIComponent(contactInfo?.address || '28/61 Cư Xá Lữ Gia, phường 15, quận 11, Tp. HCM')}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center space-x-2 bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                      >
                        <MapPin className="w-5 h-5" />
                        <span className="font-medium">Chỉ Đường</span>
                      </a>
                      <a 
                        href={`tel:${contactInfo?.phone || '02838638239'}`}
                        className="inline-flex items-center space-x-2 bg-green-600 text-white px-6 py-3 rounded-xl hover:bg-green-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                      >
                        <Phone className="w-5 h-5" />
                        <span className="font-medium">Gọi Ngay</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-1">
              <div className="sticky top-8">
                <ContactConsultationForm />
                
                {/* Additional Contact Options */}
                <div className="mt-8 bg-gray-50 rounded-2xl p-6 border border-gray-200">
                  <h4 className="text-lg font-bold text-gray-800 mb-4 text-center">Kết Nối Với Chúng Tôi</h4>
                  <div className="space-y-3">
                    <a
                      href={`tel:${contactInfo?.phone || '02838638239'}`}
                      className="flex items-center space-x-3 p-3 bg-white rounded-xl hover:bg-green-50 transition-colors border border-gray-100 hover:border-green-200"
                    >
                      <Phone className="w-5 h-5 text-green-600" />
                      <span className="text-gray-700 font-medium">Gọi điện tư vấn</span>
                    </a>
                    <a
                      href={`mailto:${contactInfo?.email || 'info@saigonlab.edu.vn'}`}
                      className="flex items-center space-x-3 p-3 bg-white rounded-xl hover:bg-blue-50 transition-colors border border-gray-100 hover:border-blue-200"
                    >
                      <Mail className="w-5 h-5 text-blue-600" />
                      <span className="text-gray-700 font-medium">Gửi email hỗ trợ</span>
                    </a>
                    <a
                      href={`https://maps.google.com/?q=${encodeURIComponent(contactInfo?.address || '28/61 Cư Xá Lữ Gia, phường 15, quận 11, Tp. HCM')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-3 p-3 bg-white rounded-xl hover:bg-orange-50 transition-colors border border-gray-100 hover:border-orange-200"
                    >
                      <MapPin className="w-5 h-5 text-orange-600" />
                      <span className="text-gray-700 font-medium">Xem vị trí trên bản đồ</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
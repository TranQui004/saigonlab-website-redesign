import { Facebook, Linkedin, Youtube, MapPin, Phone, Mail, Globe } from "lucide-react";
import logoImage from "@assets/logo_1753803873544.png";

export default function Footer() {
  return (
    <footer className="bg-slate-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <img 
              src={logoImage} 
              alt="SAIGONLAB" 
              className="h-8 mb-4 max-w-[200px]"
            />
            <p className="text-gray-300 text-sm leading-relaxed">
              Trung tâm đào tạo an ninh mạng và CNTT hàng đầu Việt Nam với đội ngũ giảng viên chuyên nghiệp và phòng LAB hiện đại.
            </p>
            <div className="flex space-x-3 mt-4">
              <a href="https://www.facebook.com/saigonlab" target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center hover:bg-blue-700 transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="https://www.youtube.com/@Saigonlabvn" target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-red-600 rounded flex items-center justify-center hover:bg-red-700 transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
              <a href="https://www.tiktok.com/@trungtamdaotaosaigonlab" target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-black rounded flex items-center justify-center hover:bg-gray-800 transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Liên Kết Nhanh</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/courses" className="text-gray-300 hover:text-white transition-colors">Khóa học</a></li>
              <li><a href="/about" className="text-gray-300 hover:text-white transition-colors">Giới thiệu</a></li>
              <li><a href="/news" className="text-gray-300 hover:text-white transition-colors">Tin tức</a></li>
              <li><a href="/contact" className="text-gray-300 hover:text-white transition-colors">Liên hệ</a></li>
              <li><a href="/privacy-policy" className="text-gray-300 hover:text-white transition-colors">Chính sách</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Dịch Vụ</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/about" className="text-gray-300 hover:text-white transition-colors">Đào tạo CNTT</a></li>
              <li><a href="/about" className="text-gray-300 hover:text-white transition-colors">Triển khai dự án CNTT</a></li>
              <li><a href="/about" className="text-gray-300 hover:text-white transition-colors">Cung ứng nhân sự CNTT</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Liên Hệ</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 mt-0.5 text-blue-400 flex-shrink-0" />
                <a 
                  href="https://maps.google.com/?q=28/61+Cư+Xá+Lữ+Gia,+phường+15,+quận+11,+Tp.+HCM" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  28/61 Cư Xá Lữ Gia, phường 15, quận 11, Tp. HCM
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-blue-400" />
                <a 
                  href="tel:02838638239" 
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  028.3863.8239
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-blue-400" />
                <a 
                  href="mailto:info@saigonlab.edu.vn" 
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  info@saigonlab.edu.vn
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Globe className="w-4 h-4 text-blue-400" />
                <a 
                  href="https://www.saigonlab.edu.vn" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  www.saigonlab.edu.vn
                </a>
              </div>
            </div>
          </div>
        </div>
        
        {/* Footer Bottom */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">© 2025 SAIGONLAB. Tất cả quyền được bảo lưu.</p>
        </div>
      </div>
    </footer>
  );
}
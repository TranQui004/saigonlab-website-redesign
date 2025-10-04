import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "wouter";
import logoImage from "@assets/logo_1753803873544.png";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  const scrollToSection = (sectionId: string) => {
    if (location !== "/") {
      window.location.href = `/#${sectionId}`;
      return;
    }
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-3">
            <img 
              src={logoImage} 
              alt="SAIGONLAB Logo" 
              className="h-12 w-auto object-contain"
            />
          </Link>
          
          <nav className="hidden md:flex space-x-8">
            <Link 
              href="/" 
              className={`text-gray-700 hover:text-primary transition-colors font-medium ${location === "/" ? "text-primary" : ""}`}
            >
              Trang chủ
            </Link>
            <Link 
              href="/about" 
              className={`text-gray-700 hover:text-primary transition-colors font-medium ${location === "/about" ? "text-primary" : ""}`}
            >
              Giới thiệu
            </Link>
            <Link 
              href="/courses" 
              className={`text-gray-700 hover:text-primary transition-colors font-medium ${location.startsWith("/courses") ? "text-primary" : ""}`}
            >
              Khóa học
            </Link>
            <Link 
              href="/faculty" 
              className={`text-gray-700 hover:text-primary transition-colors font-medium ${location === "/faculty" ? "text-primary" : ""}`}
            >
              Giảng viên
            </Link>
            <Link 
              href="/news" 
              className={`text-gray-700 hover:text-primary transition-colors font-medium ${location.startsWith("/news") ? "text-primary" : ""}`}
            >
              Tin tức
            </Link>
            <Link 
              href="/contact" 
              className={`text-gray-700 hover:text-primary transition-colors font-medium ${location === "/contact" ? "text-primary" : ""}`}
            >
              Liên hệ
            </Link>
          </nav>
          
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
        
        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-2 pt-4">
              <Link 
                href="/" 
                onClick={() => setIsMobileMenuOpen(false)}
                className={`text-left py-2 text-gray-700 hover:text-primary transition-colors font-medium ${location === "/" ? "text-primary" : ""}`}
              >
                Trang chủ
              </Link>
              <Link 
                href="/about" 
                onClick={() => setIsMobileMenuOpen(false)}
                className={`text-left py-2 text-gray-700 hover:text-primary transition-colors font-medium ${location === "/about" ? "text-primary" : ""}`}
              >
                Giới thiệu
              </Link>
              <Link 
                href="/courses" 
                onClick={() => setIsMobileMenuOpen(false)}
                className={`text-left py-2 text-gray-700 hover:text-primary transition-colors font-medium ${location.startsWith("/courses") ? "text-primary" : ""}`}
              >
                Khóa học
              </Link>
              <Link 
                href="/faculty" 
                onClick={() => setIsMobileMenuOpen(false)}
                className={`text-left py-2 text-gray-700 hover:text-primary transition-colors font-medium ${location === "/faculty" ? "text-primary" : ""}`}
              >
                Giảng viên
              </Link>
              <Link 
                href="/news" 
                onClick={() => setIsMobileMenuOpen(false)}
                className={`text-left py-2 text-gray-700 hover:text-primary transition-colors font-medium ${location.startsWith("/news") ? "text-primary" : ""}`}
              >
                Tin tức
              </Link>
              <Link 
                href="/contact" 
                onClick={() => setIsMobileMenuOpen(false)}
                className={`text-left py-2 text-gray-700 hover:text-primary transition-colors font-medium ${location === "/contact" ? "text-primary" : ""}`}
              >
                Liên hệ
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}

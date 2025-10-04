import { Users, Shield, Award, Target, Lightbulb, BookOpen } from "lucide-react";

export default function Features() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-600 px-6 py-3 rounded-full mb-8">
            <BookOpen className="w-5 h-5" />
            <span className="font-semibold">Tại Sao Chọn SAIGONLAB</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            ƯU ĐIỂM VƯỢT TRỘI
          </h2>
          <div className="w-32 h-1 bg-blue-500 mx-auto mb-8 rounded-full"></div>
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            SAIGONLAB mang đến cho bạn trải nghiệm học tập toàn diện với những ưu điểm vượt trội
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {/* Feature 1 */}
          <div className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 border border-gray-100 h-full flex flex-col">
            <div className="w-20 h-20 bg-blue-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
              <BookOpen className="text-white text-2xl" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-gray-800 group-hover:text-blue-600 transition-colors">
              Chương Trình Chuẩn Quốc Tế
            </h3>
            <p className="text-gray-600 leading-relaxed flex-grow">
              Đào tạo chứng chỉ kỹ sư mạng quốc tế từ các hãng công nghệ hàng đầu thế giới như Cisco, Microsoft, Oracle, Juniper với chương trình chuẩn quốc tế.
            </p>
            <div className="mt-6 flex items-center space-x-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <span className="text-sm font-medium text-blue-600">Chứng nhận quốc tế</span>
            </div>
          </div>
          
          {/* Feature 2 */}
          <div className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 border border-gray-100 h-full flex flex-col">
            <div className="w-20 h-20 bg-green-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
              <Users className="text-white text-2xl" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-gray-800 group-hover:text-green-600 transition-colors">
              Đội Ngũ Giảng Viên Chuyên Môn
            </h3>
            <p className="text-gray-600 leading-relaxed flex-grow">
              Đội ngũ giảng viên được đào tạo bài bản với kinh nghiệm chuyên môn cao, là các chuyên gia hoạt động trong lĩnh vực công nghệ thông tin.
            </p>
            <div className="mt-6 flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className="text-sm font-medium text-green-600">Giảng viên chuyên nghiệp</span>
            </div>
          </div>
          
          {/* Feature 3 */}
          <div className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 border border-gray-100 h-full flex flex-col">
            <div className="w-20 h-20 bg-orange-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
              <Shield className="text-white text-2xl" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-gray-800 group-hover:text-orange-600 transition-colors">
              Hệ Thống Đối Tác Lớn
            </h3>
            <p className="text-gray-600 leading-relaxed flex-grow">
              Hệ thống đối tác rộng khắp với các tập đoàn lớn như Viettel, Mobifone, VTC, SCTV, VNPT, EVN, tạo cơ hội việc làm cho học viên.
            </p>
            <div className="mt-6 flex items-center space-x-2">
              <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
              <span className="text-sm font-medium text-orange-600">Đối tác uy tín</span>
            </div>
          </div>
          
          {/* Feature 4 */}
          <div className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 border border-gray-100 h-full flex flex-col">
            <div className="w-20 h-20 bg-purple-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
              <Target className="text-white text-2xl" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-gray-800 group-hover:text-purple-600 transition-colors">
              Phương Pháp Đào Tạo Hiện Đại
            </h3>
            <p className="text-gray-600 leading-relaxed flex-grow">
              Phương pháp giảng dạy tiên tiến kết hợp lý thuyết và thực hành, giúp học viên nắm vững kiến thức và áp dụng hiệu quả vào thực tế.
            </p>
            <div className="mt-6 flex items-center space-x-2">
              <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
              <span className="text-sm font-medium text-purple-600">Phương pháp hiệu quả</span>
            </div>
          </div>
          
          {/* Feature 5 */}
          <div className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 border border-gray-100 h-full flex flex-col">
            <div className="w-20 h-20 bg-teal-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
              <Lightbulb className="text-white text-2xl" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-gray-800 group-hover:text-teal-600 transition-colors">
              Cơ Sở Vật Chất Hiện Đại
            </h3>
            <p className="text-gray-600 leading-relaxed flex-grow">
              Phòng LAB với thiết bị tiên tiến, môi trường học tập chuyên nghiệp, tạo điều kiện tốt nhất cho quá trình học tập và thực hành.
            </p>
            <div className="mt-6 flex items-center space-x-2">
              <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
              <span className="text-sm font-medium text-teal-600">Thiết bị hiện đại</span>
            </div>
          </div>
          
          {/* Feature 6 */}
          <div className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 border border-gray-100 h-full flex flex-col">
            <div className="w-20 h-20 bg-pink-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
              <Award className="text-white text-2xl" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-gray-800 group-hover:text-pink-600 transition-colors">
              Hỗ Trợ Việc Làm
            </h3>
            <p className="text-gray-600 leading-relaxed flex-grow">
              Cam kết hỗ trợ học viên tìm kiếm cơ hội việc làm phù hợp sau khóa học với mạng lưới đối tác doanh nghiệp rộng khắp.
            </p>
            <div className="mt-6 flex items-center space-x-2">
              <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
              <span className="text-sm font-medium text-pink-600">Kết nối việc làm</span>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <div className="bg-blue-50 rounded-3xl p-8 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-gray-800 mb-4">
              Sẵn sàng trở thành chuyên gia IT?
            </h3>
            <p className="text-xl text-gray-600 mb-8">
              Hãy để SAIGONLAB đồng hành cùng bạn trên con đường phát triển sự nghiệp
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact" 
                className="inline-flex items-center justify-center px-8 py-4 bg-primary text-white rounded-2xl font-bold hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <Users className="w-5 h-5 mr-2" />
                Đăng ký tư vấn
              </a>
              <a 
                href="/courses" 
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-primary text-primary rounded-2xl font-bold hover:bg-primary hover:text-white transition-all duration-300 transform hover:scale-105"
              >
                <BookOpen className="w-5 h-5 mr-2" />
                Khám phá khóa học
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import { Header, Footer } from "@/components/layout";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-blue-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Chính Sách Bảo Mật</h1>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            SAIGONLAB cam kết bảo vệ thông tin cá nhân của học viên một cách tuyệt đối
          </p>
        </div>
      </section>

      {/* Privacy Policy Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            
            <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
              <h2 className="text-2xl font-bold text-orange-500 mb-4">1. THU THẬP THÔNG TIN</h2>
              <div className="text-gray-700 space-y-4">
                <p>- Website saigonlab.edu.vn này được CÔNG TY SAIGONLAB quản lý.</p>
                <p>Khi mỗi học viên truy cập vào website này, trang web sẽ tự động lưu địa chỉ IP cùng với tên miền. Chúng tôi cũng sử dụng các công cụ kiểm tra như "cookie". Một tài khoản cookie sẽ lưu trữ dữ liệu mà server của website gửi đến trình duyệt của học viên khi học viên truy cập vào trang web, việc sử dụng chức năng này sẽ giúp chúng tôi hỗ trợ và tìm hiểu nhu cầu, thị hiếu của học viên khi truy cập vào website của chúng tôi.</p>
                <p>- Chúng tôi cũng kết hợp thông tin về địa chỉ IP và tên miền của học viên cùng với các thông tin khác mà học viên cung cấp.</p>
                <p>- Các thông tin này được cung cấp qua những email học viên gửi cho chúng tôi, hoặc các thông tin học viên điền khi muốn đăng ký, ý kiến phản hồi, những yêu cầu được hỗ trợ, trả lời phiếu điều tra hoặc tham gia vào một khóa học/ các cuộc thi.</p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
              <h2 className="text-2xl font-bold text-orange-500 mb-4">2. PHẠM VI SỬ DỤNG THÔNG TIN</h2>
              <div className="text-gray-700 space-y-4">
                <p>Thông tin được thu thập thông qua website của chúng tôi sẽ giúp chúng tôi:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Hỗ trợ học viên khi đăng ký khóa học tại saigonlab.edu.vn</li>
                  <li>Giải đáp thắc mắc học viên.</li>
                  <li>Cung cấp cho học viên thông tin về các khóa học, tin tức mới nhất và sự thay đổi về khóa học trên Website của chúng tôi.</li>
                  <li>Xem xét và nâng cấp nội dung và giao diện của Website.</li>
                  <li>Thực hiện các bản khảo sát học viên.</li>
                  <li>Thực hiện các hoạt động quảng bá liên quan đến các sản phẩm và dịch vụ của công ty</li>
                </ul>
                <p>– Công ty tiến hành thu thập thông tin trực tiếp từ học viên và từ các nguồn khác nhau thông qua những cách thức minh bạch và hợp pháp.</p>
                <p>– Thông tin công ty thu thập về học viên dựa trên mối quan hệ với chính học viên, bao gồm tên, thông tin liên hệ, thông tin về cách sử dụng sản phẩm và dịch vụ của công ty, các thông tin về sở thích, nhân khẩu và những mối quan tâm của học viên.</p>
                <p>– Chúng tôi chỉ thu thập những thông tin được yêu cầu, hoặc có liên quan đến việc cung cấp sản phẩm và dịch vụ, mục đích kinh doanh và nhằm hiểu rõ hơn nhu cầu của học viên.</p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
              <h2 className="text-2xl font-bold text-orange-500 mb-4">3. THỜI GIAN LƯU TRỮ THÔNG TIN CÁ NHÂN</h2>
              <div className="text-gray-700">
                <p>Công ty sẽ lưu trữ các thông tin cá nhân do học viên cung cấp trên các hệ thống nội bộ của chúng tôi, trong quá trình học viên đăng ký khóa học hoặc khi học viên có yêu cầu hủy các thông tin đã cung cấp trong quá trình đăng ký các khóa học.</p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
              <h2 className="text-2xl font-bold text-orange-500 mb-4">4. NHỮNG NGƯỜI HOẶC TỔ CHỨC CÓ THỂ ĐƯỢC TIẾP CẬN THÔNG TIN CÁ NHÂN CỦA HỌC VIÊN</h2>
              <div className="text-gray-700">
                <p>Học viên đồng ý rằng, trong trường hợp cần thiết, các cơ quan/ tổ chức/cá nhân sau có quyền được tiếp cận và thu thập các thông tin cá nhân của mình, bao gồm: Ban quản trị; Bên thứ ba có dịch vụ tích hợp với Website saigonlab.edu.vn; Cơ quan nhà nước có thẩm quyền trong trường hợp có yêu cầu theo quy định tại quy chế hoạt động; Bên khiếu nại chứng minh được hành vi vi phạm của học viên; Theo yêu cầu của cơ quan nhà nước có thẩm quyền.</p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
              <h2 className="text-2xl font-bold text-orange-500 mb-4">5. ĐỊA CHỈ CỦA ĐƠN VỊ THU THẬP VÀ QUẢN LÝ THÔNG TIN CÔNG TY SAIGONLAB</h2>
              <div className="text-gray-700 space-y-2">
                <p><strong>Địa chỉ:</strong> 28/61 Cư Xá Lữ Gia, phường 15, quận 11, Tp. HCM</p>
                <p><strong>Điện thoại:</strong> 028.3863.8239</p>
                <p><strong>Email:</strong> info@saigonlab.edu.vn</p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold text-orange-500 mb-4">6. CAM KẾT BẢO MẬT THÔNG TIN CÁ NHÂN CỦA HỌC VIÊN</h2>
              <div className="text-gray-700 space-y-4">
                <p>Thông tin cá nhân của học viên trên saigonlab.edu.vn được saigonlab.edu.vn cam kết bảo mật tuyệt đối theo chính sách bảo vệ thông tin cá nhân của saigonlab.edu.vn. Việc thu thập và sử dụng thông tin của mỗi học viên chỉ được thực hiện khi có sự đồng ý của học viên đó trừ những trường hợp pháp luật có quy định khác.</p>
                <p>Không sử dụng, không chuyển giao, cung cấp hay tiết lộ cho bên thứ 3 nào về thông tin cá nhân của học viên khi không có sự cho phép đồng ý từ học viên.</p>
                <p>Trong trường hợp máy chủ lưu trữ thông tin bị hacker tấn công dẫn đến mất mát dữ liệu cá nhân người dùng, saigonlab.edu.vn sẽ có trách nhiệm thông báo vụ việc cho cơ quan chức năng điều tra xử lý kịp thời và đồng thời chúng tôi cũng sẽ thông báo cho học viên được biết.</p>
                <p>Bảo mật tuyệt đối mọi thông tin giao dịch trực tuyến của học viên.</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
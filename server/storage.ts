import { type User, type InsertUser, type ConsultationRequest, type InsertConsultationRequest, type Course, type Faculty, type NewsArticle, type Partner, type AboutInfo, type ContactInfo } from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  createConsultationRequest(request: InsertConsultationRequest): Promise<ConsultationRequest>;
  getCourses(): Promise<Course[]>;
  getCourse(id: string): Promise<Course | undefined>;
  getFacultyMembers(): Promise<Faculty[]>;
  getNewsArticles(): Promise<NewsArticle[]>;
  getNewsArticle(id: string): Promise<NewsArticle | undefined>;
  getPartners(): Promise<Partner[]>;
  getAboutInfo(): Promise<AboutInfo[]>;
  getContactInfo(): Promise<ContactInfo>;
}

export class MemStorage implements IStorage {
  private users: Map<string, User>;
  private consultationRequests: Map<string, ConsultationRequest>;
  private courses: Course[];
  private faculty: Faculty[];
  private newsArticles: NewsArticle[];
  private partners: Partner[];
  private aboutInfo: AboutInfo[];
  private contactInfo: ContactInfo;

  constructor() {
    this.users = new Map();
    this.consultationRequests = new Map();
    
    // Initialize courses data
    this.courses = [
      {
        id: "dao-tao-an-toan-thong-tin-cong-an",
        title: "KHÓA ĐÀO TẠO AN TOÀN THÔNG TIN THỰC CHIẾN CHO LỰC LƯỢNG CÔNG AN",
        duration: "2 CẤP ĐỘ - 2 NGÀY ĐẾN 5 BUỔI",
        description: "Giới thiệu chung\n\nTrong bối cảnh tội phạm mạng ngày càng tinh vi, việc nhận thức và ứng phó với rủi ro an toàn thông tin không chỉ là nhiệm vụ của bộ phận kỹ thuật mà cần sự chủ động từ mọi cán bộ, chiến sĩ công an. SAIGONLAB xây dựng chương trình 2 cấp độ nhằm đáp ứng đúng nhu cầu từng nhóm đối tượng.\n\nCấp độ 1: Cơ bản - Nhận Thức & Ứng Phó An Toàn Thông Tin Thực Chiến\n\nĐối tượng: Cán bộ công an phường/xã, cán bộ hành chính sử dụng máy tính – điện thoại nhưng không chuyên về CNTT\nThời lượng: 02 ngày (3 buổi – 09 giờ)\nSĩ số tiêu chuẩn: 40 học viên/lớp\nHình thức: Đào tạo tập trung, có thực hành\n\nNội dung chính:\n• Nhận diện rủi ro an toàn thông tin trong thực tế\n• Kỹ năng thực chiến cơ bản để kiểm tra & xử lý\n• Quy tắc bảo mật cá nhân và xử lý sự cố\n\nCấp độ 2: Nâng cao - Ứng Dụng & Phản Ứng Sự Cố An Toàn Thông Tin Thực Chiến\n\nĐối tượng: Cán bộ kỹ thuật, điều tra, cán bộ công an ban chuyên án có nền tảng về ATTT\nThời lượng: 05 buổi (mỗi buổi 03 giờ)\nSĩ số tiêu chuẩn: 50 học viên/lớp\nHình thức: Đào tạo tập trung, có thực hành\n\nNội dung chính:\n• Cập nhật nguy cơ và tấn công mới trong ngành Công An\n• Ứng phó sự cố ATTT thực chiến (Quy trình 5 bước: phát hiện – cô lập – ghi nhận – báo cáo – phục hồi)\n• Bảo mật thiết bị và tài khoản nghiệp vụ (Cấu hình, quản lý mật khẩu, MFA, phát hiện ứng dụng ngầm)\n• Thực hành tình huống mô phỏng\n• Giám sát và cảnh báo sự cố cơ bản (Công cụ giám sát, firewall, cảnh báo USB lạ)\n\nVề chúng tôi - SAIGONLAB:\n• 500+ doanh nghiệp đã hợp tác\n• 1.000+ dự án triển khai trên toàn quốc\n• 300+ khóa học đã triển khai\n• 50.000+ học viên đã được đào tạo",
        imageUrl: "/images/course_placeholder.png",
        detailUrl: "https://drive.google.com/file/d/1-LrRudrUpdRpWf22gzbViRtkwXXMwGbu/view?usp=sharing"
      },
      {
        id: "dao-tao-ky-thuat-phat-trien-khach-hang",
        title: "ĐÀO TẠO KỸ THUẬT CHUYÊN MÔN PHÁT TRIỂN KHÁCH HÀNG DOANH NGHIỆP",
        duration: "2 CẤP ĐỘ - 4 BUỔI",
        description: "Lộ trình 2 cấp độ nâng tầm kỹ thuật doanh nghiệp\n\nDoanh nghiệp của bạn có đang đối mặt với các vấn đề như hạ tầng mạng thiếu ổn định, hệ thống IPTV rời rạc, hay mất an toàn dữ liệu? SaigonLab có giải pháp cho bạn!\n\nĐặc biệt: SAIGONLAB nhận tư vấn, thiết kế, và tùy chỉnh khóa học theo yêu cầu của đơn vị.\n\nKhóa Cơ Bản (2 buổi): Nền Tảng Vững Chắc – Dễ Dàng Triển Khai\n\nNội dung:\n• Kiến trúc mạng 3 lớp (Core - Distribution - Access)\n• Thiết bị mạng: Switch, Router, Firewall\n• Cấu hình VLAN, DHCP, DNS\n• Quản lý WiFi nội bộ cơ bản\n• Tổng quan hệ thống IPTV trong doanh nghiệp\n\nKhóa Chuyên Sâu (2 buổi): Kỹ Năng Nâng Cao – Giải Pháp Chuyên Biệt\n\nNội dung:\n• Thiết kế cáp mạng UTP/FO, cấu hình VLAN nâng cao\n• Giải pháp bảo mật: Firewall, VPN, NAC (802.1X)\n• Quản lý WiFi chuyên dụng (WiFi 5/6/7, roaming, SSID)\n• Làm chủ công nghệ IPTV và tích hợp với hệ thống quản lý (PMS)\n\nĐối tượng tham gia:\n• Cán bộ kỹ thuật doanh nghiệp\n• Trưởng/phó phòng IT – kỹ thuật\n• Đơn vị vận hành hạ tầng mạng (khách sạn, resort, tòa nhà)\n• Người muốn nâng cao chuyên môn sau khóa cơ bản\n\nCam kết của SAIGONLAB:\n• Giảng viên 25+ năm kinh nghiệm\n• Học qua mô phỏng, thực hành, tình huống thực tiễn\n• Cung cấp tài liệu, sơ đồ, case study và thiết bị thực hành\n• Cấp chứng nhận sau khi hoàn thành",
        imageUrl: "/images/course_placeholder.png",
        detailUrl: "https://drive.google.com/file/d/17qOG0JeqaQmLiZ580eHfisq9nQjzonLN/view?usp=sharing"
      },
      {
        id: "dao-tao-ung-dung-ai-chuyen-sau",
        title: "ĐÀO TẠO ỨNG DỤNG AI CHUYÊN SÂU",
        duration: "14 BUỔI - 4 GIỜ/BUỔI",
        description: "Khai phá sức mạnh thực sự của AI\n\nHình thức: Trực tuyến (Online)\nGiảng viên: PGS, TS. Hong-Linh Truong\nTrình độ: 3 cấp độ từ Cơ bản đến Nâng cao\n\nMục tiêu:\n• Trang bị tư duy ứng dụng AI chiến lược\n• Hướng dẫn sử dụng thành thạo các công cụ AI mới nhất\n• Xây dựng năng lực triển khai hệ thống AI chuyên sâu\n\nĐặc biệt: SAIGONLAB nhận tư vấn, thiết kế, và tùy chỉnh khóa học theo yêu cầu của đơn vị.\n\nNội dung 3 khóa học (14 buổi, 4 giờ/buổi):\n\nLevel 1: AI in General (3 buổi)\n• AI cho doanh nghiệp/khu vực công\n• Chuyển đổi số với AI và rủi ro\n• Quản lý vòng đời hệ thống AI/ML\n• LLM, AI Agents cho Doanh nghiệp/Khu vực công\n\nLevel 2: AI Engineering (4 buổi)\n• Mô hình dịch vụ AI và tích hợp\n• Triển khai và phục vụ dịch vụ AI/ML\n• Xây dựng quy trình làm việc GenAI/LLM\n• MLOps and Experiment\n\nLevel 3: AI Advanced (6 buổi)\n• Data Processing Pipelines for AI\n• Data Lakehouses for AI services\n• GenAI/LLM Evaluation, Observability and Guards\n• Building AI Agents/Agentic AI Systems\n\nĐối tượng tham gia:\n• CEO, Giám đốc, Trưởng phòng\n• Cán bộ quản lý CNTT\n• Kỹ sư phần mềm, kỹ sư dữ liệu (Data Engineer, MLOps Engineer)\n\nCam kết của SAIGONLAB:\n• Giảng viên 20+ năm kinh nghiệm\n• Thực hành sát với bối cảnh doanh nghiệp và khu vực công\n• Hỗ trợ kỹ thuật - học thuật xuyên suốt\n• Cấp chứng nhận khi hoàn thành",
        imageUrl: "/images/course_placeholder.png",
        detailUrl: "https://drive.google.com/file/d/1Mt5DrHVsv5TjzAFv2N1vl3qQ85xZd5f9/view?usp=sharing"
      },
      {
        id: "he-thong-thong-tin-dieu-hanh-tac-nghiep",
        title: "TẬP HUẤN PHẦN MỀM iCPV - HỆ THỐNG THÔNG TIN ĐIỀU HÀNH TÁC NGHIỆP CÁC CƠ QUAN ĐẢNG",
        duration: "1 BUỔI - 4 GIỜ",
        description: "Giới thiệu\n\nHệ thống thông tin điều hành tác nghiệp các cơ quan Đảng là phần mềm giúp số hóa công tác quản lý văn bản và điều hành tác nghiệp, mang lại nhiều lợi ích thiết thực cho toàn bộ cơ quan Đảng từ Trung ương đến Địa phương, góp phần nâng cao hiệu quả công tác quản lý và điều hành, xây dựng một nền hành chính chuyên nghiệp, hiện đại và hiệu quả.\n\nLợi ích:\n• Nâng cao hiệu quả quản lý, điều hành\n• Số hóa quy trình, tạo môi trường làm việc hiện đại\n• Tăng cường phối hợp và trao đổi thông tin\n\nThông tin khóa học:\n\nĐối tượng: Chuyên viên, cán bộ văn thư, lãnh đạo quản lý cấp Đảng\nThời lượng: 01 buổi (04 giờ)\nSĩ số: 40 học viên/lớp\nHình thức: Đào tạo tập trung, hướng dẫn và thực hành\n\nNội dung khóa học:\n\nHướng dẫn đăng nhập: Trên web và ứng dụng di động\n\nCác tính năng theo từng vai trò:\n\nLãnh đạo:\n• Cho ý kiến phiếu trình\n• Phê duyệt & ký duyệt văn bản đi\n• Chuyển xử lý văn bản đến\n• Xem dashboard nhiệm vụ và phê duyệt tiến độ\n• Xem thông tin lịch họp của lãnh đạo cấp trên\n\nChuyên viên:\n• Trình xin ý kiến, dự thảo văn bản\n• Trình xử lý hoặc hủy luồng văn bản\n• Tạo hồ sơ công việc\n• Cập nhật tiến độ nhiệm vụ\n• Theo dõi lịch họp cá nhân\n\nVăn thư:\n• Tiếp nhận văn bản đến (điện tử, giấy, liên thông)\n• Chuyển xử lý văn bản\n• Cấp số ban hành, đóng dấu văn bản\n• Xem luồng xử lý\n• Xuất báo cáo văn bản đi/đến\n• Tạo hồ sơ công việc\n\nCác quy trình nghiệp vụ:\n• Văn bản đến\n• Văn bản đi\n• Quản lý nhiệm vụ\n• Lịch họp\n• Danh mục các module khác",
        imageUrl: "/images/course_placeholder.png",
        detailUrl: "https://drive.google.com/file/d/1PbvN-CaAR4Z4cG7t5QIdJNCDCz2tlyBO/view?usp=sharing"
      },
      {
        id: "khoa-hoc-tieng-hoa",
        title: "KHÓA HỌC TIẾNG HOA GIAO TIẾP VÀ NỀN TẢNG",
        duration: "LỘ TRÌNH 16 THÁNG - 3 GIAI ĐOẠN",
        description: "Định Hướng - Chinh Phục (Lộ trình 16 tháng)\n\nGiai đoạn 1: Giao tiếp - Nền tảng (A1)\nGiai đoạn 2: Trung cấp & Luyện thi HSK/TOCFL 1-2\nGiai đoạn 3: Nâng cao & Tiếng Hoa Chuyên ngành\n\nGiới thiệu\n\nTrong xu thế hội nhập toàn cầu, tiếng Hoa ngày càng đóng vai trò quan trọng. Chương trình Tiếng Hoa Giao tiếp Nền tảng tại SaigonLab được xây dựng nhằm trang bị cho học viên và doanh nghiệp nền tảng giao tiếp vững chắc, ứng dụng linh hoạt trong thực tiễn.\n\nGiai đoạn 1: Giao tiếp - Nền tảng (A1) - 24 buổi\n\nMục tiêu:\n• Làm quen với hệ thống Pinyin và thanh điệu tiếng Hoa\n• Giao tiếp tự tin các chủ đề thiết yếu như: thông tin cá nhân, mua sắm, ăn uống, hỏi đường, du lịch...\n• Xây dựng nền tảng ngôn ngữ vững chắc, tạo tiền đề học nâng cao\n\nLựa chọn chương trình:\n\nChương trình Chuẩn (Standard Track):\nThời gian: 6 tháng (1 buổi/tuần, 2 tiếng/buổi)\nPhù hợp với: Người đi làm, doanh nghiệp, cần lịch học linh hoạt, xây dựng nền tảng tiếng Hoa bước đầu\n\nChương trình Tăng tốc (Fast Track):\nThời gian: 3 tháng (2 buổi/tuần, 4 tiếng/buổi)\nPhù hợp với: Người cần học nhanh, chuẩn bị thi HSK hoặc du học, xuất khẩu lao động\n\nHình thức: Trực tiếp / Trực tuyến\n\nCam kết của SAIGONLAB:\n• Lộ trình rõ ràng\n• Giáo trình chuẩn, cập nhật mới\n• Giảng viên có kinh nghiệm thực tế, đồng hành sát sao\n• Hoạt động tương tác, luyện nói – phản xạ nhanh\n• Cam kết kết quả theo từng giai đoạn\n\nĐặc biệt:\n• Thiết kế khóa học theo yêu cầu: SAIGONLAB nhận thiết kế các khóa học với nội dung sát thực tế công việc, tập trung vào kỹ năng giao tiếp và chuyên ngành\n• Nền tảng LMS hiện đại: Hỗ trợ học mọi lúc mọi nơi với kho học liệu phong phú, tương tác cao và quản lý học tập hiệu quả",
        imageUrl: "/images/course_placeholder.png",
        detailUrl: "https://drive.google.com/file/d/1eMn0FaqWMmz3WLPJ_XFQYazsZY1uxIvD/view?usp=sharing"
      },
      {
        id: "ung-dung-ai-chat-gpt",
        title: "ỨNG DỤNG AI & CHAT GPT NÂNG CAO HIỆU QUẢ CÔNG VIỆC",
        duration: "1-2 BUỔI - 3-4 GIỜ/BUỔI",
        description: "Tăng tốc - Tối ưu - Dẫn đầu thời đại AI\n\nThời lượng: 1 - 2 buổi (3-4 tiếng/buổi)\nHình thức: Online / Offline\n\nBạn có đang đối mặt với...?\n• Khối lượng công việc ngày càng tăng?\n• Thiếu thời gian cho các ý tưởng sáng tạo?\n• Khó theo kịp tốc độ phát triển của công nghệ?\n\nBạn sẽ học được gì?\n• Hiểu đúng bản chất AI & ChatGPT và cách ứng dụng hiệu quả vào công việc\n• Soạn thảo văn bản, email; tạo biểu mẫu, kế hoạch, báo cáo\n• Sáng tạo, phát triển nội dung, kịch bản, quảng cáo\n• Ra quyết định nhanh, chính xác hơn nhờ phân tích và gợi ý từ AI\n• Tích hợp AI vào quy trình cá nhân & tổ chức\n• Nâng tầm giao tiếp chuyên nghiệp: Viết hay hơn, nói khéo hơn\n\nKhóa học này dành cho ai?\n• Chuyên viên nội dung, marketing\n• Chuyên viên hành chính – văn phòng\n• Giáo viên & Học sinh, sinh viên\n• Người làm kinh doanh - quản lý\n• Người mới bắt đầu tiếp cận công nghệ\n\nĐặc biệt:\n• Thiết kế theo yêu cầu: SAIGONLAB nhận thiết kế khóa học với nội dung bám sát bài toán thực tế của doanh nghiệp, giúp học viên được 'cầm tay chỉ việc'\n• Nền tảng LMS hiện đại: Hỗ trợ học mọi lúc mọi nơi với kho học liệu phong phú, tương tác cao và quản lý học tập hiệu quả",
        imageUrl: "/images/course_placeholder.png",
        detailUrl: "https://drive.google.com/file/d/1N8ULa5UeBJUjRgiNWo1NwqNSDGc_LgnD/view?usp=sharing"
      },
      {
        id: "ung-dung-ai-san-xuat-video",
        title: "KHÓA ĐÀO TẠO ỨNG DỤNG AI SẢN XUẤT VIDEO & SÁNG TẠO NỘI DUNG",
        duration: "2 BUỔI + 5 NGÀY THỰC HÀNH",
        description: "Hình thức:\n• 2 buổi đào tạo tập trung\n• 5 ngày tiếp theo thực hành online (15 - 30 phút/ngày)\n\nĐối tượng:\n• Lãnh đạo\n• Nhân viên hỗ trợ kinh doanh\n• Nhân viên kỹ thuật\n\nMục tiêu:\n• Nắm được quy trình sản xuất video content\n• Biết cách sử dụng AI và các công cụ liên quan\n• Thực hành xây dựng kênh TikTok\n\nĐặc biệt: SAIGONLAB nhận tư vấn, thiết kế, và tùy chỉnh khóa học theo yêu cầu của đơn vị.\n\nNội dung chương trình:\n\nCập nhật & Trải nghiệm AI mới nhất:\n• Tổng quan hơn 25.000 công cụ AI\n• Thực hành trải nghiệm các ứng dụng AI\n\nXây dựng chiến lược nội dung với AI:\n• Ứng dụng AI xây dựng chiến lược nội dung theo kế hoạch kinh doanh và định hướng thị trường\n• Thực hành lập chiến lược nội dung theo từng mục tiêu cụ thể\n\nLập kế hoạch nội dung cho nhóm khách hàng:\n• Lập bộ kế hoạch nội dung Social Media cho 3 nhóm: B2B, B2C và khách hàng trẻ\n• Thực hành: Lập kế hoạch theo chiến lược đã xây dựng\n\nXây dựng nội dung kịch bản:\n• Sản xuất kịch bản cho từng nhóm sản phẩm của doanh nghiệp\n\nHuấn luyện trợ lý AI & Sáng tạo video chuyên nghiệp:\n• Ứng dụng AI xây dựng chiến lược nội dung theo kế hoạch kinh doanh & định hướng thị trường\n• Thực hành lập chiến lược nội dung theo từng mục tiêu cụ thể\n\nThực hành sản xuất video với AI:\n• Ứng dụng AI để tạo ra sản phẩm video hoàn chỉnh\n\nKết quả đạt được:\n• Kiến thức và kỹ năng sản xuất content video chuẩn TikTok\n\nCam kết của SAIGONLAB:\n• Giảng viên chất lượng với 25+ năm kinh nghiệm thực chiến\n• Học qua mô phỏng – thực hành – tình huống thực tiễn\n• Tài liệu, hình ảnh, case study rõ ràng\n• Hỗ trợ giải đáp thắc mắc chi tiết\n• Đánh giá bằng bài thu hoạch cuối khóa\n• Cấp chứng nhận khi hoàn thành khóa học",
        imageUrl: "/images/course_placeholder.png",
        detailUrl: "https://drive.google.com/file/d/1ijCiWHD2tN2wWHlMZWygVT9-ZpC-6-CK/view?usp=sharing"
      },
      {
        id: "ung-dung-ai-hanh-chinh-van-phong",
        title: "ỨNG DỤNG AI TRONG CÔNG TÁC HÀNH CHÍNH VĂN PHÒNG",
        duration: "1 NGÀY - 2 BUỔI",
        description: "Giới thiệu chung\n\nKhóa học ứng dụng AI trong công tác hành chính văn phòng do Trung tâm đào tạo SAIGONLAB tổ chức sẽ giúp cán bộ, công chức cấp cơ sở nắm vững kỹ năng khai thác hiệu quả các công cụ AI, từ đó nâng cao hiệu suất làm việc, đảm bảo tính chính xác, logic và bảo mật trong công vụ.\n\nThông tin khóa học:\n\nĐối tượng:\n• Cán bộ công chức văn phòng Ủy ban phường/xã\n• Nhân sự hành chính\n• Đơn vị hành chính triển khai chuyển đổi số\n\nThời lượng: 01 ngày (02 buổi)\nHình thức: Đào tạo tập trung, chú trọng thực hành\n\nLợi ích khi tham gia:\n• Hiểu rõ tiềm năng, rủi ro và cách ứng dụng AI trong hành chính\n• Viết kế hoạch, báo cáo, công văn... nhanh và đúng chuẩn hơn\n• Tạo slide, sơ đồ, văn bản trực quan từ AI\n• Tự thiết lập trợ lý ảo hỗ trợ công việc hằng ngày\n• Nhận tài liệu mẫu – Học qua thực hành – Hỗ trợ tận tình\n\nNội dung khóa học:\n\nGiới thiệu AI và ChatGPT:\n• Tổng quan về AI\n• Lợi ích và thách thức khi ứng dụng AI trong công tác hành chính văn phòng\n• Nguyên tắc cần tuân thủ khi sử dụng AI trong môi trường công vụ\n• Một số công cụ AI nổi bật: ChatGPT, Google Gemini, Grok...\n\nHướng dẫn viết prompt hiệu quả cho ChatGPT:\n• Khái niệm prompt, phân loại và các kỹ thuật viết hiệu quả\n\nKỹ năng ứng dụng trong công tác hành chính văn phòng:\n• Thực hành các kỹ thuật viết prompt hiệu quả\n\nKỹ năng ứng dụng ChatGPT trong tìm kiếm, phân tích và xử lý thông tin:\n• Sử dụng ChatGPT cho nhiều loại truy vấn khác nhau\n• Phân tích dữ liệu, nhập liệu thông minh từ nhiều nguồn\n• Soạn thảo văn bản từ mẫu có sẵn và thực hành tổng hợp\n\nTruyền thông và trình bày trong hành chính:\n• Tạo slide trình bày, báo cáo hội nghị\n• Vẽ sơ đồ tư duy, thiết kế infographic hướng dẫn thủ tục\n• Thực hành tổng hợp\n\nTrợ lý ảo cá nhân hóa:\n• Thiết lập Trợ lý ảo giúp việc hiệu quả\n• Sử dụng AI có trách nhiệm\n• Trao đổi, thảo luận về ứng dụng AI trong công việc",
        imageUrl: "/images/course_placeholder.png",
        detailUrl: "https://drive.google.com/file/d/1rIRNmwrpOpMiUGThbucQuvimRfN00uzS/view?usp=sharing"
      }
    ];

    // Initialize faculty data
    this.faculty = [
      // Core faculty
      {
        id: "tran-thanh-phong",
        name: "TRẦN THANH PHONG",
        degree: "Bằng cấp: B. Eng",
        experience: "Kinh nghiệm: 15 năm kinh nghiệm thực hiện các dự án CNTT và giảng dạy.",
        specialty: "Chứng chỉ: CCNP, CCSP",
        isCore: 1,
        imageUrl: "https://www.saigonlab.edu.vn/wp-content/uploads/2024/05/icon.png"
      },
      {
        id: "tran-van-ly",
        name: "TRẦN VĂN LÝ",
        degree: "Học vị: B. Eng, M. Eng",
        experience: "Kinh nghiệm: Chuyên gia tư vấn, đào tạo về Quản trị doanh nghiệp và Quản trị nguồn nhân lực.",
        specialty: "",
        isCore: 1,
        imageUrl: "https://www.saigonlab.edu.vn/wp-content/uploads/2024/05/icon.png"
      },
      {
        id: "bui-quang-tan",
        name: "BÙI QUANG TÂN",
        degree: "Bằng cấp: Kỹ sư Công nghệ Thông tin",
        experience: "Kinh nghiệm: Hơn 12 năm kinh nghiệm triển khai các dự án CNTT.",
        specialty: "",
        isCore: 1,
        imageUrl: "https://www.saigonlab.edu.vn/wp-content/uploads/2024/05/icon.png"
      },
      {
        id: "le-thanh-ha",
        name: "LÊ THANH HÀ",
        degree: "Bằng cấp: B. Eng, M. Eng",
        experience: "Kinh nghiệm: Hơn 12 năm kinh nghiệm triển khai các dự án gia công phần mềm.",
        specialty: "",
        isCore: 1,
        imageUrl: "https://www.saigonlab.edu.vn/wp-content/uploads/2024/05/icon.png"
      },
      // Extended faculty
      {
        id: "hoang-le-minh",
        name: "HOÀNG LÊ MINH",
        degree: "Học vị: Tiến sĩ",
        experience: "Kinh nghiệm: Trên 40 năm",
        specialty: "Chuyên môn: AI & DA",
        isCore: 0,
        imageUrl: "https://www.saigonlab.edu.vn/wp-content/uploads/2024/05/icon.png"
      },
      {
        id: "tran-dan-thu",
        name: "TRẦN ĐAN THƯ",
        degree: "Học vị: PGS.TS",
        experience: "Kinh nghiệm: Trên 35 năm",
        specialty: "Chuyên môn: Tư vấn cao cấp Honeynet",
        isCore: 0,
        imageUrl: "https://www.saigonlab.edu.vn/wp-content/uploads/2024/05/icon.png"
      },
      {
        id: "thai-hoang-nam",
        name: "THÁI HOÀNG NAM",
        degree: "Học vị: Thạc sĩ",
        experience: "Kinh nghiệm: Hơn 7 năm kinh nghiệm triển khai các dự án CNTT.",
        specialty: "",
        isCore: 0,
        imageUrl: "https://www.saigonlab.edu.vn/wp-content/uploads/2024/05/icon.png"
      },
      {
        id: "le-van-phan",
        name: "LÊ VĂN PHẬN",
        degree: "Học vị: Thạc sĩ",
        experience: "Kinh nghiệm: Hơn 25 năm kinh nghiệm triển khai các dự án CNTT.",
        specialty: "",
        isCore: 0,
        imageUrl: "https://www.saigonlab.edu.vn/wp-content/uploads/2024/05/icon.png"
      },
      {
        id: "le-dinh-viet-hai",
        name: "LÊ ĐÌNH VIỆT HẢI",
        degree: "Học vị: Thạc sĩ",
        experience: "Kinh nghiệm: trên 25 năm kinh nghiệm thực hiện các dự án CNTT và giảng dạy.",
        specialty: "Tư vấn cao cấp Honeynet.",
        isCore: 0,
        imageUrl: "https://www.saigonlab.edu.vn/wp-content/uploads/2024/05/icon.png"
      },
      {
        id: "ngo-hoang-hai",
        name: "NGÔ HOÀNG HẢI",
        degree: "Học vị: Thạc sĩ",
        experience: "Kinh nghiệm: trên 10 năm kinh nghiệm thực hiện các dự án CNTT và giảng dạy.",
        specialty: "Chuyên môn: Linux",
        isCore: 0,
        imageUrl: "https://www.saigonlab.edu.vn/wp-content/uploads/2024/05/icon.png"
      },
      {
        id: "tran-minh-hao",
        name: "TRẦN MINH HẢO",
        degree: "Học vị: Thạc sĩ",
        experience: "Kinh nghiệm: trên 20 năm",
        specialty: "Chuyên môn: Linux",
        isCore: 0,
        imageUrl: "https://www.saigonlab.edu.vn/wp-content/uploads/2024/05/icon.png"
      },
      {
        id: "phan-nguyen",
        name: "PHAN NGUYỄN",
        degree: "Học vị: Thạc sĩ",
        experience: "Kinh nghiệm: trên 15 năm",
        specialty: "Chuyên môn: Dev",
        isCore: 0,
        imageUrl: "https://www.saigonlab.edu.vn/wp-content/uploads/2024/05/icon.png"
      },
      {
        id: "nguyen-minh-hien",
        name: "NGUYỄN MINH HIỀN",
        degree: "Học vị: Cử nhân",
        experience: "Kinh nghiệm: trên 1 năm",
        specialty: "Chuyên môn: Linux",
        isCore: 0,
        imageUrl: "https://www.saigonlab.edu.vn/wp-content/uploads/2024/05/icon.png"
      },
      {
        id: "nguyen-phi",
        name: "NGUYỄN PHI",
        degree: "Học vị: Kỹ sư",
        experience: "Kinh nghiệm: Trên 3 năm",
        specialty: "Chuyên môn: Linux",
        isCore: 0,
        imageUrl: "https://www.saigonlab.edu.vn/wp-content/uploads/2024/05/icon.png"
      }
    ];

    // Initialize news articles
    this.newsArticles = [
      {
        id: "ethical-hacking-core-skills",
        title: "Ethical Hacking Core Skills – Chương trình đào tạo thực chiến tại SAIGONLAB",
        author: "Nguyễn Oanh",
        date: "01/08/2025",
        imageUrl: "https://www.saigonlab.edu.vn/wp-content/uploads/2024/04/CEHH.png",
        url: "https://www.saigonlab.edu.vn/ethical-hacking-core-skills-chuong-trinh-dao-tao-thuc-chien-tai-saigonlab.html"
      },
      {
        id: "ai-military-training",
        title: "Đưa AI vào môi trường quân đội – Z755: Tập huấn thực chiến cùng SAIGONLAB",
        author: "Nguyễn Oanh",
        date: "21/07/2025",
        imageUrl: "https://www.saigonlab.edu.vn/wp-content/uploads/2025/07/z6810414425852_7f2008a9e44f3d608b1e683d4767f931-1024x575.jpg",
        url: "https://www.saigonlab.edu.vn/dua-ai-vao-moi-truong-quan-doi-z755-tap-huan-thuc-chien-cung-saigonlab.html"
      },
      {
        id: "vnpt-ai-video",
        title: "VNPT Bến Tre Hoàn Thành Khóa Học Ứng Dụng AI Sản Xuất Video Content Cùng SAIGONLAB",
        author: "Nguyễn Oanh",
        date: "30/06/2025",
        imageUrl: "https://www.saigonlab.edu.vn/wp-content/uploads/2025/06/9.png",
        url: "https://www.saigonlab.edu.vn/vnpt-ben-tre-hoan-thanh-khoa-hoc-ung-dung-ai-san-xuat-video-content-cung-saigonlab.html"
      },
      {
        id: "ba-ria-vung-tau-ai",
        title: "SAIGONLAB HOÀN THÀNH KHÓA HỌC ỨNG DỤNG AI TRONG CHUYỂN ĐỔI SỐ TẠI SỞ KHOA HỌC VÀ CÔNG NGHỆ BÀ RỊA – VŨNG TÀU",
        author: "Nguyễn Oanh",
        date: "10/06/2025",
        imageUrl: "https://www.saigonlab.edu.vn/wp-content/uploads/2025/06/IMG_2800-1024x482.jpg",
        url: "https://www.saigonlab.edu.vn/saigonlab-hoan-thanh-khoa-hoc-ung-dung-ai-trong-chuyen-doi-so-tai-so-khoa-hoc-va-cong-nghe-ba-ria-vung-tau.html"
      },
      {
        id: "bm4-solution",
        title: "GIỚI THIỆU GIẢI PHÁP CHUYỂN ĐỔI SỐ BM4.0",
        author: "Nguyễn Oanh",
        date: "26/05/2025",
        imageUrl: "https://www.saigonlab.edu.vn/wp-content/uploads/2025/05/z6634735001696_bd511f216e257cf9dc5ece50a57e8005-1024x578.jpg",
        url: "https://www.saigonlab.edu.vn/gioi-thieu-giai-phap-chuyen-doi-so-bm4-0.html"
      },
      {
        id: "sctv-training",
        title: "Hoàn Thành Khóa Đào Tạo Kỹ Thuật Chuyên Sâu Phát Triển Khách Hàng Doanh Nghiệp cùng SCTV",
        author: "Nguyễn Oanh",
        date: "16/05/2025",
        imageUrl: "https://www.saigonlab.edu.vn/wp-content/uploads/2025/05/z6607787552269_28218128db54aa38f7de45fa4b546aad-1024x617.jpg",
        url: "https://www.saigonlab.edu.vn/hoan-thanh-khoa-dao-tao-ky-thuat-chuyen-sau-phat-trien-khach-hang-doanh-nghiep-cung-sctv.html"
      },
      {
        id: "z755-anniversary",
        title: "SAIGONLAB Tham Dự Lễ Kỷ Niệm 50 Năm Ngày Truyền Thống Công Ty Thông Tín Điện Tử Z755",
        author: "Nguyễn Oanh",
        date: "14/05/2025",
        imageUrl: "https://www.saigonlab.edu.vn/wp-content/uploads/2025/05/1.png",
        url: "https://www.saigonlab.edu.vn/saigonlab-tham-du-le-ky-niem-50-nam-ngay-truyen-thong-cong-ty-thong-tin-dien-tu-z755.html"
      },
      {
        id: "ai-sa-dec-training",
        title: "SAIGONLAB HOÀN THÀNH KHÓA TẬP HUẤN \"KHAI THÁC VÀ ỨNG DỤNG TRÍ TUỆ NHÂN TẠO (AI) TRÊN ĐỊA BÀN THÀNH PHỐ SA ĐÉC NĂM 2025\"",
        author: "Nguyễn Oanh",
        date: "30/04/2025",
        imageUrl: "https://www.saigonlab.edu.vn/wp-content/uploads/2024/04/network.png",
        url: "https://www.saigonlab.edu.vn/saigonlab-hoan-thanh-khoa-tap-huan-khai-thac-va-ung-dung-tri-tue-nhan-tao-ai-tren-dia-ban-thanh-pho-sa-dec-nam-2025.html"
      },
      {
        id: "saigonlab-ubnd-ba-ria-vung-tau",
        title: "SAIGONLAB x UBND BÀ RỊA – VŨNG TÀU",
        author: "Nguyễn Oanh",
        date: "30/04/2025",
        imageUrl: "https://www.saigonlab.edu.vn/wp-content/uploads/2024/04/security.png",
        url: "https://www.saigonlab.edu.vn/saigonlab-x-ubnd-ba-ria-vung-tau.html"
      },
      {
        id: "cybersecurity-workshop",
        title: "Workshop An ninh mạng doanh nghiệp tại SAIGONLAB",
        author: "Nguyễn Oanh",
        date: "05/05/2025",
        imageUrl: "https://www.saigonlab.edu.vn/wp-content/uploads/2024/04/security.png",
        url: "https://www.saigonlab.edu.vn/workshop-an-ninh-mang-doanh-nghiep.html"
      },
      {
        id: "cisco-certification-course",
        title: "Khóa học chứng chỉ Cisco CCNA mới nhất 2025",
        author: "Trần Thanh Phong",
        date: "28/04/2025",
        imageUrl: "https://www.saigonlab.edu.vn/wp-content/uploads/2024/04/CCNA-SECURITY.png",
        url: "https://www.saigonlab.edu.vn/khoa-hoc-ccna-2025.html"
      },
      {
        id: "digital-transformation-seminar",
        title: "Hội thảo Chuyển đổi số trong doanh nghiệp SME",
        author: "Lê Minh Đức",
        date: "20/04/2025",
        imageUrl: "https://www.saigonlab.edu.vn/wp-content/uploads/2024/04/network.png",
        url: "https://www.saigonlab.edu.vn/hoi-thao-chuyen-doi-so-sme.html"
      },
      {
        id: "linux-training-program",
        title: "Chương trình đào tạo Linux System Administration",
        author: "Ngô Hoàng Hải",
        date: "15/04/2025",
        imageUrl: "https://www.saigonlab.edu.vn/wp-content/uploads/2024/04/system.png",
        url: "https://www.saigonlab.edu.vn/chuong-trinh-dao-tao-linux.html"
      },
      {
        id: "mobile-security-update",
        title: "Cập nhật xu hướng bảo mật Mobile trong năm 2025",
        author: "Phạm Văn Nam",
        date: "08/04/2025",
        imageUrl: "https://www.saigonlab.edu.vn/wp-content/uploads/2024/04/mobile.png",
        url: "https://www.saigonlab.edu.vn/cap-nhat-bao-mat-mobile-2025.html"
      },
      {
        id: "cloud-computing-course",
        title: "Khóa học Cloud Computing với AWS & Azure",
        author: "Bùi Quang Tân",
        date: "02/04/2025",
        imageUrl: "https://www.saigonlab.edu.vn/wp-content/uploads/2024/04/cloud.png",
        url: "https://www.saigonlab.edu.vn/khoa-hoc-cloud-computing.html"
      },
      {
        id: "penetration-testing-workshop",
        title: "Workshop Penetration Testing cho chuyên gia IT",
        author: "Lê Đình Việt Hải",
        date: "25/03/2025",
        imageUrl: "https://www.saigonlab.edu.vn/wp-content/uploads/2024/04/CEHH.png",
        url: "https://www.saigonlab.edu.vn/workshop-penetration-testing.html"
      }
    ];

    // Initialize partners
    this.partners = [
      { id: "dong-a", name: "Dong A", imageUrl: "https://www.saigonlab.edu.vn/wp-content/uploads/2024/04/dongA-1.png" },
      { id: "sgs", name: "SGS", imageUrl: "https://www.saigonlab.edu.vn/wp-content/uploads/2024/04/sgs.png" },
      { id: "acb", name: "ACB", imageUrl: "https://www.saigonlab.edu.vn/wp-content/uploads/2024/04/ACB.png" },
      { id: "lagion", name: "Lagion", imageUrl: "https://www.saigonlab.edu.vn/wp-content/uploads/2024/04/lagion.jpg" },
      { id: "mobifone", name: "Mobifone", imageUrl: "https://www.saigonlab.edu.vn/wp-content/uploads/2024/04/mobie.png" },
      { id: "gmo", name: "GMO", imageUrl: "https://www.saigonlab.edu.vn/wp-content/uploads/2024/04/GMo-1.png" },
      { id: "viettel", name: "Viettel", imageUrl: "https://www.saigonlab.edu.vn/wp-content/uploads/2024/04/Viettel.png" },
      { id: "vnpt", name: "VNPT", imageUrl: "https://www.saigonlab.edu.vn/wp-content/uploads/2024/04/logo-vnpt-e1713368612193.jpg" },
      { id: "htp", name: "HTP", imageUrl: "https://www.saigonlab.edu.vn/wp-content/uploads/2024/04/htp.jpg" },
      { id: "vietcom", name: "Vietcom", imageUrl: "https://www.saigonlab.edu.vn/wp-content/uploads/2024/04/vietcom-2.png" },
      { id: "kms", name: "KMS", imageUrl: "https://www.saigonlab.edu.vn/wp-content/uploads/2024/04/kms.png" },
      { id: "vng", name: "VNG", imageUrl: "https://www.saigonlab.edu.vn/wp-content/uploads/2024/04/VNG.png" }
    ];

    // Initialize about info
    this.aboutInfo = [
      {
        id: "introduction",
        title: "GIỚI THIỆU VỀ SAIGONLAB",
        content: "Trung tâm đào tạo an ninh mạng và CNTT hàng đầu Việt Nam với sứ mệnh nâng cao chất lượng nguồn nhân lực công nghệ thông tin.",
        imageUrl: "https://www.saigonlab.edu.vn/wp-content/uploads/2024/04/logosglab.jpg",
        orderIndex: 1
      },
      {
        id: "timeline-2016",
        title: "Timeline of Development - 2016",
        content: "Trung tâm đào tạo SAIGONLAB được thành lập vào tháng 7/2016, với sứ mệnh ban đầu là cung cấp các khóa đào tạo chuyên sâu về chứng chỉ Kỹ sư mạng Quốc tế của các hãng công nghệ hàng đầu như Cisco, Microsoft, Sun, Linux, Oracle, Juniper…",
        imageUrl: null,
        orderIndex: 2
      },
      {
        id: "timeline-2017",
        title: "Timeline of Development - 2017",
        content: "Theo thời gian, SaigonLab không ngừng mở rộng lĩnh vực hoạt động, từ đào tạo chuyên sâu đến tư vấn – triển khai giải pháp công nghệ thông tin, cung ứng nhân sự IT và hỗ trợ doanh nghiệp chuyển đổi số. Triển khai chương trình On the Job Training – đào tạo và tuyển dụng lập trình viên thực chiến.",
        imageUrl: null,
        orderIndex: 3
      },
      {
        id: "timeline-present",
        title: "Timeline of Development - Hiện nay",
        content: "Với hơn 9 năm phát triển, SaigonLab đã trở thành đối tác tin cậy của nhiều doanh nghiệp trong và ngoài nước, cung cấp các giải pháp đào tạo và công nghệ hiệu quả, góp phần nâng cao năng lực nhân sự và tối ưu vận hành doanh nghiệp.",
        imageUrl: null,
        orderIndex: 4
      },
      {
        id: "vision",
        title: "Tầm nhìn",
        content: "Trở thành đơn vị hàng đầu trong lĩnh vực đào tạo và tư vấn giải pháp công nghệ, góp phần nâng cao năng lực nhân sự và hỗ trợ doanh nghiệp phát triển bền vững trong kỷ nguyên số.",
        imageUrl: null,
        orderIndex: 5
      },
      {
        id: "mission-students",
        title: "Sứ mệnh - Đối với học viên",
        content: "Cung cấp các chương trình đào tạo thực chiến, giúp học viên phát triển kỹ năng công nghệ, nâng cao năng lực cạnh tranh trên thị trường lao động.",
        imageUrl: null,
        orderIndex: 6
      },
      {
        id: "mission-business",
        title: "Sứ mệnh - Đối với doanh nghiệp",
        content: "Hỗ trợ doanh nghiệp trong đào tạo nhân sự, tư vấn và triển khai giải pháp công nghệ, giúp tối ưu vận hành và tăng trưởng bền vững.",
        imageUrl: null,
        orderIndex: 7
      },
      {
        id: "mission-society",
        title: "Sứ mệnh - Đối với xã hội",
        content: "Góp phần thúc đẩy ứng dụng công nghệ thông tin vào đời sống và kinh doanh, tạo ra giá trị thiết thực cho cộng đồng.",
        imageUrl: null,
        orderIndex: 8
      },
      {
        id: "core-values-innovation",
        title: "Giá trị cốt lõi - Đổi Mới & Sáng Tạo",
        content: "Luôn cập nhật và ứng dụng công nghệ mới nhất vào đào tạo và triển khai giải pháp. Thích nghi linh hoạt với xu hướng công nghệ và nhu cầu thị trường.",
        imageUrl: null,
        orderIndex: 9
      },
      {
        id: "core-values-cooperation",
        title: "Giá trị cốt lõi - Hợp Tác & Phát Triển",
        content: "Kết nối doanh nghiệp, giảng viên, học viên trong hệ sinh thái công nghệ để cùng phát triển. Đồng hành lâu dài cùng khách hàng, mang lại giá trị bền vững.",
        imageUrl: null,
        orderIndex: 10
      },
      {
        id: "core-values-quality",
        title: "Giá trị cốt lõi - Chất Lượng & Thực Tiễn",
        content: "Đào tạo theo phương pháp học đi đôi với thực hành, giúp học viên có thể ứng dụng ngay vào công việc. Cam kết cung cấp giải pháp công nghệ hiệu quả, phù hợp với thực tế doanh nghiệp.",
        imageUrl: null,
        orderIndex: 11
      },
      {
        id: "core-values-responsibility",
        title: "Giá trị cốt lõi - Trách Nhiệm & Cam Kết",
        content: "Kết nối doanh nghiệp, giảng viên, học viên trong hệ sinh thái công nghệ để cùng phát triển. Đồng hành lâu dài cùng khách hàng, mang lại giá trị bền vững.",
        imageUrl: null,
        orderIndex: 12
      },
      {
        id: "call-to-action",
        title: "Sẵn Sàng Bắt Đầu Hành Trình Học Tập?",
        content: "Liên hệ ngay với chúng tôi để được tư vấn miễn phí về các khóa học phù hợp",
        imageUrl: null,
        orderIndex: 13
      }
    ];

    // Initialize contact info
    this.contactInfo = {
      id: "main-contact",
      address: "28/61 Cư Xá Lữ Gia, phường 15, quận 11, Tp. HCM",
      phone: "028.3863.8239",
      email: "info@saigonlab.edu.vn",
      website: "https://www.saigonlab.edu.vn",
      workingHours: "Thứ 2 - Thứ 6: 8:00 - 17:30 | Thứ 7: 8:00 - 12:00"
    };
  }

  async getUser(id: string): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = randomUUID();
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async createConsultationRequest(insertRequest: InsertConsultationRequest): Promise<ConsultationRequest> {
    const id = randomUUID();
    const request: ConsultationRequest = { 
      ...insertRequest,
      message: insertRequest.message || null,
      email: insertRequest.email || null,
      courseInterest: insertRequest.courseInterest || null,
      id, 
      createdAt: new Date().toISOString() 
    };
    this.consultationRequests.set(id, request);
    return request;
  }

  async getCourses(): Promise<Course[]> {
    return this.courses;
  }

  async getFacultyMembers(): Promise<Faculty[]> {
    return this.faculty;
  }

  async getNewsArticles(): Promise<NewsArticle[]> {
    return this.newsArticles;
  }

  async getPartners(): Promise<Partner[]> {
    return this.partners;
  }

  async getCourse(id: string): Promise<Course | undefined> {
    return this.courses.find(course => course.id === id);
  }

  async getNewsArticle(id: string): Promise<NewsArticle | undefined> {
    return this.newsArticles.find(article => article.id === id);
  }

  async getAboutInfo(): Promise<AboutInfo[]> {
    return this.aboutInfo.sort((a, b) => (a.orderIndex || 0) - (b.orderIndex || 0));
  }

  async getContactInfo(): Promise<ContactInfo> {
    return this.contactInfo;
  }
}

export const storage = new MemStorage();

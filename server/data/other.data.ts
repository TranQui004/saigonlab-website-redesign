import { type Partner, type AboutInfo, type ContactInfo } from "@shared/schema";

export const partnersData: Partner[] = [
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

export const aboutData: AboutInfo[] = [
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

export const contactData: ContactInfo = {
  id: "main-contact",
  address: "28/61 Cư Xá Lữ Gia, phường 15, quận 11, Tp. HCM",
  phone: "028.3863.8239",
  email: "info@saigonlab.edu.vn",
  website: "https://www.saigonlab.edu.vn",
  workingHours: "Thứ 2 - Thứ 6: 8:00 - 17:30 | Thứ 7: 8:00 - 12:00"
};
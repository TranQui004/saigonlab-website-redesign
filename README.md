# SAIGONLAB - Website Trung Tâm Đào Tạo Chứng Chỉ Kỹ Sư Mạng Quốc Tế

## Thông Tin Dự Án

### Tổng Quan

Dự án này được thực hiện trong khuôn khổ **học phần Thực Tập Doanh Nghiệp**, nhằm mục đích đề xuất thiết kế lại giao diện trang web gốc của công ty SAIGONLAB ([https://www.saigonlab.edu.vn/](https://www.saigonlab.edu.vn/)). Đây là dự án học tập, **không nhằm mục đích thương mại**.

### Thông Tin Thành Viên Thực Hiện

**Trường Đại học Công nghiệp TP. Hồ Chí Minh**

<div style="display: flex; gap: 20px; margin: 15px 0;">
  <div style="flex: 1; padding: 15px; border-left: 4px solid #3b82f6; background: #f8fafc; border-radius: 8px;">
    <strong>2001223968 - Trần Trọng Quí</strong> (Nhóm trưởng)
    <br>
    <a href="https://justtq.pages.dev/" target="_blank" style="color: #3b82f6; text-decoration: none; font-size: 0.9em;">Website</a>
  </div>
  <div style="flex: 1; padding: 15px; border-left: 4px solid #10b981; background: #f8fafc; border-radius: 8px;">
    <strong>2001224990 - Nguyễn Duy Thông</strong>
    <br>
    <a href="https://github.com/NgDuyThong" target="_blank" style="color: #10b981; text-decoration: none; font-size: 0.9em;">GitHub</a>
  </div>
</div>


### Về SAIGONLAB

SAIGONLAB là trung tâm chuyên đào tạo các chứng chỉ kỹ sư mạng quốc tế của các hãng nổi tiếng như: Cisco, Microsoft, Sun, Linux, Juniper, Oracle. Website được xây dựng với công nghệ hiện đại, giao diện thân thiện và responsive, đáp ứng nhu cầu thông tin và tư vấn cho học viên.

## Bắt Đầu

### Yêu Cầu Hệ Thống
- Node.js >= 18.0.0
- npm >= 8.0.0
- Git

### Cài Đặt

```bash
# Clone repository
git clone [repository-url]
cd SaigonLabRedesign4

# Cài đặt dependencies
npm install

# Chạy development server
npm run dev
```

Sau khi chạy thành công, website sẽ được mở tại: `http://localhost:5000`

### Tự Động Hóa Quá Trình Phát Triển

Để tiện lợi hơn trong quá trình phát triển, project cung cấp script tự động hóa việc cài đặt dependencies và khởi động development server:

- Trên Windows: Chạy file `start-dev.bat` bằng cách double-click hoặc thực thi trong Command Prompt
- Script sẽ tự động thực hiện `npm install` và `npm run dev`

## Tài Liệu Chi Tiết

Tài liệu chi tiết đã được chia thành các file riêng biệt để dễ quản lý. Dưới đây là danh sách các tài liệu quan trọng:

### Kiến Trúc & Công Nghệ
- [ARCHITECTURE.md](ARCHITECTURE.md) - Kiến trúc dự án và cấu trúc source code chi tiết
- [TECHNOLOGIES.md](TECHNOLOGIES.md) - Công nghệ, framework và thư viện được sử dụng

### Hướng Dẫn Phát Triển
- [DEVELOPMENT.md](DEVELOPMENT.md) - Hướng dẫn cài đặt, cấu hình và phát triển
- [DEPLOYMENT.md](DEPLOYMENT.md) - Hướng dẫn deployment và hosting

### Bảo Trì & Cập Nhật
- [TROUBLESHOOTING.md](TROUBLESHOOTING.md) - Hướng dẫn xử lý lỗi thường gặp
- [CHANGELOG.md](CHANGELOG.md) - Lịch sử cập nhật và cải tiến
- [ROADMAP.md](ROADMAP.md) - Kế hoạch phát triển trong tương lai

## License
**All resources used in this project are licensed under the [MIT License](https://opensource.org/licenses/MIT)**

---

**© 2025 SAIGONLAB. All rights reserved.**

*Website được phát triển bởi sinh viên Trường Đại học Công nghiệp TP. Hồ Chí Minh trong khuôn khổ học phần Thực Tập Doanh Nghiệp với hỗ trợ của Replit Agent AI*
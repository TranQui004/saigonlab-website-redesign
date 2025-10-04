# Hướng Dẫn Phát Triển

## Cài Đặt và Chạy Dự Án

### Yêu Cầu Hệ Thống
- Node.js >= 18.0.0
- npm >= 8.0.0
- Git

### Bước 1: Clone Repository
```bash
git clone [repository-url]
cd SaigonLabRedesign4
```

### Bước 2: Cài Đặt Dependencies
```bash
npm install
```

### Bước 3: Cấu Hình Môi Trường
Tạo file `.env` trong thư mục gốc của project với các biến môi trường cần thiết:
```env
DATABASE_URL=your_database_connection_string
NODE_ENV=development
SESSION_SECRET=your_session_secret
```

### Bước 4: Thiết Lập Database
```bash
npm run db:push
```

### Bước 5: Chạy Development Server
```bash
npm run dev
```

Sau khi chạy thành công, website sẽ được mở tại: `http://localhost:5000`

### Tự Động Hóa Quá Trình Phát Triển

Để tiện lợi hơn trong quá trình phát triển, project cung cấp script tự động hóa việc cài đặt dependencies và khởi động development server:

- Trên Windows: Chạy file `start-dev.bat` bằng cách double-click hoặc thực thi trong Command Prompt
- Script sẽ tự động thực hiện `npm install` và `npm run dev`

## Scripts Có Sẵn

| Script | Mô Tả |
|--------|-------|
| `npm run dev` | Chạy development server với hot reload |
| `npm run build` | Build production cho cả client và server |
| `npm start` | Chạy production server |
| `npm run check` | Kiểm tra TypeScript types |
| `npm run db:push` | Đẩy schema database lên server |

## Cấu Hình Development

### Path Aliases
Project sử dụng path aliases để import dễ dàng hơn:
- `@/` - Trỏ tới `client/src/`
- `@shared/` - Trỏ tới `shared/`
- `@assets/` - Trỏ tới `client/src/assets/`

### Hot Module Replacement (HMR)
Development server hỗ trợ HMR, thay đổi code sẽ được cập nhật ngay lập tức mà không cần refresh trang.

### TypeScript
Toàn bộ dự án sử dụng TypeScript để đảm bảo type safety và developer experience tốt hơn.

## Testing

### Kiểm Tra Chất Lượng Code
```bash
npm run check  # TypeScript type checking
```

### Manual Testing
- Test responsive design trên các devices
- Test form submission và validation
- Test navigation và routing
- Test API endpoints

## Performance Optimization

### Frontend
- **Code Splitting**: Lazy loading components
- **Image Optimization**: WebP format, lazy loading
- **Bundle Analysis**: Vite bundle analyzer
- **Caching**: Browser caching strategies

### Backend
- **Database Indexing**: Optimized queries
- **Caching**: Memory store cho sessions
- **Compression**: Gzip compression
- **Rate Limiting**: Prevent abuse

## Contributing

### Quy Tắc Code Style
- Sử dụng Prettier cho formatting
- ESLint cho code quality
- TypeScript strict mode
- Meaningful variable names (tiếng Anh)
- Comments bằng tiếng Việt cho business logic

### Git Workflow
1. Tạo branch từ `main`
2. Implement feature/fix
3. Test thoroughly
4. Create pull request
5. Code review
6. Merge vào `main`

### Commit Message Format
```
type: mô tả ngắn gọn

Mô tả chi tiết về thay đổi
- Điểm thay đổi 1
- Điểm thay đổi 2

Fixes #123
```

## Bảo Mật

- **Session Management**: Sử dụng express-session với store an toàn
- **Input Validation**: Zod schema validation cho tất cả input
- **Environment Variables**: Các thông tin nhạy cảm được lưu trong .env
- **CORS Configuration**: Cấu hình CORS phù hợp cho production
- **SQL Injection Protection**: Drizzle ORM bảo vệ khỏi SQL injection

## Responsive Design

Website được thiết kế responsive hoàn toàn:
- **Mobile First**: Thiết kế ưu tiên mobile
- **Breakpoints**: sm (640px), md (768px), lg (1024px), xl (1280px)
- **Touch Friendly**: Các element được tối ưu cho touch interaction
- **Performance**: Lazy loading cho images và components

## SEO Optimization

- **Meta Tags**: Đầy đủ meta description, keywords
- **Structured Data**: Schema markup cho các trang chính
- **Sitemap**: Tự động generate sitemap
- **Social Media**: Open Graph và Twitter Card tags
- **Performance**: Optimized images và code splitting
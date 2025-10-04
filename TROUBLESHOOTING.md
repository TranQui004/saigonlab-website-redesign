# Xử Lý Lỗi Thường Gặp

## Lỗi Thường Gặp và Giải Pháp

### 1. Lỗi Port đã được sử dụng
```bash
Error: listen EADDRINUSE :::5000
```
**Nguyên nhân**: Process khác đang sử dụng port 5000

**Giải pháp**:
```bash
# Kiểm tra process nào đang sử dụng port
netstat -ano | findstr :5000

# Kill process (thay PID bằng process ID tương ứng)
taskkill /F /PID [PID]

# Hoặc thay đổi port trong config
```

### 2. Lỗi Database connection
```bash
Error: connection refused
```
**Nguyên nhân**: Sai DATABASE_URL hoặc database server không hoạt động

**Giải pháp**:
- Kiểm tra DATABASE_URL trong file `.env`
- Đảm bảo database server đang hoạt động
- Test connection với database client

### 3. Lỗi TypeScript compilation
```bash
Type 'X' is not assignable to type 'Y'
```
**Giải pháp**:
```bash
# Kiểm tra lỗi TypeScript chi tiết
npm run check

# Cập nhật type definitions
npm install @types/node @types/react --save-dev
```

### 4. Lỗi Build thất bại
```bash
Build failed with errors
```
**Giải pháp**:
```bash
# Xóa node_modules và cài đặt lại
rm -rf node_modules package-lock.json
npm install

# Kiểm tra import paths
# Kiểm tra TypeScript errors
# Xóa cache
npm run clean
```

### 5. Lỗi News Cards không hiển thị đầy đủ thông tin
**Triệu chứng**: Thiếu nút "Read more", author, hoặc date

**Giải pháp**:
- Kiểm tra CSS layout trong `news.tsx`
- Đảm bảo sử dụng `flex flex-col h-full`
- Xác nhận `justify-between` và `mt-auto` trong CardContent
- Kiểm tra import của Badge component
- Đã fix trong Version 2.1.0: Cập nhật class CardContent từ 'p-6 h-full flex flex-col' thành 'p-6 flex flex-col h-full' để fix lỗi nút "Đọc thêm" không hiển thị

### 6. Lỗi Course Description formatting
**Triệu chứng**: Bullet points hiển thị như text liền tiếp

**Giải pháp**:
- Kiểm tra `course-description.tsx` component
- Đảm bảo xử lý bullet points trong description
- Sử dụng `.split('\u2022')` cho bullet character

### 7. Lỗi Hot Module Replacement (HMR)
**Triệu chứng**: Thay đổi code không cập nhật tự động

**Giải pháp**:
- Restart development server
- Kiểm tra Vite config
- Clear browser cache

### 8. Lỗi Responsive Design
**Triệu chứng**: Layout bị vỡ trên mobile/tablet

**Giải pháp**:
- Kiểm tra TailwindCSS breakpoints
- Sử dụng responsive utilities (`sm:`, `md:`, `lg:`)
- Test trên các screen sizes khác nhau

### 9. Lỗi Performance chậm
**Triệu chứng**: Website load chậm, lag

**Giải pháp**:
- Sử dụng React DevTools Profiler
- Optimize images (WebP format)
- Implement lazy loading
- Kiểm tra Network tab trong DevTools
- Minimize bundle size
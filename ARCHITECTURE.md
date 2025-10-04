# Kiến Trúc Dự Án

## Cấu Trúc Source Code Chi Tiết

### Client (Frontend) - React Application

**public/** - Thư mục chứa các tài nguyên tĩnh công khai
- `images/` - Hình ảnh, logo, icons được sử dụng trong website
- `favicon.ico` - Icon hiển thị trên tab trình duyệt

**src/components/** - Các React component được tổ chức theo mô-đun
- `features/` - Components theo từng tính năng cụ thể
  - `home/` - Components của trang chủ (hero.tsx, features.tsx, stats.tsx)
  - `courses/` - Components quản lý khóa học (course-list.tsx, course-card.tsx, course-description.tsx)
  - `faculty/` - Components hiển thị thông tin giảng viên (faculty-list.tsx, faculty-card.tsx)
  - `news/` - Components tin tức (news-list.tsx, news-card.tsx, news-detail.tsx)
- `forms/` - Components form tương tác người dùng
  - `consultation-form.tsx` - Form đăng ký tư vấn trực tuyến
  - `contact-form.tsx` - Form liên hệ và gửi thông tin
- `layout/` - Components bố cục chung của website
  - `header.tsx` - Navigation bar và menu chính
  - `footer.tsx` - Footer với thông tin liên hệ
  - `back-to-top.tsx` - Nút cuộn lên đầu trang
- `ui/` - Reusable UI components theo design system
  - `button.tsx` - Component button với các variant
  - `card.tsx` - Component card layout
  - `input.tsx` - Component input form
  - `dialog.tsx` - Modal và popup components
  - `toast.tsx` - Notification components

**src/pages/** - Page components tương ứng với các route
- `home.tsx` - Trang chủ với hero section và giới thiệu
- `about.tsx` - Trang giới thiệu về SAIGONLAB
- `courses.tsx` - Trang danh sách khóa học
- `course-detail.tsx` - Trang chi tiết từng khóa học
- `faculty.tsx` - Trang danh sách giảng viên
- `news.tsx` - Trang tin tức và bài viết
- `contact.tsx` - Trang thông tin liên hệ
- `not-found.tsx` - Trang 404 error

**src/services/** - API client và HTTP request management
- `api.ts` - Cấu hình Axios client và base API setup
- `courses.ts` - API calls liên quan đến khóa học
- `faculty.ts` - API calls quản lý thông tin giảng viên
- `news.ts` - API calls lấy tin tức và bài viết
- `consultation.ts` - API submit form tư vấn

**src/hooks/** - Custom React hooks tái sử dụng
- `use-toast.ts` - Hook quản lý toast notifications
- `use-api.ts` - Hook tổng hợp cho API calls
- `use-local-storage.ts` - Hook quản lý localStorage

**src/lib/** - Utilities và configurations
- `queryClient.ts` - Cấu hình TanStack Query client
- `utils.ts` - Utility functions dùng chung
- `cn.ts` - Class name utility cho styling

**Configuration Files:**
- `vite.config.ts` - Cấu hình Vite build tool
- `tailwind.config.js` - Cấu hình TailwindCSS framework
- `tsconfig.json` - TypeScript compiler options
- `index.html` - HTML template chính

### Server (Backend) - Express.js Application

**controllers/** - Request handlers xử lý HTTP requests
- `auth.controller.ts` - Xử lý authentication và authorization
- `courses.controller.ts` - API endpoints cho courses
- `faculty.controller.ts` - API endpoints cho faculty
- `news.controller.ts` - API endpoints cho news
- `consultation.controller.ts` - Xử lý form consultation

**services/** - Business logic layer
- `course.service.ts` - Logic nghiệp vụ của courses
- `faculty.service.ts` - Logic nghiệp vụ của faculty
- `news.service.ts` - Logic nghiệp vụ của news và web scraping
- `auth.service.ts` - Logic xác thực người dùng

**data/** - Data access layer và mock data
- `storage.ts` - Interface quản lý data storage
- `courses.data.ts` - Mock data cho courses
- `faculty.data.ts` - Mock data cho faculty
- `news.data.ts` - Mock data cho news
- `other.data.ts` - Data khác (partners, testimonials)

**routes/** - Route definitions và API endpoints
- `auth.routes.ts` - Routes cho authentication
- `api.routes.ts` - Main API routes aggregation
- `index.ts` - Route tổng hợp và middleware setup

**utils/** - Server-side utilities
- `news-scraper.ts` - Web scraping tin tức từ external sources
- `scheduler.ts` - Scheduled tasks và cron jobs
- `logger.ts` - Logging utility

**middleware/** - Express middleware functions
- `auth.middleware.ts` - Authentication middleware
- `cors.middleware.ts` - CORS configuration
- `error.middleware.ts` - Global error handling
- `validation.middleware.ts` - Request validation

### Shared - Code dùng chung giữa client và server

**types/** - TypeScript type definitions
- `database.ts` - Database schema types
- `entities.ts` - Domain entity types
- `api.ts` - API request/response types

**constants/** - Shared constants
- `index.ts` - Common constants được sử dụng chung
- `api-endpoints.ts` - API endpoint constants

**utils/** - Shared utility functions
- `validation.ts` - Zod schema validation
- `formatters.ts` - Data formatting utilities

### Root Configuration Files

- `package.json` - NPM dependencies, scripts và project metadata
- `tsconfig.json` - TypeScript configuration cho toàn project
- `.env.example` - Template cho environment variables
- `.gitignore` - Git ignore rules
- `README.md` - Project documentation

### Development và Build Tools

- **Vite** - Frontend build tool với hot module replacement
- **ESBuild** - Fast JavaScript bundler
- **TypeScript** - Type safety cho toàn bộ codebase
- **TailwindCSS** - Utility-first CSS framework
- **PostCSS** - CSS processing tool

### Database và ORM

- **Drizzle ORM** - Type-safe ORM cho PostgreSQL
- **Neon Database** - Serverless PostgreSQL hosting
- **Database Migrations** - Schema version control

Việc tổ chức cấu trúc này đảm bảo:
- **Separation of Concerns**: Mỗi module có trách nhiệm rõ ràng
- **Scalability**: Dễ dàng mở rộng và thêm tính năng mới
- **Maintainability**: Code dễ bảo trì và debug
- **Reusability**: Components và utilities có thể tái sử dụng
- **Type Safety**: TypeScript đảm bảo type safety xuyên suốt
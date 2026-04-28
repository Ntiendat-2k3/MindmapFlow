# MindmapFlow 🧠

Một ứng dụng web full-stack hiện đại dùng để tạo, quản lý và chia sẻ sơ đồ tư duy (mind map) tương tác. Được xây dựng với Next.js 14, React Flow, NextAuth, và cơ sở dữ liệu Vercel Postgres.

## Công nghệ sử dụng (Tech Stack)

| Thành phần | Công nghệ | Tác dụng trong dự án |
| :--- | :--- | :--- |
| **Framework** | ![Next.js](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js) | Xây dựng kiến trúc App Router, tối ưu SSR và Server Actions. |
| **UI Library** | ![React](https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react&logoColor=black) | Phát triển giao diện người dùng dựa trên thành phần (Components). |
| **Engine** | ![React Flow](https://img.shields.io/badge/React_Flow-11-FF0072?style=for-the-badge) | Thư viện cốt lõi để xử lý kéo thả, kết nối các Node/Edge trong Mindmap. |
| **Database** | ![PostgreSQL](https://img.shields.io/badge/Vercel_Postgres-336791?style=for-the-badge&logo=postgresql) | Lưu trữ dữ liệu sơ đồ, thông tin người dùng và các liên kết. |
| **Security** | ![NextAuth.js](https://img.shields.io/badge/NextAuth.js-Security-000000?style=for-the-badge&logo=next.js) | Quản lý xác thực người dùng (Authentication) và bảo vệ dữ liệu. |
| **State** | ![Zustand](https://img.shields.io/badge/Zustand-State-443E38?style=for-the-badge) | Quản lý trạng thái sơ đồ tập trung, tối ưu hiệu năng render. |
| **Styling** | ![Sass](https://img.shields.io/badge/Sass-SCSS-CC6699?style=for-the-badge&logo=sass) | Quản lý CSS chuyên nghiệp với biến, mixins và cấu trúc lồng nhau. |
| **Toast** | ![Sonner](https://img.shields.io/badge/Sonner-Toast-orange?style=for-the-badge) | Hệ thống thông báo hiện đại, nâng cao trải nghiệm người dùng (UX). |

---

## Case Study

- **Vấn đề:** MindmapFlow giúp giải quyết nhu cầu tạo lập, hệ thống hóa và chia sẻ sơ đồ tư duy trực tuyến, hỗ trợ người dùng dễ dàng sắp xếp luồng suy nghĩ của mình một cách trực quan.
- **Thách thức:** Việc quản lý trạng thái (state) phức tạp của các node và edge khi người dùng tương tác liên tục trên canvas, đi kèm với yêu cầu đồng bộ và lưu trữ dữ liệu sơ đồ mượt mà, ổn định.
- **Giải pháp:** Dự án kết hợp sức mạnh của React Flow và Zustand để tối ưu quản lý state ở client-side, cùng với Next.js Server Actions và Vercel Postgres nhằm xử lý việc lưu trữ dữ liệu an toàn, hiệu suất cao ở phía server.

## Tổng quan

MindmapFlow trao quyền cho người dùng sắp xếp các luồng suy nghĩ và ý tưởng trực quan thông qua giao diện vẽ sơ đồ tư duy dễ sử dụng. Tận dụng tối đa Next.js App Router và Server Actions, dự án mang lại trải nghiệm nhanh chóng, bảo mật, chuẩn SEO, đồng thời vẫn giữ được khả năng quản lý trạng thái (state management) mạnh mẽ ở client-side.

## Các chức năng chính (Features)

### 1. Trình chỉnh sửa Sơ đồ tư duy (Interactive Editor)

- **Vẽ và thiết kế tự do**: Dựa trên React Flow, không gian canvas vô hạn cho phép bạn kéo thả (drag & drop), thu phóng (zoom/pan) dễ dàng.
- **Tạo Node thông minh**: Kéo dây nối từ một Node có sẵn ra khoảng trống để hệ thống tự động tạo Node mới có liên kết với Node gốc.
- **Tuỳ biến linh hoạt**: Tích hợp các Component Custom cho Node và Edge để tạo giao diện hiển thị chuyên biệt.
- **Hỗ trợ định hướng**: Tích hợp MiniMap (bản đồ thu nhỏ) giúp bạn định vị trên các sơ đồ lớn, đi kèm Control Bar hỗ trợ zoom tiện dụng.

### 2. Quản lý Sơ đồ (Dashboard)

- **Trang quản lý cá nhân**: Nơi tổng hợp toàn bộ các mindmap đã tạo.
- **Thao tác nhanh chóng**: Cho phép tạo mindmap mới, xem danh sách, cập nhật thông tin và xóa mindmap dễ dàng.
- **Lưu trữ tự động & thủ công**: Cơ chế lưu trạng thái mindmap (vị trí nodes, text, connections) một cách an toàn.

### 3. Chia sẻ và SEO (Sharing & SEO Metadata)

- **Kiểm soát quyền truy cập**: Thiết lập Mindmap ở chế độ **Private** (Chỉ mình tôi) hoặc **Public** (Công khai cho người có link).
- **Chia sẻ link tiện lợi**: Cung cấp nút copy link nhanh chóng để chia sẻ cho đồng nghiệp và bạn bè.
- **Cấu hình Meta Data (SEO/Social)**: Khi bật Public, người dùng có thể tự do định nghĩa `Title`, `Description` và URL `Ảnh chia sẻ (Open Graph Image)` riêng biệt cho Mindmap đó để hiển thị đẹp mắt khi gửi qua Zalo, Facebook, v.v.

### 4. Xác thực & Phân quyền (Authentication & Authorization)

- **Đăng nhập tiện lợi**: Tích hợp NextAuth hỗ trợ đăng nhập qua OAuth bằng **Google** và **GitHub**.
- **Bảo mật dữ liệu**: Hệ thống tự động xác thực phiên đăng nhập (session). Chỉ có chủ sở hữu (author) mới có quyền chỉnh sửa, thay đổi Mindmap. Khách truy cập (nếu có link Public) chỉ có quyền xem (Read-only).

## Cấu trúc thư mục dự án

```text
src/
├── app/
│   ├── (pages)/          # Các route chính (home, about, features, login, my-mindmap)
│   ├── api/              # API routes và Server Actions
│   │   ├── actions/      # Next.js Server Actions dùng để tương tác trực tiếp với Database
│   │   ├── auth/         # Cấu hình NextAuth và các providers (Google/Github)
│   │   └── lib/          # Các truy vấn Database và tiện ích
│   ├── context/          # Các Context providers ở mức toàn cục
│   ├── utils/            # Các hàm tiện ích (notifications, loading spinners)
│   ├── layout.js         # Cấu hình Layout gốc cho toàn App
│   └── page.js           # File chạy chính của trang chủ
```

## Hướng dẫn cài đặt

### 1. Clone repository về máy

```bash
git clone https://github.com/Ntiendat-2k3/MindmapFlow.git
cd MindmapFlow
```

### 2. Cài đặt các thư viện cần thiết

```bash
npm install
```

### 3. Cấu hình biến môi trường

Tạo một file `.env.local` ở thư mục gốc của dự án và khai báo các biến môi trường sau:

```env
# Cấu hình NextAuth
NEXTAUTH_URL=http://localhost:3001
NEXTAUTH_SECRET=your_nextauth_secret

# Cấu hình các Provider đăng nhập (OAuth)
GITHUB_ID=your_github_client_id
GITHUB_SECRET=your_github_client_secret
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret

# Chuỗi kết nối Database Vercel Postgres
POSTGRES_URL=your_postgres_url
POSTGRES_PRISMA_URL=your_postgres_prisma_url
POSTGRES_URL_NON_POOLING=your_postgres_url_non_pooling
POSTGRES_USER=your_postgres_user
POSTGRES_HOST=your_postgres_host
POSTGRES_PASSWORD=your_postgres_password
POSTGRES_DATABASE=your_postgres_database
```

### 4. Khởi chạy server phát triển (Development)

```bash
npm run dev
```

Ứng dụng sẽ chạy ở địa chỉ [http://localhost:3001](http://localhost:3001).

## ⚙️ Kiến trúc & Luồng dữ liệu (Data Flow)

- **Cách tiếp cận Server-First:** Thay thế các endpoint API truyền thống bằng React Server Components (RSC) và Next.js Server Actions. Điều này cho phép thao tác với CSDL ngay từ phía Server, tăng tính bảo mật và giúp tránh các lỗi cookie/CORS không đáng có.
- **Xử lý Real-time Canvas:** Toạ độ của các node, mức độ thu phóng (zoom), và các event (như kết nối dây) được xử lý liên tục qua React Flow và state client. Cơ chế này được tối ưu hoá để tránh tình trạng re-render toàn bộ page khi tương tác.
- **Tùy chỉnh các Node/Edge:** Dự án mở rộng cấu trúc mặc định của React Flow qua `NodeCustom` và `EdgeCustom`, cho phép hiển thị các nút thao tác (như sửa/xoá) hoặc các handle kết nối tuỳ chỉnh.

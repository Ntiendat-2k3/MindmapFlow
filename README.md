# MindmapFlow 🧠

Một ứng dụng web full-stack hiện đại dùng để tạo, quản lý và chia sẻ sơ đồ tư duy (mind map) tương tác. Được xây dựng với Next.js 14, React Flow, NextAuth, và cơ sở dữ liệu Vercel Postgres.

## 🌟 Tổng quan

MindmapFlow trao quyền cho người dùng sắp xếp các luồng suy nghĩ và ý tưởng trực quan thông qua giao diện vẽ sơ đồ tư duy dễ sử dụng. Tận dụng tối đa Next.js App Router và Server Actions, dự án mang lại trải nghiệm nhanh chóng, bảo mật, chuẩn SEO, đồng thời vẫn giữ được khả năng quản lý trạng thái (state management) mạnh mẽ ở client-side nhờ Zustand.

## ✨ Các tính năng nổi bật

- **Sơ đồ tư duy tương tác:** Tạo các node linh hoạt, kết nối ý tưởng và thiết kế các sơ đồ phức tạp một cách dễ dàng với React Flow.
- **Xác thực bảo mật:** Đăng nhập mượt mà thông qua OAuth sử dụng NextAuth.js (hỗ trợ tài khoản GitHub & Google).
- **Lưu trữ dữ liệu:** Toàn bộ dữ liệu sơ đồ tư duy và vị trí các node được lưu trữ an toàn trên cơ sở dữ liệu Vercel Postgres.
- **Server Actions & SSR:** Tối ưu hóa tối đa việc gọi và thay đổi dữ liệu sử dụng Next.js 14 Server Actions, bỏ qua các route API truyền thống, đảm bảo xử lý an toàn và bảo mật hoàn toàn phía Server.
- **Quản lý bằng Dashboard:** Giao diện trực quan (trang `/my-mindmap`) giúp xem lại toàn bộ các sơ đồ tư duy đã tạo, chỉnh sửa hoặc xóa chúng khi không còn dùng đến.
- **Thiết kế Responsive:** Giao diện được cấu trúc bằng Sass (SCSS), đem đến trải nghiệm mượt mà và cao cấp trên mọi thiết bị.
- **Thông báo Real-time:** Hệ thống thông báo (toast) hiện đại, nhẹ nhàng bằng Sonner.

## 🛠️ Công nghệ sử dụng

- **Framework:** [Next.js 14](https://nextjs.org/) (App Router)
- **UI Library:** [React 18](https://react.dev/)
- **Mind Mapping Engine:** [React Flow](https://reactflow.dev/)
- **Database:** [Vercel Postgres](https://vercel.com/storage/postgres)
- **Xác thực (Authentication):** [NextAuth.js](https://next-auth.js.org/)
- **Quản lý State:** [Zustand](https://zustand-demo.pmnd.rs/)
- **Styling:** Sass / SCSS
- **Thông báo (Notifications):** [Sonner](https://sonner.emilkowal.ski/)

## 📂 Cấu trúc thư mục dự án

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

## 🚀 Hướng dẫn cài đặt

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

- **Cách tiếp cận Server-First:** Thay thế các endpoint API truyền thống bằng React Server Components (RSC) và Next.js Server Actions. Điều này cho phép truy cập cơ sở dữ liệu trực tiếp và khắc phục triệt để các lỗi khi chuyển tiếp cookie (cookie forwarding).
- **Trạng thái Client-Side:** Tọa độ của các mind map, mức độ thu phóng (zoom), và những thao tác tương tác thời gian thực được xử lý bởi các custom hooks của React Flow và Zustand để giảm thiểu tối đa tình trạng re-render toàn phần.
- **Tùy chỉnh các Node:** Dự án sử dụng Node tùy chỉnh (`NodeCustom`) và Edge tùy chỉnh (`EdgeCustom`) để tạo ra giao diện riêng biệt so với cấu trúc mặc định.

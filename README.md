# Website đặt món cà phê — giao diện ReactJS offline

Bài kiểm tra kết thúc môn: ReactJS + Vite + TypeScript, CSS đơn giản. Không backend, không OpenAI, không Cloudflare, không đăng nhập bên ngoài.

## Chạy trong VS Code
Cài Node.js 24 (hoặc >=22.13), mở thư mục project, mở Terminal:

```bash
npm install
npm run dev
```

Mở http://localhost:5173. Nếu PowerShell chặn npm.ps1, dùng `npm.cmd install` và `npm.cmd run dev` hoặc mở Command Prompt.

Cần internet ở lần cài thư viện đầu tiên. Sau khi cài, giao diện chạy trên máy không cần internet. Giữ Terminal mở.

## Trình bày chức năng
- Menu, tìm kiếm, danh mục, chi nhánh.
- Size/topping, giỏ hàng, tăng/giảm/xóa món.
- Form đặt món, tổng tiền, mã đơn, tra cứu.
- Đăng ký/đăng nhập/đăng xuất mô phỏng, lịch sử đơn.
- Quản trị món/chi nhánh/trạng thái đơn và doanh thu mẫu.

Vào Tài khoản → Đăng ký. Tài khoản mẫu đầu tiên có quyền quản trị. Dữ liệu mẫu lưu bằng localStorage trong trình duyệt hiện tại; không dùng cho tài khoản thật hoặc thanh toán thật. Xóa dữ liệu trình duyệt sẽ xóa dữ liệu demo. Giỏ hàng mất khi tải lại trang. Đơn không được gửi đến quán.

## Các file chính
- src/pages/Home.tsx: trang đặt món.
- src/pages/Account.tsx: giao diện tài khoản/lịch sử.
- src/pages/Admin.tsx: quản trị.
- src/lib/demo-api.ts: dữ liệu và thao tác mô phỏng trong trình duyệt.
- src/lib/seed.json: menu/chi nhánh mẫu.
- src/style.css: CSS.

## Kiểm tra / đóng gói
`npm run check`
`npm run build`
`npm run preview`

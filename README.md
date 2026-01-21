# GraceSalon — Luxury Hair & Spa Landing Page

React + Vite project với cấu trúc đầy đủ theo chuẩn production.

## 🚀 Khởi động nhanh

```bash
npm install
npm run dev
```

## 📁 Cấu trúc dự án

```
gracesalon/
├── index.html
├── vite.config.js
├── package.json
└── src/
    ├── main.jsx                  # Entry point
    ├── App.jsx                   # Root component
    │
    ├── assets/
    │   └── data/
    │       ├── services.js       # Dữ liệu dịch vụ
    │       ├── testimonials.js   # Dữ liệu đánh giá
    │       └── gallery.js        # Dữ liệu gallery + constants
    │
    ├── hooks/
    │   ├── useInView.js          # Intersection Observer hook
    │   ├── useScrolled.js        # Navbar scroll detection
    │   ├── useAutoSlider.js      # Testimonial auto-rotate
    │   └── useScrollTo.js        # Smooth scroll helper
    │
    ├── layouts/
    │   └── MainLayout.jsx        # Navbar + Footer wrapper
    │
    ├── components/
    │   ├── Navbar.jsx            # Fixed navigation bar
    │   ├── Footer.jsx            # Site footer
    │   ├── common/
    │   │   ├── FadeIn.jsx        # Scroll-triggered fade animation
    │   │   ├── Button.jsx        # Primary / Outline button
    │   │   └── SectionHeader.jsx # Reusable section title block
    │   └── sections/
    │       ├── Hero.jsx          # Hero banner
    │       ├── Services.jsx      # Services grid
    │       ├── About.jsx         # About + stats
    │       ├── Gallery.jsx       # Photo gallery
    │       ├── Testimonials.jsx  # Auto-sliding testimonials
    │       └── Contact.jsx       # Booking form + info
    │
    ├── pages/
    │   └── Home.jsx              # Home page (composes all sections)
    │
    └── styles/
        └── global.css            # Design tokens + global styles
```

## 🎨 Design Tokens (CSS Variables)

| Token            | Value     | Dùng cho                    |
|------------------|-----------|-----------------------------|
| `--blue`         | `#2B6CB0` | Accent, icon, link          |
| `--blue-dark`    | `#1B3F72` | Button primary, border hover|
| `--navy`         | `#0B1F3A` | Text, dark sections         |
| `--navy-deep`    | `#060F1E` | Footer background           |
| `--blue-light`   | `#CEE0F6` | Highlight, italic accent    |
| `--blue-mid`     | `#EBF4FF` | Testimonials background     |
| `--offwhite`     | `#F7FAFF` | Services background         |

## 📦 Thêm trang mới

1. Tạo file trong `src/pages/`
2. Tạo sections mới trong `src/components/sections/`
3. Thêm vào `App.jsx` hoặc dùng React Router

## 🔧 Mở rộng

- **React Router**: Cài `react-router-dom` và wrap `App.jsx` với `<BrowserRouter>`
- **Real images**: Thay `div` gradient trong Gallery bằng `<img>` thực
- **Form backend**: Kết nối `Contact.jsx` với EmailJS / Formspree / API tự viết

# SparkMakit – Modern Multi-Vendor Marketplace

**SparkMakit** is a next-generation multi-vendor e-commerce platform built with **Next.js 16**, **Tailwind CSS 4**, and **Radix UI**, offering a fast, elegant, and culturally inspired shopping experience for vendors and buyers.  
The platform merges African-inspired design with a global “Shin Market” vibe — allowing vendors to sell anything from jewelry to tech gadgets in a modern digital marketplace.

---

## 🚀 Features

- 🛍️ **Multi-Vendor System** – Vendors can create stores, upload products, and manage orders.  
- 💳 **Shopping Cart & Checkout** – Smooth checkout experience with integrated payments.  
- 🎨 **African-Inspired UI** – Clean, vibrant interface using Radix UI and TailwindCSS for rich design.  
- 📱 **Responsive Design** – Fully optimized for mobile, tablet, and desktop.  
- ⚙️ **Vendor Dashboard** – Real-time analytics, product management, and performance tracking.  
- 🧾 **Admin Portal** – Manage users, vendors, and platform performance easily.  
- 🧩 **Component-Driven Architecture** – Built with reusable and scalable React components.  
- 🌗 **Dark Mode Ready** – Using `next-themes` for seamless theme switching.  
- 🎬 **Smooth Animations** – Powered by Framer Motion and Tailwind Animate.  
- 🔐 **Form Validation** – Using `react-hook-form` with `zod` schema validation.  
- 💡 **State Management** – Simplified and reactive using Zustand.  
- 📈 **Charts & Analytics** – Integrated using Recharts for vendor performance visualization.  
- 📊 **Carousel Support** – Embla carousel for showcasing products dynamically.  

---

## 🧰 Tech Stack

| Category | Technology |
|-----------|-------------|
| **Framework** | Next.js 16 |
| **Frontend** | React 19, Tailwind CSS 4 |
| **UI Library** | Radix UI, Lucide Icons, CMDK |
| **Animations** | Framer Motion, Tailwind Animate |
| **Forms** | React Hook Form + Zod |
| **State Management** | Zustand |
| **Charts** | Recharts |
| **Date Utilities** | date-fns |
| **Carousel** | Embla Carousel |
| **Theming** | next-themes |
| **Validation** | @hookform/resolvers |
| **Notifications** | Sonner |
| **Type Safety** | TypeScript 5 |
| **Build Tools** | PostCSS, Autoprefixer |
| **Hosting** | Vercel (Optimized for `sparkmakit.vercel.app`) |

---

## ⚙️ Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/sparkmakit.git
   cd sparkmakit
Install dependencies

bash
Copy code
npm install
Start the development server

bash
Copy code
npm run dev
Visit the app on http://localhost:3000

🧑‍💻 Scripts
Command	Description
npm run dev	Start the development server
npm run build	Build the production-ready app
npm run start	Start the production server
npm run lint	Run ESLint for code quality

🧠 Project Structure
php
Copy code
sparkmakit/
│
├── app/                 # Next.js app directory
├── components/          # Reusable UI components (Radix, custom)
├── lib/                 # Utility and helper functions
├── hooks/               # Zustand and React hooks
├── styles/              # Global and component-specific styles
├── public/              # Static assets
├── pages/               # Routing (if hybrid mode)
├── package.json
└── tailwind.config.js
🌍 Environment Variables (Optional)
Create a .env.local file in your root directory and configure:

ini
Copy code
NEXT_PUBLIC_API_URL=https://api.sparkmakit.com
NEXT_PUBLIC_APP_NAME=SparkMakit
💸 Revenue Model
Commission on Sales – A percentage from every completed vendor sale.

Vendor Subscription Plans – Monthly or yearly premium accounts with extra visibility and analytics.

Promoted Listings & Ads – Paid product placement on homepage and category highlights.

👩🏽‍💻 Contribution Guide
We welcome contributions from developers and designers!

Fork the repo

Create a new branch (feature/your-feature)

Commit your changes

Submit a pull request

🪄 Deployment
Easily deploy to Vercel:

bash
Copy code
vercel deploy
🧾 License
This project is licensed under the MIT License — free to use and modify.

✨ Acknowledgments
Built with ❤️ by Spark Technologies
Inspired by African creativity and global innovation 🌍
Visit: sparkmakit.vercel.app

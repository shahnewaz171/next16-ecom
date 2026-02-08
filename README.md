# Next.js 16 E-Commerce

A modern e-commerce application built with Next.js 16.1 showcasing Partial Pre-Rendering (PPR), advanced caching, and beautiful UI design.

## 🚀 Features

- ✨ **Next.js 16.1** with Partial Pre-Rendering & React Compiler
- 🎨 **Dark/Light Theme** with smooth transitions
- 🛍️ **Product Catalog** with filtering, search, and pagination
- 🔐 **Authentication Pages** (Login/Signup) with validation
- 📱 **Fully Responsive** design
- ⚡ **Optimized Performance** with caching strategies
- 🎭 **Framer Motion** animations
- 🎯 **TypeScript** for type safety
- 💅 **Tailwind CSS v4** for styling
- 🧩 **Reusable Components** with CVA

## 📦 Tech Stack

- **Framework:** Next.js 16.1.1
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Notifications:** Sonner
- **Variants:** Class Variance Authority
- **Linting:** BiomeJS

## 🏗️ Project Structure

```
├── app/                    # Next.js app directory
│   ├── (public)/          # Public routes
│   │   ├── login/
│   │   ├── register/
│   │   ├── products/
│   │   └── product/[id]/
│   └── (private)/         # Private routes
│       └── page.tsx       # Home page
├── components/            # Reusable UI components
│   ├── core/             # Core components (Theme, etc.)
│   └── ui/               # UI components (Button, Card, etc.)
├── features/             # Feature-based modules
│   ├── products/         # Product components
│   └── authentication/   # Auth components
├── layouts/              # Layout components
├── hooks/                # Custom React hooks
├── services/             # API services
├── types/                # TypeScript types
├── data/                 # Mock data
└── utils/                # Utility functions
```

## 🎯 Getting Started

### Prerequisites

- Node.js 18+ 
- pnpm (recommended)

### Installation

```bash
# Clone the repository
git clone <your-repo-url>

# Install dependencies
pnpm install

# Run development server
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to view the app.

### Build for Production

```bash
# Create production build
pnpm build

# Start production server
pnpm start
```

## 📝 Available Scripts

```bash
pnpm dev          # Start development server
pnpm build        # Create production build
pnpm build:debug  # Build with PPR debug info
pnpm start        # Start production server
pnpm lint         # Run BiomeJS linter
pnpm lint:fix     # Fix linting issues
pnpm format       # Format code
pnpm analyze      # Analyze bundle size
```

## 🎨 Features Overview

### Product Catalog
- Browse products by category
- Search functionality
- Sort by name and price
- Pagination
- Product detail pages with related products

### Authentication
- Beautiful login/signup forms
- Form validation with real-time feedback
- Password strength indicator
- Error handling with toast notifications

### Theme System
- Dark and light modes
- Persistent theme selection
- Smooth transitions
- System preference detection

### UI Components
- Button (8 variants, loading states)
- Card (4 variants, hover effects)
- Badge (7 color variants)
- Input (with icon support)
- Tabs (animated)
- Skeleton loaders

## 🔧 Configuration

### Next.js Config
- React Compiler enabled
- Turbopack for fast builds
- Typed routes
- Image optimization for Unsplash

### Environment Variables
No environment variables required for demo. For production:
```env
NEXT_PUBLIC_API_URL=your-api-url
```

## 📱 Pages

- `/` - Home page with featured products
- `/products` - All products with filters
- `/product/[id]` - Product detail page
- `/login` - Login page
- `/register` - Signup page

## 🎭 Design System

### Colors
- Primary: Blue (#3b82f6)
- Success: Green
- Warning: Yellow
- Destructive: Red
- Gradients: Blue to Purple

### Typography
- Font Family: Geist Sans, Geist Mono
- Responsive sizing
- Gradient text for headings

## 🚀 Performance

- Static Site Generation (SSG) for product pages
- Optimized images from Unsplash
- Code splitting
- Lazy loading

## 🔜 Roadmap

- [ ] Shopping cart functionality
- [ ] Checkout process
- [ ] User dashboard
- [ ] Order history
- [ ] Payment integration
- [ ] Admin panel
- [ ] Product reviews
- [ ] Wishlist feature

## 📄 License

This project is for educational purposes.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📧 Contact

For questions or feedback, please open an issue.

---

Built with ❤️ using Next.js 16

# Ahmed Hassan - Portfolio Website

A production-ready, responsive portfolio website for a Mechanical Engineer specializing in Aircraft Structures & Systems. Built with modern web technologies and following current design trends.

## 🚀 Features

- **Modern Design**: Neo-brutalist layout with glassmorphism cards and gradient accents
- **Responsive**: Optimized for mobile, tablet, and desktop viewing
- **Dark Mode**: Default dark theme with light mode toggle (remembers preference)
- **Smooth Animations**: Framer Motion for page transitions and micro-interactions
- **SEO Optimized**: Comprehensive meta tags and JSON-LD schema
- **Accessible**: WCAG AA compliant with keyboard navigation support
- **Performance**: Code-split routes and lazy-loaded images

## 🛠 Tech Stack

- **Framework**: React 18 + Vite + TypeScript
- **Styling**: Tailwind CSS with custom design system
- **Animations**: Framer Motion for smooth transitions
- **Forms**: React Hook Form + Zod validation
- **Routing**: React Router DOM
- **Icons**: Lucide React
- **Build Tool**: Vite

## 📁 Project Structure

```
src/
├── components/
│   ├── ui/                 # Reusable UI components
│   ├── sections/           # Page sections (Hero, About, etc.)
│   └── layout/             # Layout components (Header, Footer)
├── pages/                  # Route components
├── content/                # Site content and configuration
├── hooks/                  # Custom React hooks
├── lib/                    # Utilities and helpers
├── types/                  # TypeScript type definitions
└── main.tsx               # Application entry point
```

## 🎨 Design System

### Colors
- **Primary**: Aviation blue (#0ea5e9)
- **Secondary**: Teal (#14b8a6) 
- **Accent**: Orange (#f97316)
- **Success/Warning/Error**: Standard semantic colors

### Typography
- **Primary**: Inter (headings and body text)
- **Monospace**: JetBrains Mono (code and technical content)

### Components
- **Cards**: Glassmorphism with backdrop blur
- **Buttons**: Magnetic hover effects with spring animations
- **Badges**: Rounded with semantic color variants
- **Sections**: Scroll-triggered animations with staggered reveals

## 🚀 Getting Started

### Prerequisites
- Node.js 16+ and npm

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd portfolio-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

5. **Preview production build**
   ```bash
   npm run preview
   ```

## 📝 Content Management

All content is centralized in `src/content/site.ts` for easy editing:

- Personal information (name, title, contact details)
- Hero section content
- About section (bio, stats, highlights)
- Experience timeline
- Project portfolio
- Skills and certifications
- Social media links

## 🎯 Key Sections

### Hero
- Parallax SVG aircraft illustration
- Animated gradient background
- Call-to-action buttons with magnetic hover

### About
- Personal bio and expertise highlights
- Animated statistics counters
- Professional portrait placeholder

### Experience
- Interactive timeline layout
- Pakistan Aeronautical Complex internship details
- Achievement highlights and tags

### Projects
- Grid layout with hover effects
- Individual project detail pages
- Technology stack showcases

### Skills
- Animated progress bars
- Categorized skill groups
- Certification cards

### Contact
- React Hook Form with validation
- Mock API integration (ready for real backend)
- Social media links
- Response time guarantee

## 🔧 Customization

### Colors
Edit `tailwind.config.js` to update the color palette:

```javascript
colors: {
  primary: { /* your primary colors */ },
  secondary: { /* your secondary colors */ },
  accent: { /* your accent colors */ }
}
```

### Content
Update `src/content/site.ts` with your:
- Personal information
- Experience details
- Project portfolio
- Skills and certifications

### Images
- Replace placeholder images in the public directory
- Update image paths in the content configuration
- Add your professional portrait and project screenshots

## 📱 Responsive Design

- **Mobile**: < 768px - Single column layout
- **Tablet**: 768px - 1024px - Adapted grid systems  
- **Desktop**: > 1024px - Full multi-column layouts

## ♿ Accessibility

- Semantic HTML structure
- ARIA labels and landmarks
- Keyboard navigation support
- High contrast color ratios
- Screen reader compatibility
- Focus indicators
- Reduced motion support

## 🔍 SEO Features

- Comprehensive meta tags
- Open Graph and Twitter Card tags
- JSON-LD structured data
- Semantic HTML structure
- Descriptive alt text
- Proper heading hierarchy

## 📊 Performance

- Code splitting by routes
- Lazy loading for images
- Optimized animations with `prefers-reduced-motion`
- Minimal bundle size with tree shaking
- Service worker ready

## 🚀 Deployment

The site is optimized for deployment on:
- Netlify
- Vercel
- GitHub Pages
- Any static hosting provider

### Build Command
```bash
npm run build
```

### Output Directory
```
dist/
```

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📧 Support

For questions or support, please contact:
- Email: ahmed.hassan@example.com
- LinkedIn: [linkedin.com/in/ahmed-hassan-me](https://linkedin.com/in/ahmed-hassan-me)

---

Built with ❤️ using React, TypeScript, and Tailwind CSS
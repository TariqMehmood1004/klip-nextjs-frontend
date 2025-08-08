### Folder Structure:
```
project-root/
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   └── globals.css
│   ├── components/
│   │   ├── ui/
│   │   │   ├── Button.tsx
│   │   │   └── index.ts
│   │   ├── layout/
│   │   │   ├── Header.tsx
│   │   │   └── Navigation.tsx
│   │   └── sections/
│   │       ├── Hero.tsx
│   │       ├── Features.tsx
│   │       └── Partners.tsx
│   ├── lib/
│   │   └── utils.ts
│   ├── types/
│   │   └── index.ts
│   └── styles/
├── public/
│   ├── images/
│   └── icons/
├── README.md
├── AI_USAGE.md
└── package.json
```

# Klip Web Application

A responsive, production-ready Next.js 14+ application built with Tailwind CSS, optimized image handling, and animations for testimonial sections.

---

## 1. Setup & Installation

### Prerequisites
- **Node.js** v18+
- **npm** or **yarn** package manager
- Git (optional, for version control)

### Steps
```bash
# 1. Clone the repository
git clone https://github.com/TariqMehmood1004/klip-nextjs-frontend.git
cd klip-nextjs-frontend

# 2. Install dependencies
npm install
# or
yarn install

# 3. Run the development server
npm run dev
# or
yarn dev

# 4. Build for production
npm run build
npm run start
````

---

## 2. Technology Choices

| Technology        | Reason for Choice                                                          |
| ----------------- | -------------------------------------------------------------------------- |
| **Next.js 14+**   | Fast, SEO-friendly React framework with built-in routing and optimization. |
| **Tailwind CSS**  | Utility-first CSS framework for rapid, consistent UI development.          |
| **TypeScript**    | Type safety, better developer experience, reduced runtime errors.          |
| **Framer Motion** | Smooth and easy-to-implement animations for testimonials.                  |
| **Next/Image**    | Optimized image delivery and responsive loading.                           |

---

## 3. Figma Design Interpretation

* Followed **exact color palette** and typography from the Figma file.
* Adjusted certain paddings/margins for better visual balance on very small screens.
* Converted static design to fully **responsive** layout using Tailwind’s `flex`, `grid`, and custom breakpoints.

---

## 4. AI Assistance Documentation

* Used **ChatGPT** for generating boilerplate animation logic, fixing Next.js image config updates, and improving Tailwind utility classes.
* AI suggested converting `images.domains` to `images.remotePatterns` for Next.js 14+ compliance.
* AI helped create a scroll-thumb removal snippet and smooth testimonial animations (right-to-left and left-to-right).

---

## 5. Responsive Breakpoints

From Figma design interpretation:

```js
sm: 375px  // Mobile
md: 768px  // Tablet
lg: 1024px // Desktop
xl: 1280px
2xl: 1536px
```

---

## 6. Assumptions

* Some testimonial images in Figma were replaced with placeholder assets from `public/images` for faster loading.
* Font weights and spacing not explicitly defined in Figma were adjusted for readability.
* Hover states on mobile were removed (touch devices).

---

## 7. Known Issues & Limitations

* Some animations may not perform smoothly on low-end mobile devices.
* Next.js `next/image` requires remotePatterns configuration for hosted assets — currently configured for `docuu-vission.vercel.app` only.
* Dark mode is not implemented yet but is planned for a future release.

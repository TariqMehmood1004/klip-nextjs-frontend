```markdown
# AI Usage Report

This file documents how AI tools were used in the development of the **Klip** project.

---

## 1. AI Tools Used

- **ChatGPT (OpenAI GPT-4.1)** — Primary assistant for code generation, debugging, and configuration guidance.
- **GitHub Copilot** — Inline code suggestions and auto-completion within VS Code.

---

## 2. Most Effective Prompts

Examples of prompts used:

1. *"In Next.js 14, how do I replace images.domains with images.remotePatterns for next/image?"*
2. *"Give me Tailwind CSS classes for a green rounded-full button with white text."*
3. *"Animate first testimonial from right-to-left and second from left-to-right using Framer Motion."*
4. *"Remove the scrollbar thumb in Tailwind CSS but keep scroll functionality."*

---

## 3. AI-Generated / Assisted Code Sections

- **`next.config.js`**
  - Conversion from deprecated `images.domains` to `images.remotePatterns`.
- **TestimonialSection Component**
  - Animation logic for alternating entry directions.
- **Global Tailwind Config**
  - Added responsive breakpoints matching Figma design.
- **Button Styling**
  - Tailwind utility classes for green background, white text, rounded full style.

---

## 4. Validation Process

- All AI-generated code was **manually reviewed** and tested locally.
- Build warnings and errors were addressed by iterating with AI suggestions.
- Verified that animation logic worked across Chrome, Firefox, and mobile devices.
- Confirmed `remotePatterns` successfully loaded optimized remote images.

---

## 5. Challenges Where AI Helped

- **Deprecated API Updates**  
  AI guided replacing `images.domains` with `remotePatterns` to maintain compatibility with Next.js 14.
  
- **Scroll Thumb Removal**  
  Suggested a minimal CSS solution that removed the scrollbar thumb without affecting scroll behavior.
  
- **Animation Directions**  
  Provided Framer Motion variants to alternate testimonial entry animations automatically.

---

## 6. Limitations of AI Assistance

- AI occasionally provided **outdated Next.js config syntax**, requiring manual verification in official docs.
- Tailwind class suggestions sometimes conflicted with project-specific design tokens, needing adjustment.
````

---

If you want, I can also add a **Figma-to-code mapping table** in the README so your reviewer can see exactly how each design section translates to the implementation. That would score extra points in a code review.

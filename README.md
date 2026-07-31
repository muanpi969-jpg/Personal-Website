# Pau Muan Tung Hatlang — Personal Portfolio

Welcome to the source code for Pau Muan Tung Hatlang's personal portfolio website: a cinematic, responsive showcase for AI/ML projects, technical capabilities, and contact information.

**Live Demo:** [Insert Live Demo Link Here]

[![Next.js](https://img.shields.io/badge/Next.js-15-black?logo=next.js&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-149eca?logo=react&logoColor=white)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8-3178c6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-06b6d4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-12-ea4c89?logo=framer&logoColor=white)](https://motion.dev/)
[![Three.js](https://img.shields.io/badge/Three.js-0.176-black?logo=threedotjs&logoColor=white)](https://threejs.org/)

## Tech Stack & Features

### Core stack

- **Next.js 15** with the App Router for the application shell, routing, metadata, and production builds.
- **React 19** and **TypeScript 5.8** for component-based UI development with static typing.
- **Tailwind CSS 3.4** with a custom theme for the ink, bone, gold, glass, and typography system.
- **Inter** and **Cormorant Garamond** loaded with `next/font/google` for the sans-serif and editorial display typography.
- **Framer Motion** for entrance reveals, role transitions, animated progress bars, and contact-form state transitions.
- **Three.js** and **React Three Fiber** for the lightweight animated gold-particle field in the hero section.
- **Lucide React** for interface icons and **React Icons** for recognizable technology marks.
- **PostCSS** and **Autoprefixer** for the Tailwind CSS processing pipeline.

### Website features

- Full-screen hero section with an animated role rotator for AI/ML Developer, Software Engineer, and Audio Engineer.
- Dark cinematic visual system with gold accents, glass panels, subtle film grain, radial vignettes, and responsive layouts.
- About section with Pau's portrait, personal background, New Delhi location, and learning journey.
- Selected Work section featuring three deployed applications:
  - Document Q&A — extractive question answering with Transformers.
  - Transformer-Based Text Summarizer — BART/T5 summarization comparison.
  - Smart Video CV Optimizer — two-pass FFmpeg video encoding workflow.
- Project cards with supplied screenshots, live-demo links, descriptions, and technology badges.
- Capabilities section with animated progress bars for Machine Learning & NLP, Languages, Media Processing, and DevOps & Systems.
- Core toolkit strip with Python, PyTorch, Hugging Face, Streamlit, FFmpeg, Docker, Linux, Git, JavaScript, C, NumPy, and Pandas logos.
- Contact section with email, GitHub, LinkedIn, and a client-side simulated success state for the contact form.
- Responsive navigation, accessible focus states, semantic sections, reduced-motion support, and mobile-friendly spacing.
- Static image assets stored in `public/` for the portrait and project previews.

## The Story Behind the Code

I believe in using the best tools available to build efficient software. I originally generated the foundational structure of this website using Codex, an early AI coding agent. Working with this codebase taught me a lot about web structure, debugging, and reading AI-generated code. Since that initial generation, I have manually tweaked and maintained this repository to reflect my growing skill set.

## How to Run Locally

### Prerequisites

- Node.js 18.18 or newer
- npm

### Clone and install

Replace the placeholder repository URL with the URL of your GitHub repository:

```bash
git clone https://github.com/<your-github-username>/<your-repository>.git
cd <your-repository>
npm install
```

### Start the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser. If port `3000` is already in use, Next.js will print the alternate local port in the terminal.

### Create a production build

```bash
npm run build
npm start
```

The portfolio does not currently require environment variables. The contact form is a front-end demo and does not send email until it is connected to a form-processing or email service.

## Contact

- **LinkedIn:** https://www.linkedin.com/in/pau-muan-tung-hatlang-a55968343/
- **Email:** muanpi969@gmail.com

## Project Structure

```text
app/
  globals.css       # Global styles, design tokens, grain effect, and utilities
  layout.tsx        # Fonts, metadata, and root layout
  page.tsx          # Page composition
components/
  Hero.tsx          # Hero, particle field, role rotator, and navigation
  About.tsx         # Personal story and portrait
  Work.tsx          # Featured project cards
  Capabilities.tsx  # Skills, progress bars, and technology marks
  Contact.tsx       # Contact links and simulated form state
  Footer.tsx        # Footer and back-to-top link
public/             # Portrait and project screenshots
```

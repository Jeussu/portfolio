# Do The Vinh - Portfolio Website

A modern, production-ready portfolio website built with Next.js 14+ (App Router), TypeScript, Tailwind CSS, and Framer Motion.

## Features

- **Modern Stack**: Next.js 14, React 18/19, TypeScript, Tailwind CSS v4.
- **Animations**: Subtle entry animations using Framer Motion.
- **Dark Mode**: Fully integrated dark/light theme toggle.
- **Content Management**: All content is managed in `src/lib/data.ts` for easy updates.
- **Case Study**: Detailed architectural deep-dive for H2ALL/FastLink.
- **Upskill Tracker**: Client-side progress tracking using LocalStorage.

## Getting Started

1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **Run Development Server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) to view the site.

3. **Build for Production**:
   ```bash
   npm run build
   npm start
   ```

## Project Structure

- `src/app`: Page routes and layouts.
- `src/components/ui`: Reusable UI components (Button, Card, Badge, etc.).
- `src/components/home`: Components specific to the landing page.
- `src/components/case-study`: Components for the case study pages (TOC, Diagrams).
- `src/lib/data.ts`: Central file for editing profile info, projects, and skills.

## Customization

- **Colors**: Edit `src/app/globals.css` to adjust CSS variables for themes.
- **Content**: Update `src/lib/data.ts` to change text content without touching components.

# Do The Vinh Portfolio

Case-study-led portfolio for Do The Vinh, a .NET Backend Developer focused on ERP and logistics systems, reporting, reconciliation, and backend growth built on enterprise production experience. The site is centered on the H2ALL / FastLink case study, with supporting project, experience, and contact pages around it.

## Live Demo

[vinh-portfolio-self.vercel.app](https://vinh-portfolio-self.vercel.app/)

## Highlights

- Built to position a backend-oriented .NET profile, not as a general design showcase.
- Features a flagship H2ALL / FastLink case study for enterprise ERP and logistics work.
- Includes supporting pages for projects, experience, backend-growth direction, and contact.
- Keeps most shared profile content centralized while leaving longer narrative sections close to their routes.

## Tech Stack

- Next.js 16.1.1 with the App Router
- React 19.2.3
- TypeScript 5.9.3
- Tailwind CSS 4
- Framer Motion
- `next-themes`, `lucide-react`, `@radix-ui/react-slot`, `class-variance-authority`

## Getting Started

Node `20.10.0` is configured in `.nvmrc` and `.node-version`.

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

For a production build:

```bash
npm run build
npm start
```

## Project Structure

- `src/app` - App Router pages, layout, metadata, sitemap, robots, and global styles
- `src/app/case-studies/h2all-fastlink/page.tsx` - flagship case study route
- `src/components/home` - home page sections
- `src/components/case-study` - case study UI pieces such as the architecture diagram and table of contents
- `src/components/layout` - navbar and footer
- `src/components/projects` - project listing UI
- `src/components/upskill` - backend-growth page content
- `src/lib/data.ts` - shared profile, metrics, skills, projects, experience, certificates, and backend-growth data
- `public/images` - avatar and certificate assets

## Updating Content

- Start with `src/lib/data.ts` for profile details, metrics, skills, projects, experience, certificates, and backend-growth content.
- Update `src/app/case-studies/h2all-fastlink/page.tsx` for the main H2ALL / FastLink narrative and section-level copy.
- Update `src/components/home` if the home page emphasis or supporting summaries need to change.
- Update `src/app/layout.tsx` for site-wide metadata, and `src/components/layout` for navigation or footer copy.

## Notes

- Shared content is mostly centralized, but not all copy is data-driven from a single file.
- The H2ALL / FastLink route currently owns most of its narrative content directly in the page.
- Styling tokens and theme colors are defined in `src/app/globals.css`.

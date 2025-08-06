# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a React-based company website for Block Software Inc., built with modern web technologies. The site showcases software development services through a clean, professional interface with three main service areas: Web Applications, Software Development, and Web3 Development.

## Development Commands

**Start development server:**
```bash
npm run dev
```

**Build for production:**
```bash
npm run build
```

**Run linting:**
```bash
npm run lint
```

**Preview production build:**
```bash
npm run preview
```

**Deploy to Cloudflare Pages:**
```bash
npm run deploy
```

## Architecture

**Framework Stack:**
- React 18 with TypeScript
- React Router v6 for client-side routing
- Vite as build tool
- CSS modules with modern CSS features
- ESLint for code quality

**Project Structure:**
- `/src/components/` - Reusable UI components (Navbar, Footer)
- `/src/pages/` - Route-specific page components
- `/src/data/` - Static data and configuration
- `/src/assets/` - Images and static assets
- `/public/` - Public assets served directly

**Key Patterns:**
- Component-based architecture with CSS co-location
- React Icons for consistent iconography
- Link components from React Router for navigation
- Service data centralized in `/src/data/services.ts`
- Mobile-first responsive design

**Deployment:**
- Built for Cloudflare Pages deployment
- Includes Cloudflare Workers types
- Uses Wrangler CLI for deployment automation

**Styling Approach:**
- Individual CSS files per component
- CSS custom properties for theming
- Gradient backgrounds and card-based layouts
- Mobile-responsive navigation with hamburger menu

## Service Data Structure

The site's services are defined in `src/data/services.ts` with a standardized structure including title, description, details array, technologies array, and color scheme. This data is consumed by both the homepage service cards and the detailed services page.
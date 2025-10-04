# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal developer portfolio website for 운구름 (wooncloud). It's a SvelteKit application showcasing the developer's profile, social links, tech stack, career, and projects.

## Commands

### Development
```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
```

### Code Quality
```bash
npm run check        # Type check with svelte-check
npm run check:watch  # Type check in watch mode
npm run format       # Format code with Prettier
```

## Architecture

### Core Stack
- **Framework**: SvelteKit with Vite
- **Styling**: Tailwind CSS with custom HSL-based theming
- **UI Components**: Custom component library using bits-ui and lucide-svelte icons
- **Dark Mode**: mode-watcher for theme switching

### Project Structure
- `src/routes/+layout.svelte` - Root layout with dark mode support, max-width 445px mobile-first design
- `src/routes/+page.svelte` - Main page displaying grouped link cards
- `src/routes/Header.svelte` - Header with avatar, dark mode toggle, and share functionality
- `src/lib/components/ui/` - Reusable UI components (Avatar, Button, Card, Separator)
- `src/lib/data/links.js` - Centralized link data with groups (wooncloud, project, dosiowl)
- `src/lib/utils.js` - Utility functions including `cn()` for class merging and `flyAndScale` animation

### Theming System
The app uses CSS custom properties for theming with HSL values:
- Colors defined in `tailwind.config.js` reference HSL variables (e.g., `hsl(var(--background) / <alpha-value>)`)
- Dark mode implemented via class-based strategy
- Border radius controlled by `--radius` variable

### Link Management
Links are organized by groups using a data-driven approach:
- Groups defined in `src/lib/data/links.js` with id, name, description
- Each link has: id, url, icon (Lucide component), label, ariaLabel, group
- `getLinksByGroup()` function filters and organizes links by group, removing empty groups

### Component Patterns
- UI components follow a consistent index.js export pattern
- Cards use backdrop-blur and semi-transparent backgrounds
- Buttons have hover scale animations and custom border styling
- Avatar component wraps logo with fallback support

### Styling Approach
- Mix of Tailwind utility classes and scoped `<style>` blocks
- Performance optimization with GPU acceleration (`transform: translateZ(0)`, `will-change: transform`)
- Mobile-first design with max-width container centered layout

# AGENTS.md - Developer Guide for porfolio-lite

## Build/Lint/Test Commands
- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build production bundle
- `npm run start` - Start production server  
- `npm run lint` - Run ESLint checks
- No test framework configured

## Code Style Guidelines
- **Language**: TypeScript with strict mode enabled
- **Framework**: Next.js 15+ with App Router, React 19
- **Styling**: Tailwind CSS with custom Apple Garamond font
- **Imports**: Use `@/*` path aliases, group external then internal imports
- **Components**: Use function declarations, PascalCase naming
- **Props**: Define inline prop types with destructuring parameters
- **State**: Use `useState` for client components, mark with `"use client"`
- **TypeScript**: Export types with `type` keyword, use `Readonly<>` for props
- **Naming**: camelCase for variables/functions, kebab-case for CSS classes
- **Files**: `.tsx` for components, use descriptive names
- **Error Handling**: Use optional chaining and nullish coalescing
- **Comments**: Minimal comments, prefer self-documenting code

## Project Structure
- Components in `src/app/` following App Router conventions
- Public assets in `public/` directory
- Custom fonts in `public/fonts/AppleGarmondFonts/`
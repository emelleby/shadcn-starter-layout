# Project Structure

## Root Directory
- `src/` - Main application source code
- `public/` - Static assets served directly
- Configuration files: `vite.config.ts`, `tailwind.config.js`, `tsconfig.json`
- Package management: `package.json`, `package-lock.json`

## Source Structure (`src/`)

```
src/
├── components/          # Reusable UI components
│   ├── ui/             # shadcn/ui components (auto-generated)
│   └── theme/          # Theme-related components
├── hooks/              # Custom React hooks
├── layouts/            # Layout components
├── lib/                # Utility functions and configurations
├── pages/              # Page components organized by feature
│   └── Documentation/  # Feature-specific page groupings
├── App.tsx             # Main app component with routing
├── main.tsx            # React app entry point
└── index.css           # Global styles and CSS variables
```

## Component Organization
- **UI Components** (`src/components/ui/`) - Auto-generated shadcn/ui components, avoid manual edits
- **Custom Components** (`src/components/`) - Project-specific reusable components
- **Theme Components** (`src/components/theme/`) - Theme provider and toggle functionality
- **Page Components** (`src/pages/`) - Route-level components, organized by feature/section

## File Naming Conventions
- Components: PascalCase (e.g., `ThemeProvider.tsx`)
- Utilities: camelCase (e.g., `utils.ts`)
- Hooks: camelCase with `use` prefix (e.g., `use-mobile.tsx`)
- Pages: PascalCase, often matching route structure

## Import Patterns
- Use path aliases: `@/components`, `@/lib`, `@/hooks`
- Import shadcn/ui components from `@/components/ui`
- Group imports: external libraries first, then internal modules
- Use named exports for utilities, default exports for components
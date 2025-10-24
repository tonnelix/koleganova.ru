# koleganova.ru

Single-page HR portfolio built with React 18 + TypeScript. Vite handles the build, Tailwind CSS provides styling, and shadcn UI components render cards, buttons, and badges.

## Technologies

- React 18, React Router DOM 6, TanStack Query 5
- TypeScript with relaxed strictness
- Tailwind CSS with custom tokens in `src/index.css`
- shadcn UI component set in `src/components/ui`
- Vite 5 with the `lovable-tagger` plugin enabled only in development

## Quick Start

```bash
npm install
npm run dev      # port 8080, listening on IPv6 ::
npm run build
npm run lint
npm run preview
```

## Structure

- `src/App.tsx` wraps Query Client, Tooltip, Toaster, and Router providers.
- `src/pages/Index.tsx` composes the screen from `Hero`, `Achievements`, `Experience`, `Skills`, `PublicActivity`, `Education`, `Footer`.
- `src/components/` stores section data in arrays and maps them to UI (see `Experience.tsx`).
- `src/components/ui/` contains generated shadcn components; avoid editing unless necessary.
- `src/assets/` holds static files imported via the `@` alias.

## Development Guidelines

- Place new sections in `src/components/` and wire them into the relevant pages.
- Declare new Tailwind colors as HSL CSS variables in `src/index.css`, then expose them through `tailwind.config.ts`.
- Keep the `console.error` side effect in `src/pages/NotFound.tsx`; it feeds telemetry.

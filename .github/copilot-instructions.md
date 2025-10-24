**Overview**

- Single-page Vite + React 18 app; `src/App.tsx` wraps `QueryClientProvider`, `TooltipProvider`, `Toaster`, and `BrowserRouter`, then renders `Index` and a `NotFound` catch-all.
- Content lives in Russian; keep tone and language consistent with existing copy when expanding sections.

**Routing & Pages**

- Add new top-level screens under `src/pages/` and register them in `App.tsx` above the `"*"` route; reuse `<Index />` composition pattern to stitch section components together.
- `NotFound.tsx` intentionally logs a console error for telemetry—preserve that side effect when touching the 404 flow.

**Section Components**

- Section blocks under `src/components/` are data-driven: arrays of objects feed maps into shadcn `<Card>`/`<Badge>` components (e.g. `Experience.tsx`, `PublicActivity.tsx`). Follow that structure instead of hardcoding repeated markup.
- Iconography comes from `lucide-react`; import icons directly and render inside branded wrappers (e.g. gradient circles). Keep accessibility attributes (`aria-label`, `alt`) and external link safeguards.

**Styling System**

- Tailwind is configured with CSS variables in `src/index.css`; define new theme tokens as HSL values there, then expose via `tailwind.config.ts` before using classes like `bg-gradient-primary` or `shadow-elegant`.
- Use the `container` utility and spacing rhythm already in place (`py-20`, `max-w-6xl`, `gap-*`) to maintain layout consistency.

**UI Toolkit**

- Reuse shadcn components from `src/components/ui/` (Button, Card, Badge, etc.); compose them without altering their generated props unless updating the shared component.
- Shared helpers live in `src/lib/utils.ts` (`cn`) and `src/hooks/use-mobile.tsx`; prefer those over duplicating utility logic.

**Assets & Media**

- Static imagery sits in `src/assets/` and is imported via the Vite alias `@`; keep filenames kebab-case and colocate related assets with the section that uses them.
- Maintain responsive behaviour (e.g. `flex-col md:flex-row`) and ensure new media maintains the rounded-gradient treatment used in `Hero.tsx`.

**Tooling & Workflows**

- Install deps with `npm install`; use `npm run dev` (port 8080, IPv6-ready), `npm run build`, and `npm run lint` (ESLint config at `eslint.config.js`).
- Development mode enables the `lovable-tagger` plugin from `vite.config.ts`; keep it behind the `mode === "development"` guard if adjusting plugins.

**TypeScript & Linting**

- The project opts out of strict TS checks (see `tsconfig.app.json`); match existing `any`/partial typing patterns instead of forcing strictness in isolated files.
- ESLint disables `@typescript-eslint/no-unused-vars`; rely on actual usage cleanup rather than re-enabling the rule locally unless ready to update the config.

**Testing & Verification**

- No automated tests exist; manual verification involves running `npm run dev`, checking responsive breakpoints, and confirming toast/tooltip providers still mount without runtime errors.
- When altering global styles, rebuild (`npm run build`) to ensure Tailwind purging still retains the new utility classes.

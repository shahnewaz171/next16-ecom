# Next.js 16 E-Commerce

A demo e-commerce app I built to explore Next.js 16 features like Partial Pre-Rendering, the React Compiler, and Tailwind CSS v4. It's not a real store — just a playground to try out modern patterns.

## What's in here

- **Next.js 16.1** with Turbopack and typed routes
- **React Compiler** enabled out of the box
- Dark/light theme that persists across sessions
- Product listing with category filters, search, sorting, and pagination
- Product detail pages with breadcrumb nav and related products
- User profile page (protected route)
- Login & signup pages with form validation
- Shopping cart with drawer UI
- Framer Motion animations
- Fully responsive — works on mobile

## Getting started

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

To build for production:

```bash
pnpm build
pnpm start
```

## Scripts

| Command | What it does |
|---|---|
| `pnpm dev` | Start dev server |
| `pnpm build` | Production build |
| `pnpm start` | Serve production build |
| `pnpm lint` | Run linter |
| `pnpm lint:fix` | Auto-fix lint issues |
| `pnpm format` | Format code |
| `pnpm analyze` | Analyze bundle size |

## Project structure

```
app/
  (public)/         → Public pages (home, products, login, register)
  (private)/        → Protected pages (profile)
components/         → Shared UI components (Button, Card, Badge, etc.)
features/           → Feature modules (products, auth, user)
store/              → Cart context
layouts/            → Navbar, Footer, TopSearchBar (now in components/layouts)
utils/              → Helpers
types/              → TypeScript types
```

Route protection is handled in `proxy.ts` (Next.js 16 middleware).

## Notes

- No real backend — data is mocked with simulated delays
- Auth is cookie-based for demo purposes (no real passwords)
- The project uses `typedRoutes: true` so routes are type-checked at build time

## License

For learning and experimentation. Use however you like.

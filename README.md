# Next.js 16 E-Commerce

A demo e-commerce app I built to explore Next.js 16 features like Partial Pre-Rendering, the React Compiler, parallel/intercepting routes, and a full test setup with Vitest + Playwright.

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


## Notes

- No real backend — data is mocked with simulated delays
- Auth is cookie-based for demo purposes (no real passwords)
- The project uses `typedRoutes: true` so routes are type-checked at build time

## License

For learning and experimentation. Use however you like.

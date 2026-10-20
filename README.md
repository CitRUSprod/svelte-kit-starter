# SvelteKit Starter

### Get started

> **NOTE:** Before using this template, you need to install `pnpm`.

Create a new project based on this template using `degit`:

```sh
pnpx degit CitRUSprod/svelte-kit-starter my-app
cd my-app
pnpm i
```

Run in development mode:

```sh
pnpm dev
```

Build and run in production mode:

```sh
pnpm build
pnpm start
```

Link: http://localhost:6400

### Tools

Commit with `commitizen`:

```sh
pnpm commit
```

Check types with `svelte-check`:

```sh
pnpm check-types
```

Lint with `prettier`, `stylelint` and `eslint`:

```sh
pnpm lint
```

Format with `prettier`, `stylelint` and `eslint`:

```sh
pnpm format
```

Check types and lint:

```sh
pnpm validate
```

### CI

GitHub Actions (`.github/workflows/check.yml`) runs on every push and executes:

1. Installing dependencies (`pnpm i`)
2. Building the project (`pnpm build` — adapter-node)
3. Full check (`pnpm validate` — types + linting)

### Deployment

Deployment is handled by Netlify (`netlify.toml`), not GitHub Actions. Netlify runs `pnpm build:auto` (adapter-auto) and publishes the `build` directory. Note that CI builds with adapter-node, so it does not verify the exact build used in production.

### Environment variables

All environment variables are written to the `.env` file. If it doesn't exist, just enter this command:

```sh
cp .env.example .env
```

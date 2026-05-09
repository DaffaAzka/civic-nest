# CivicNest

A fullstack residence management app for RT/RW administrators built with React Router v7.

## Stack

- **React Router v7** — Framework Mode (fullstack, SSR)
- **TypeScript** — strict mode
- **Prisma ORM** — PostgreSQL (local) 
- **BetterAuth v1.6** — authentication 
- **Tailwind CSS + shadcn/ui** — Radix
- **Zod** — schema validation

## Prerequisites

- Node.js 20+
- PostgreSQL (local) or a Supabase project

## Getting Started

```bash
# Install dependencies
npm install

# Set up environment variables
cp .env.example .env

# Run database migrations
npx prisma migrate dev

# Seed the database
npx prisma db seed

# Start the dev server
npm run dev
```


## Project Structure

```
app/
├── routes/          # Pages file routing
├── features/        # Components per pages
├── services/        # All business logic and Prisma calls
├── middleware/      # Auth guards and role checks
├── validators/      # Zod schemas
├── components/
│   ├── custom/      # custom components
│   └── ui/          # default shadcn components
└── utils/           # Server-only utilities (db, auth, errors)
```

## Scripts

```bash
npm run dev        # Start dev server
npm run build      # Production build
npm run start      # Start production server
npm run typecheck  # TypeScript check
npx prisma studio  # Open Prisma Studio
```

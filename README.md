# NOVEXA

NOVEXA is a web-based investment platform built with:

- HTML
- CSS
- JavaScript
- Vite
- Supabase
- PostgreSQL
- Supabase Authentication
- Supabase Row Level Security
- Vercel

## Core Architecture

The frontend is responsible for displaying information and requesting authorized operations.

Financial operations must be controlled by trusted backend/database infrastructure.

The browser must never be trusted to determine:

- User balances
- Investment earnings
- Withdrawal authorization
- Financial transaction amounts
- Administrative permissions

## Midnight Earnings

NOVEXA daily investment income is processed at midnight according to the official NOVEXA business timezone.

The earning engine must operate independently of:

- Browser activity
- Page loading
- JavaScript timers
- LocalStorage
- SessionStorage
- User refreshes

The database must prevent duplicate earnings for the same investment and earning date.

## Development

Install dependencies:

npm install

Start development server:

npm run dev

Build production files:

npm run build

Preview production build:

npm run preview

## Environment Variables

Create a `.env` file based on `.env.example`.

Required public Supabase configuration:

VITE_SUPABASE_URL=
VITE_SUPABASE_ANON_KEY=

Never expose a Supabase service-role key in frontend code.

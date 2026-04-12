# MOB FT 2026 - Web ET

Professional Educational Trip (ET) application for the **Masa Orientasi Bersama (MOB) FT 2026** at Universitas Surabaya.

## 📌 Overview

**Web ET** is a specialized sub-application within the MOB FT 2026 ecosystem designed to facilitate interactive learning and tracking during the Educational Trip session. It manages QR code-based validation, session-based questions, and real-time participation tracking.

### Core Responsibilities

- **Interactive Learning**: Serves categorized questions and manages randomized question orders for participants.
- **QR Code System**: Provides a mechanism for location validation using QR codes across various buildings.
- **Participation Tracking**: Persists student answers and participation history to ensure objective evaluation.
- **SSO Integration**: Works seamlessly with Web Utama for unified authentication.

---

## 🛠️ Tech Stack & Tooling

| Category      | Technology                                            |
| :------------ | :---------------------------------------------------- |
| **Framework** | Next.js 16 (App Router + Turbopack)                   |
| **Styling**   | Tailwind CSS v4 + DaisyUI v5 Components               |
| **Database**  | MySQL                                                 |
| **ORM**       | Drizzle ORM                                           |
| **Auth**      | NextAuth.js (Session synchronization via Web Utama)   |
| **Quality**   | ESLint, Prettier, TypeScript (Strict)                 |
| **Workflow**  | Husky, Lint-Staged, Commitlint (Conventional Commits) |

---

## 🚀 Getting Started

### Prerequisites

- **Node.js**: >= 20.x
- **Package Manager**: npm
- **Database**: MySQL Server (Local or Dockerized)
- **Editor**: VS Code, Antigravity (Recommended Extensions: Tailwind CSS IntelliSense, Prettier, ESLint)

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/Beyolandr7/MOBFT26-WebET.git
   cd MOBFT26-WebET
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Environment Setup:**
   Copy the example environment file and configure your local variables:

   ```bash
   cp .env.example .env
   ```

   Modify `.env` and provide valid values for:
   - `DATABASE_URL`
   - `NEXTAUTH_SECRET` (Generate using `openssl rand -base64 32`)

4. **Initialize Husky Hooks:**

   ```bash
   npm run prepare
   ```

5. **Run Development Server:**
   ```bash
   npm run dev
   ```
   The application will be available at [http://localhost:3000](http://localhost:3000).

---

## 📜 Available Scripts

- `npm run dev`: Starts the development server with Hot Module Replacement.
- `npm run build`: Generates the production build.
- `npm run start`: Starts the production server.
- `npm run typecheck`: Performs full static type checking with TypeScript.
- `npm run format`: Auto-fixes formatting across the entire project using Prettier.
- **Database Commands**:
  - `npm run db:generate`: Generates SQL migration files from Drizzle schema.
  - `npm run db:push`: Pushes schema changes directly to the database.
  - `npm run db:migrate`: Executes pending SQL migrations.
  - `npm run db:studio`: Opens Drizzle Studio for visual database management.
  - `npm run db:seed`: Seeds the database with initial study data or student records.

---

## 🏗️ Development Workflow

### Conventions

- **Language**: Source code and comments are in **English**. UI content is in **Bahasa Indonesia**.
- **Naming**:
  - `camelCase`: Functions, variables, and hooks.
  - `PascalCase`: React components and Types.
  - `kebab-case`: File and directory names.
  - `snake_case`: MySQL table and column names.

### Git Strategy

- **Branches**: `feat/*`, `fix/*`, `chore/*`, `refactor/*`.
- **Commits**: Follow [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) format.
- **Pre-commit**: The system automatically runs `lint-staged` which executes Prettier and ESLint on staged files.

---

## 📚 References & Documentation

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS v4](https://tailwindcss.com/)
- [DaisyUI v5 Components](https://daisyui.com/)
- [Drizzle ORM](https://orm.drizzle.team/docs/overview)
- [NextAuth.js](https://next-auth.js.org/getting-started/introduction)

---

Developed with 🤎 by **KOORWA ITD MOB FT 2026**.

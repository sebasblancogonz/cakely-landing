---
name: project_structure
description: Key file paths, auth patterns, DB schema facts, and component architecture in the Cakely dashboard
type: project
---

## Auth & Login

- Login page: `app/login/page.tsx` — client component, warm artisanal design (`bg-[#FFF8F0]`, Playfair font, `rounded-full` buttons in `#8B9E7E`)
- Register page: `app/register/page.tsx` — mirrors login page design exactly
- Auth pages live at `app/auth/` (verified, verify-notice, denied, error)
- NextAuth config: `lib/auth.tsx` — only Google provider currently; no Credentials provider yet (must be added for email/password)
- `signIn('credentials', { redirect: false })` error codes: `'EmailNotVerified'`, `'CredentialsSignin'`

## DB Schema (Drizzle)

- `users` table: `lib/db/schemas.ts` — does NOT have a `password` column in the current schema. Must be added via migration before email/password auth works.
- Customer data is encrypted (name, email, phone, notes)

## Settings Page

- `app/(dashboard)/ajustes/page.tsx` — IS a client component (not server), uses `useSession` for all data
- `hasPassword` is fetched via `GET /api/user/has-password` from within the client component's `useEffect`
- `UserProfileSettings` at `components/settings/UserProfileSettings.tsx` — accepts `hasPassword: boolean` prop

## Component Conventions

- `@/components/icons.tsx` — exports `Google` with `{white?: boolean}` prop
- `useToast` from `@/hooks/use-toast`
- `cn()` from `@/lib/utils`
- Sub-components that are tightly coupled to a parent are defined in the same file (e.g., `CreatePasswordForm`, `ChangePasswordForm` inside `UserProfileSettings.tsx`)

## API Routes to implement (backend not done yet)

- `POST /api/auth/signup` — create user with hashed password; returns 201 on success, 409 on duplicate email
- `POST /api/user/password` — create or update password; body `{ newPassword, confirmPassword, currentPassword? }`; returns 400 if current password is wrong
- `GET /api/user/has-password` — returns `{ hasPassword: boolean }`

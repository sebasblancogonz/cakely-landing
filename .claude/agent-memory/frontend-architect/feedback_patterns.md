---
name: feedback_patterns
description: Confirmed coding conventions and design patterns used consistently across the codebase
type: feedback
---

## Design System (Login/Register/Auth pages)

Warm artisanal design for all auth pages:
- Background: `bg-[#FFF8F0] texture-grain`
- Card: `bg-[#FFFDF9] rounded-[1.5rem] border border-[#E8DDD0]/60 shadow-warm-xl`
- Headings: `font-playfair text-[#3D2519]`
- Primary button: `bg-[#8B9E7E] hover:bg-[#6B7F5E] rounded-full`
- Muted text: `text-[#5C3D2E]/70`
- Links: `text-[#8B9E7E] hover:text-[#6B7F5E]`
- Input styling: `border-[#E8DDD0] bg-[#FAF0E6]/50 rounded-xl focus-visible:ring-[#8B9E7E]/40`
- Blobs: `blob-1/2/3 animate-float/animate-float-slow` (CSS utilities in globals.css)

## Form Patterns

- Always use React Hook Form + Zod with `zodResolver`
- Inline error messages: `<p className="text-xs text-destructive">`
- Auth error banners: `rounded-xl bg-destructive/10 border border-destructive/20 px-4 py-3`
- Password fields always include eye toggle button (Eye/EyeOff from lucide-react)
- Password requirements shown as animated dot list when field has value
- Success states use `CheckCircle` icon from lucide-react in a soft colored circle

## Tab Toggle Pattern (auth pages)

No shadcn Tabs — use two pill buttons inside a `bg-[#FAF0E6] rounded-full` container:
- Active: `bg-white text-[#3D2519] shadow-sm border border-[#E8DDD0]/60`
- Inactive: `text-[#5C3D2E]/70 hover:text-[#5C3D2E]`

## Settings Components

- Password sub-forms split into `CreatePasswordForm` and `ChangePasswordForm` co-located in `UserProfileSettings.tsx`
- The outer `UserProfileSettings` wraps everything in a `<div className="space-y-6">` containing multiple `Card` elements
- **Why:** Keeps the file under ~150 lines per "section" while staying in one file since the sub-forms are tightly coupled

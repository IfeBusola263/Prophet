# Prophet Web Design Modernization Plan (Next.js)

## 1. Executive Summary
Modernize Prophet’s web UI for better visual hierarchy, smoother interactions, responsive layout, and improved accessibility using a design system-driven approach with Tailwind CSS and shadcn/ui.

---

## 2. Design Principles
- **Consistency:** Use repeatable design tokens and components
- **Clarity:** Simplify user flows and data density
- **Responsiveness:** Mobile-first with adaptive breakpoints
- **Accessibility:** WCAG-compliant visuals, full keyboard nav

---

## 3. Technical Architecture
- **Tailwind CSS:** Utility-first styling with design tokens
- **shadcn/ui:** Component primitives with themeable variants
- **react-hook-form:** Form state & validation
- **react-dropzone:** Drag-and-drop uploads
- **react-hot-toast:** Feedback system
- **lucide-react:** Icon system

---

## 4. Implementation Steps (Week-by-Week)

### 🟢 Phase 1 - Foundation
1. **Create Design Tokens (tailwind.config.ts)**
   - Define `primary`, `secondary`, `neutral`, `error`, `success`
   - Typography scale: `text-xs` to `text-3xl`, `font-medium`/`semibold`
   - 4pt spacing scale: `p-1`, `p-2`, ..., `p-6`
   - Dark mode toggle with Tailwind strategy

2. **Create Base Components in `components/ui/`**
   - Button (variants: primary, outline, ghost)
   - Input + Textarea (states: default, focus, error, disabled)
   - Card
   - Spinner
   - Modal

### 🟡 Phase 2 - High-Impact Components
3. **Modernize `FileUploader.tsx`**
   - Replace input with drag-and-drop using `react-dropzone`
   - Add drag hover state, animated progress bar
   - Add file type icons (CSV/XLSX)

4. **Refactor `EmailEditor.tsx`**
   - Replace toolbar with minimal rich editor (react-quill theme override)
   - Add formatting shortcuts (cmd+b, etc.)
   - Add placeholder text guidance

5. **Redesign Campaign Dashboard**
   - Grid layout with `CampaignCard`
   - Status tags (draft, scheduled, sent) with badge variants
   - Add sort + filter controls (dropdowns)

6. **Rebuild Navigation Header**
   - Responsive sidebar using `shadcn/ui` Sheet
   - Logo, links, profile dropdown
   - Toggle dark/light theme

### 🟠 Phase 3 - Interactions + Data
7. **Upgrade `ContactTable.tsx`**
   - Virtualized list with react-virtual or tanstack table
   - Search bar with fuzzy search
   - Checkbox select + bulk delete

8. **Build Campaign Scheduler UI**
   - Calendar + time picker (shadcn date picker)
   - Clear time zone indicators
   - Validation for future-only dates

9. **Upgrade Analytics (`StatsWidget.tsx`)**
   - Line/bar charts for open/click/bounce
   - Weekly/monthly toggle
   - Tooltips on hover

10. **Form Validation Feedback**
   - Use `react-hook-form` + `zod`
   - Show inline errors and summary toasts

### 🔵 Phase 4 - Polish + Optimization
11. **Micro-Interactions**
   - Hover, active, and skeleton loading states
   - Animate transitions between routes

12. **Responsive Breakpoints**
   - Tailwind breakpoints for nav collapse, cards to list stack

13. **Accessibility Audit**
   - Use Axe DevTools
   - Keyboard tab order for all interactive components

14. **Performance Enhancements**
   - Lazy load analytics + editor components
   - Debounced search
   - Optimize image previews (next/image)

---

## 5. Resource Requirements
- shadcn/ui, TailwindCSS, react-hook-form, react-dropzone
- Figma design file for final UI mockups
- Developer with React + Tailwind fluency

---

## 6. Success Metrics
- 🟢 100% Lighthouse accessibility + performance
- 🔄 Reduced file upload drop-off rate
- 📈 Improved analytics usage
- 🎯 Positive user testing feedback (clarity + speed)

---

✅ Let me know when you're ready to generate the React Native version (`mobile_design.md`)

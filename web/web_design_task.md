# Web UI Modernization Task List (Prophet - Next.js)

## 🟢 Phase 1 - Foundation Setup

1. **Define Tailwind Design Tokens**
   - Add to `tailwind.config.ts`: custom color palette (primary, secondary, neutral)
   - Define spacing scale (4pt system)
   - Add font sizes, weights, and responsive breakpoints
   
2. **Enable Dark Mode Support**
   - Configure Tailwind for class-based dark mode
   - Add `dark:` variants to base UI components

3. **Create Base UI Components in `/components/ui`**
   - `Button.tsx`: variants (primary, outline, ghost), loading spinner
   - `Input.tsx`, `Textarea.tsx`: include label, error, focus
   - `Card.tsx`: support header/footer slots
   - `Modal.tsx`: responsive modal with transition

4. **Install Core Libraries**
   - `shadcn/ui`, `clsx`, `react-hot-toast`, `lucide-react`, `react-hook-form`, `zod`

---

## 🟡 Phase 2 - High-Impact Components

5. **Redesign File Upload Experience**
   - Replace input with `react-dropzone`
   - Add hover zone, file type icons
   - Animate upload progress

6. **Modernize Email Editor (`EmailEditor.tsx`)**
   - Use `react-quill` with custom toolbar
   - Support keyboard shortcuts
   - Add style presets: heading, quote, code block

7. **Refactor Dashboard Layout**
   - Convert `/app/page.tsx` to card-based layout
   - Use `CampaignCard.tsx` with color-coded status
   - Add action buttons per card

8. **Rebuild Navigation + Header**
   - Add `Sidebar.tsx` using `Sheet` from shadcn/ui
   - Add responsive collapse for mobile
   - Include theme toggle, profile dropdown

---

## 🟠 Phase 3 - Data & Feedback Components

9. **Enhance Contact Table**
   - Integrate `@tanstack/react-table`
   - Add fuzzy search, filter by status
   - Enable bulk select + delete

10. **Implement Campaign Scheduler UI**
   - Date picker + time picker from shadcn/ui
   - Input validation: prevent past dates
   - Save UTC + user local

11. **Modernize Analytics Charts**
   - Use `recharts` or `@nivo/bar`
   - Create toggles for open/click/bounce
   - Add download/CSV export option

12. **Upgrade Form Feedback System**
   - Integrate `react-hook-form` + `zod`
   - Inline field error + `react-hot-toast` summary feedback

---

## 🔵 Phase 4 - Polish & Final Testing

13. **Add Skeleton Loaders**
   - Implement Tailwind-based skeletons for dashboard/cards/tables

14. **Apply Micro-Interactions**
   - Animate hover, button press, sidebar open/close
   - Add transition between page routes

15. **Accessibility Testing**
   - Run Axe DevTools
   - Add ARIA labels, test tab order on keyboard

16. **Performance Checks**
   - Lazy-load charts and editor
   - Optimize image loading via `next/image`

---

## ✅ Task Format: Testable and Atomic
Each task above can be implemented, committed, and tested independently.

Let me know when you're ready for the React Native task list in `mobile_design_task.md`.

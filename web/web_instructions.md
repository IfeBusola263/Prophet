# MVP Build Plan: Prophet Web (Next.js)

Each task is atomic, scoped, and testable. Tasks build upon each other sequentially.

---

### 🧱 Setup & Project Base

1. **Initialize Next.js App**
   - Run `npx create-next-app@latest prophet-web --typescript`
   - Ensure the project runs on `localhost:3000`

2. **Install Base Dependencies**
   - Install: `tailwindcss`, `zustand`, `axios`, `react-hook-form`, `xlsx`, `react-quill`
   - Setup TailwindCSS with PostCSS and include in `globals.css`

3. **Setup Folder Structure**
   - Create `components/`, `lib/services/`, `lib/utils/`, `state/`, `app/compose`, etc.
   - Add placeholder files with TODO comments

4. **Implement App Layout**
   - Create `app/layout.tsx` with sidebar/nav placeholders
   - Use Tailwind for simple responsive layout

---

### 📂 File Upload Flow (CSV/XLSX)

5. **Build FileUploader Component**
   - Drag-and-drop CSV/XLSX
   - Show filename preview after upload
   - No parsing yet

6. **Add File Parsing Utility**
   - Use `xlsx` to parse CSV/XLSX to JSON in `lib/utils/parseFile.ts`
   - Export list of objects with headers

7. **Connect FileUploader to Parser**
   - On file drop, parse file and store in `contactStore`
   - Show JSON in a raw pre tag below

8. **Add Contact Table Preview**
   - Build `ContactTable.tsx` component to render parsed contacts
   - Add basic email validation (e.g. regex)

---

### 📨 Compose Campaign

9. **Build Compose Page UI**
   - Add subject field, `react-quill` editor, and file selector
   - Basic form validation

10. **Store Email Content in Zustand**
   - Create `campaignStore` to store subject, body, and contact list

11. **Add Preview on Compose Page**
   - Show preview section with subject, body, contact count

---

### 📅 Campaign Management

12. **Add Campaign Service (Mock)**
   - Create `campaignService.ts`
   - Add `createCampaign()` function that logs payload

13. **Hook Up Compose to Campaign Service**
   - On form submit, call `createCampaign()` with composed data
   - Show success toast

14. **Build Campaign List Page**
   - Create dummy list of campaigns with status
   - Reuse `CampaignCard.tsx`

15. **Save Created Campaign to Zustand Store**
   - Add campaign to local list on create
   - Display in `/campaigns` route

---

### 📊 Analytics (Static for MVP)

16. **Create Analytics Page**
   - Chart for open rate and click rate using fake data
   - Use `StatsWidget.tsx`

17. **Mock Analytics Service**
   - Create `analyticsService.getStats()` returning static values

18. **Connect Stats to Campaign Page**
   - On campaign detail page, fetch stats and show graph

---

### 🤖 Bonus: AI Email Generator

19. **Create API Route `/api/generate-email`**
   - Use OpenAI SDK
   - POST: context, tone, goal → Return subject + body

20. **Build GenerateEmail Button in Compose Page**
   - Input fields: topic, tone, goal
   - On click, call endpoint and auto-fill subject/body

---

### ✅ Finalization & QA

21. **Add Error/Loading States to All Pages**
   - File upload, compose, campaign list

22. **Write Unit Tests for Parsing Logic**
   - Test `parseFile.ts` with sample files

23. **Deploy to Vercel (Optional)**
   - Connect GitHub + Vercel
   - Add `NEXT_PUBLIC_API_URL` to `.env`

---

Let me know when you're ready and I’ll generate `mobile_instructions.md` next.

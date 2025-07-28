# Prophet Web Architecture (Next.js)

## Overview
The web app is responsible for uploading campaign files (CSV/Excel), managing contact lists, composing and scheduling emails, running campaigns, and tracking analytics.

---

## File + Folder Structure

```
/web
├── app
│   ├── layout.tsx           # App shell with providers and layout
│   ├── page.tsx             # Dashboard or landing page
│   ├── campaigns
│   │   ├── page.tsx         # Campaign listing
│   │   ├── [id]
│   │   │   └── page.tsx     # Campaign details
│   ├── compose
│   │   └── page.tsx         # Compose new email
│   ├── upload
│   │   └── page.tsx         # Upload CSV/XLSX
│   └── analytics
│       └── page.tsx         # View open/click stats
├── components
│   ├── FileUploader.tsx     # CSV/XLSX drag-and-drop uploader
│   ├── CampaignCard.tsx     # Card UI for campaigns
│   ├── EmailEditor.tsx      # Rich text email editor (e.g., react-quill)
│   ├── ContactTable.tsx     # Parsed contacts with validation feedback
│   └── StatsWidget.tsx      # Open/click rate charts
├── lib
│   ├── services
│   │   ├── campaignService.ts # CRUD and scheduling logic
│   │   ├── contactService.ts  # CSV/XLSX parsing, validation
│   │   └── analyticsService.ts# Pull open/click stats
│   ├── utils
│   │   └── parseFile.ts       # Excel/CSV file parsing
│   └── validators.ts         # Input validation logic
├── state
│   ├── campaignStore.ts      # Zustand or Redux store for campaigns
│   ├── contactStore.ts       # Contact import + validation state
│   └── analyticsStore.ts     # Campaign stats state
├── styles
│   └── globals.css
├── public
│   └── ...assets
├── .env.local                # API keys, env vars
├── next.config.js
└── package.json
```

---

## What Each Part Does

### `app/`
- Pages for user interaction: upload CSV, compose emails, view campaigns, analytics.

### `components/`
- Reusable UI blocks like file upload, contact table, charts, and WYSIWYG editor.

### `lib/services/`
- Encapsulate API calls and business logic for campaigns, contacts, analytics.

### `lib/utils/`
- File parsing, cleaning, helpers (e.g., convert Excel to JSON).

### `state/`
- Zustand or Redux state for UI-level or cross-component state sharing.

### `styles/`
- Tailwind or global CSS styles.

### `public/`
- Static assets like logos or preview images.

---

## Where State Lives
- **Zustand** store in `state/`
  - Campaigns state: created, scheduled, status
  - Contacts state: parsed from file, validated or rejected
  - Analytics: stored per campaign
- **Temporary UI state**: Local component state (e.g., modals)

---

## How Services Connect

1. User uploads a CSV/XLSX file → `FileUploader.tsx`
2. File is parsed in `parseFile.ts` → stored in `contactStore`
3. User composes email with `EmailEditor.tsx` → data stored in `campaignStore`
4. When scheduled, `campaignService.scheduleCampaign()` sends data to backend
5. Backend handles email sending via queue (e.g., BullMQ)
6. Events like open/click are tracked (via pixel or tracking links)
7. `analyticsService` fetches stats for display in `StatsWidget`

---

## Extra Feature (Web): AI Email Subject/Body Generator

- New API route `/api/generate-email`
- Frontend uses `generateEmail.ts` in lib/services to call it
- Pass context (contact info, goal, tone)
- Uses OpenAI API to return subject line + body draft
- Results populate `EmailEditor.tsx`

---

Let me know when you're ready and I’ll generate `mobile_task.md` next.

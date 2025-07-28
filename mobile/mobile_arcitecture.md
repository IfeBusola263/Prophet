# Prophet Mobile Architecture (React Native)

## Overview
The mobile app focuses on campaign management on-the-go: uploading contact files, scheduling campaigns, and monitoring performance. Simpler UI compared to web, optimized for quick use.

---

## File + Folder Structure


```
/mobile
├── screens
│   ├── HomeScreen.tsx           # Dashboard overview
│   ├── UploadScreen.tsx         # Upload CSV/XLSX
│   ├── ComposeScreen.tsx        # Compose email
│   ├── CampaignsScreen.tsx      # View campaigns
│   ├── CampaignDetailScreen.tsx # Single campaign detail
│   └── AnalyticsScreen.tsx      # Performance metrics
├── components
│   ├── FilePicker.tsx           # Pick files from device
│   ├── ContactPreview.tsx       # Table preview of parsed contacts
│   ├── CampaignCard.tsx         # Campaign listing card
│   └── StatChart.tsx            # Click/open rate charts
├── services
│   ├── fileParser.ts            # Parse uploaded CSV/XLSX
│   ├── campaignService.ts       # API interactions
│   └── analyticsService.ts      # Get analytics data
├── store
│   ├── useCampaignStore.ts      # Zustand for campaign state
│   ├── useContactStore.ts       # Parsed contacts + errors
│   └── useAnalyticsStore.ts     # Open/click stats
├── navigation
│   └── AppNavigator.tsx         # React Navigation stack
├── utils
│   └── fileHelpers.ts           # Shared helpers
├── constants
│   └── colors.ts, fonts.ts      # Theme tokens
├── App.tsx
├── assets
│   └── images, icons
├── app.json / expo config       # If using Expo
├── tsconfig.json
└── package.json
```

---

## What Each Part Does

### `screens/`
- Views for core features: upload, compose, campaigns, analytics

### `components/`
- UI elements reused across screens: file picker, contact preview, campaign card, charts

### `services/`
- Encapsulated logic for API interaction and file parsing

### `store/`
- Zustand stores for contacts, campaigns, analytics

### `navigation/`
- App stack using React Navigation for screen transitions

### `utils/`
- File helpers (e.g., detect file type, clean data)

### `constants/`
- Theming with colors, spacing, fonts

---

## Where State Lives
- Global state (via Zustand): 
  - Uploaded contact info and validation errors
  - Composed email body and selected contact list
  - Campaigns list and individual campaign data
  - Analytics (per campaign)
- Local component state: file modals, loading spinners, form inputs

---

## How Services Connect
1. User picks a file from device → `FilePicker.tsx`
2. Parsed using `fileParser.ts` → stores in `useContactStore`
3. Composes email → stores body in `useCampaignStore`
4. Campaign is scheduled via `campaignService.schedule()`
5. Analytics retrieved via `analyticsService.getStats()`
6. Displayed in `AnalyticsScreen` and `CampaignDetailScreen`

---

## Extra Feature (Mobile): Voice-to-Email Composer

- Use `expo-speech` and `expo-speech-to-text` or `react-native-voice`
- On Compose screen: microphone button triggers speech input
- Converts speech to text → populates email body
- Allows quick campaign writing on-the-go

---

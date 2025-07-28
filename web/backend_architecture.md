# Prophet Backend Architecture (Next.js API Routes + MongoDB)

## Overview
The backend is embedded within the Next.js `app/api/` directory. It handles campaign creation, file parsing, contact storage, scheduling, and stat reporting.

---

## Folder Structure

```
/app
├── api
│   ├── campaigns
│   │   ├── route.ts         # POST: create campaign
│   │   └── [id]/route.ts    # GET: get single campaign + stats
│   ├── contacts
│   │   └── upload/route.ts  # POST: upload and store parsed contacts
│   ├── analytics
│   │   └── [campaignId]/route.ts # GET: return open/click metrics
│   └── generate-email
│       └── route.ts         # POST: OpenAI subject/body generation
├── lib
│   ├── db.ts                # MongoDB connection utility
│   ├── models
│   │   ├── Campaign.ts      # Mongoose campaign schema
│   │   ├── Contact.ts       # Mongoose contact schema
│   │   └── Analytics.ts     # Mongoose stats schema
│   └── services
│       ├── campaignService.ts
│       ├── contactService.ts
│       └── analyticsService.ts
```

---

## API Design

### `/api/campaigns`
- `POST`: Create new campaign
  - Save subject, body, contactIds, status
- `GET [id]`: Return full campaign with contact count and basic stats

### `/api/contacts/upload`
- `POST`: Accept parsed contacts, store in DB, return IDs
  - Validate emails and dedupe

### `/api/analytics/[campaignId]`
- `GET`: Return dummy or real open/click stats for campaign

### `/api/generate-email`
- `POST`: Call OpenAI API with inputs and return draft subject + body

---

## Data Models

### Campaign
```ts
{
  _id,
  subject: string,
  body: string,
  contactIds: ObjectId[],
  status: 'draft' | 'scheduled' | 'sent',
  createdAt, updatedAt
}
```

### Contact
```ts
{
  _id,
  name?: string,
  email: string,
  fields: Record<string, string>,
  createdAt
}
```

### Analytics
```ts
{
  _id,
  campaignId: ObjectId,
  openCount: number,
  clickCount: number,
  timestampedEvents: Array<{ type: 'open' | 'click', timestamp: Date }>
}
```

---

## Services (lib/services)

- `campaignService`
  - `createCampaign(data)`
  - `getCampaign(id)`

- `contactService`
  - `createContacts(list)`
  - `validateContacts(list)`

- `analyticsService`
  - `getStats(campaignId)`
  - (future) `recordOpen()`, `recordClick()`

---

Let me now generate the granular backend tasks in `backend_tasks.md`

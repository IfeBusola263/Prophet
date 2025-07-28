# Granular Build Plan: Prophet Backend (Next.js API + MongoDB)

Each task is atomic and should be executed sequentially. Uses Mongoose + MongoDB inside `app/api/`.

---

### 🧱 Project Setup

1. **Install MongoDB + Mongoose**
   - Install `mongoose`, `mongodb`, and `dotenv`
   - Setup `.env.local` with `MONGODB_URI`

2. **Create `lib/db.ts`**
   - Export singleton MongoDB client connection

3. **Create `lib/models/Contact.ts`**
   - Define Mongoose schema: `email`, `fields`, `createdAt`

4. **Create `lib/models/Campaign.ts`**
   - Define schema with `subject`, `body`, `contactIds`, `status`

5. **Create `lib/models/Analytics.ts`**
   - Schema for `campaignId`, `openCount`, `clickCount`, `timestampedEvents`

---

### 📇 Contacts

6. **Create `contactService.ts`**
   - `validateContacts(list)`: dedupe and validate emails
   - `createContacts(list)`: save to DB

7. **Create `api/contacts/upload/route.ts`**
   - POST: Accept parsed contact list
   - Validate and store
   - Return created IDs

---

### 📨 Campaigns

8. **Create `campaignService.ts`**
   - `createCampaign(data)`: insert into DB
   - `getCampaign(id)`: fetch by ID and populate

9. **Create `api/campaigns/route.ts`**
   - POST: Create new campaign using service

10. **Create `api/campaigns/[id]/route.ts`**
   - GET: Return campaign by ID with related contact info

---

### 📊 Analytics (Static for MVP)

11. **Create `analyticsService.ts`**
   - `getStats(campaignId)`: return dummy stats or fetch from DB

12. **Create `api/analytics/[campaignId]/route.ts`**
   - GET: Call service and return static values (open/click)

---

### 🤖 AI Email Generator

13. **Create `api/generate-email/route.ts`**
   - POST: Accept context, call OpenAI API, return generated subject + body

14. **Add API Key to `.env.local`**
   - `OPENAI_API_KEY`

---

### 🧪 Testing & Error Handling

15. **Add error handling to all services and routes**
   - Wrap all DB logic in try/catch
   - Return consistent API responses

16. **Write unit test for `validateContacts` logic**
   - Ensure invalid/missing emails are caught

17. **Test full contact upload + campaign create + analytics flow**
   - Use Postman or curl to POST and GET to API routes

---

Ready for scheduled campaign delivery (e.g., using CRON + queue)? Or auth next? Just say the word 🔧

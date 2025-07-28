# Mobile UI Modernization Task List (Prophet - React Native)

## 🟢 Phase 1 - Foundation Setup

1. **Install NativeWind + Tailwind Dependencies**
   - Install NativeWind, tailwind.config.js, set up PostCSS

2. **Define Design Tokens in `theme.ts`**
   - Add spacing, font scale, radius, colors
   - Support for light/dark mode switch

3. **Create Base UI Components**
   - `Button`: states (pressed, loading, disabled)
   - `Input`, `Textarea`, `Card`, `Toast`
   - Use `react-native-paper` or NativeWind for styling

4. **Configure App Navigation**
   - Set up `react-navigation` with tabs (Home, Compose, Campaigns)
   - Stack for detail screens + modals

---

## 🟡 Phase 2 - Core Experiences

5. **Rebuild `FilePicker.tsx`**
   - Use `react-native-document-picker`
   - Add visual file preview (name, type, size)

6. **Modernize `ComposeScreen.tsx`**
   - Multiline text editor for email body
   - Add AI generate button
   - Add voice-to-text mic button (placeholder logic)

7. **Refactor `CampaignsScreen.tsx`**
   - Card layout for campaigns
   - Add status badge, swipe-to-delete, sorting bar

8. **Redesign `CampaignDetailScreen.tsx`**
   - Add scrollable timeline layout
   - Use `VictoryBar` for open/click/bounce chart

---

## 🟠 Phase 3 - Data & Feedback

9. **Enhance `ContactPreview.tsx`**
   - Virtualize contact list
   - Add inline email validation states

10. **Build Scheduling UI (Bottom Sheet)**
   - Use `react-native-bottom-sheet`
   - Calendar + time picker with local/UTC toggle

11. **Modernize `AnalyticsScreen.tsx`**
   - Add toggle for week/month stats
   - Add chart + summary cards (CTR, bounce rate)

12. **Implement Feedback System**
   - Toasts for success/error
   - Field-level errors below inputs

---

## 🔵 Phase 4 - Polish & Final Testing

13. **Add Skeleton Loaders**
   - Loading states for campaign cards, analytics, contact list

14. **Add Micro-Interactions**
   - Haptics for critical buttons
   - Animated transitions between screens

15. **Accessibility Audits**
   - Test with screen readers (VoiceOver/TalkBack)
   - Touch targets ≥ 44x44px, color contrast checks

16. **Optimize Performance**
   - Debounce input fields
   - Lazy-load analytics + image content
   - Profile screen render performance (Flipper)

---

Each task is atomic, testable, and should be committed independently.
You're now set to run an LLM-driven UI redesign sprint for the Prophet mobile app 🚀

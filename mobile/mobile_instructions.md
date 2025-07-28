# MVP Build Plan: Prophet Mobile (React Native CLI)

Each task is small, testable, and has a clear start + end.

---

### ⚙️ Setup & Base Project

1. **Initialize App**
   - Run `npx  @react-native-community/cli@latest init prophet-mobile -t`
   - Confirm app runs on device/simulator

2. **Install Dependencies**
   - `React-Redux`, `react-native-paper`, `axios`, `react-hook-form`, `xlsx`, `react-native-document-picker`, `victory-native`, `redux`

3. **Setup Folder Structure**
   - Create folders: `screens/`, `components/`, `services/`, `store/`, `navigation/`, `utils/`, `constants/`
   - Add placeholder files for each screen/component

4. **Configure Navigation**
   - Install and set up `@react-navigation/native` with stack navigator in `AppNavigator.tsx`
   - Link 3 test screens and test transitions

---

### 📂 File Upload Flow (CSV/XLSX)

5. **Build FilePicker Component**
   - Use `react-native-document-picker` to select CSV/XLSX
   - Display filename after selection

6. **Write File Parsing Utility**
   - Use `xlsx` to convert file content to JSON in `fileParser.ts`
   - Return parsed array with headers

7. **Connect FilePicker to Parser**
   - On file pick, parse content and store in `useContactStore`
   - Show raw parsed JSON below file picker

8. **Build ContactPreview Component**
   - Render parsed contacts in table-like list (FlatList)
   - Highlight invalid email addresses

---

### 📨 Compose Campaign

9. **Build ComposeScreen UI**
   - Inputs for subject, body (TextInput), select file button
   - Validate required fields

10. **Store Data in React-Redux (Campaign)**
   - Use `useCampaignStore` to hold subject, body, contact list

11. **Add Preview Section**
   - Show message preview and contact count

---

### 📅 Campaign Scheduling + Listing

12. **Create Campaign Service (Mock)**
   - POST composed data to mock endpoint or log to console

13. **Hook ComposeScreen to Service**
   - On press of submit, call `createCampaign()`
   - Reset form and show confirmation

14. **Build CampaignsScreen**
   - Show list of campaigns stored in React-Redux
   - Each item: name, status, date

15. **Implement Campaign Detail Screen**
   - Tapping campaign shows detail + stats

---

### 📊 Analytics (Static for MVP)

16. **Add AnalyticsService (Mock)**
   - Returns static values for open/click rate

17. **Build StatChart Component**
   - Use `victory-native` to show bar chart for open/click rates

18. **Build AnalyticsScreen**
   - Load stats from service, display chart + values

---

### 🎙️ Bonus: Voice-to-Email

19. **Install Voice Lib**
   - Use `react-native-voice`

20. **Add Microphone Button to ComposeScreen**
   - Tap to convert voice to text → insert into body input

---

### ✅ Finalization & QA

21. **Add Loading/Feedback States**
   - Uploading, composing, error messages

22. **Test File Parsing with Multiple Samples**
   - Verify structure and invalid formats

23. **Run on Physical Device + Deploy (Optional)**
   - Test performance + UI responsiveness

---

Ready to move to backend setup, database schema, or CI/CD next? Say the word 🚀

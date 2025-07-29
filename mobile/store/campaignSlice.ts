import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Campaign {
  subject: string;
  body: string;
  contacts: any[];
  status?: string;
  date?: string;
}

interface CampaignState {
  subject: string;
  body: string;
  contacts: any[];
  campaigns: Campaign[];
}

const initialState: CampaignState = {
  subject: '',
  body: '',
  contacts: [],
  campaigns: [
    {
      subject: 'Welcome Email',
      body: 'Hello, welcome to Prophet!',
      contacts: [{ name: 'John Doe', email: 'john@example.com' }],
      status: 'Sent',
      date: '2025-07-28 10:00',
    },
    {
      subject: 'Promo Blast',
      body: 'Check out our new features.',
      contacts: [{ name: 'Jane Smith', email: 'jane@example.com' }],
      status: 'Draft',
      date: '2025-07-29 09:30',
    },
  ],
};

const campaignSlice = createSlice({
  name: 'campaign',
  initialState,
  reducers: {
    setSubject(state, action: PayloadAction<string>) {
      state.subject = action.payload;
    },
    setBody(state, action: PayloadAction<string>) {
      state.body = action.payload;
    },
    setContacts(state, action: PayloadAction<any[]>) {
      state.contacts = action.payload;
    },
    addCampaign(state, action: PayloadAction<Campaign>) {
      state.campaigns.push(action.payload);
    },
    reset(state) {
      state.subject = '';
      state.body = '';
      state.contacts = [];
    },
  },
});

export const { setSubject, setBody, setContacts, addCampaign, reset } =
  campaignSlice.actions;
export default campaignSlice.reducer;

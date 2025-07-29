import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CampaignState {
  subject: string;
  body: string;
  contacts: any[];
}

const initialState: CampaignState = {
  subject: '',
  body: '',
  contacts: [],
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
    reset(state) {
      state.subject = '';
      state.body = '';
      state.contacts = [];
    },
  },
});

export const { setSubject, setBody, setContacts, reset } =
  campaignSlice.actions;
export default campaignSlice.reducer;

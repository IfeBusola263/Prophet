import { useSelector, useDispatch } from 'react-redux';
import { RootState } from './index';
import {
  setSubject,
  setBody,
  setContacts,
  addCampaign,
  reset,
} from './campaignSlice';

export function useCampaignStore() {
  const campaign = useSelector((state: RootState) => state.campaign);
  const dispatch = useDispatch();

  return {
    ...campaign,
    setSubject: (subject: string) => dispatch(setSubject(subject)),
    setBody: (body: string) => dispatch(setBody(body)),
    setContacts: (contacts: any[]) => dispatch(setContacts(contacts)),
    addCampaign: (newCampaign: any) => dispatch(addCampaign(newCampaign)),
    reset: () => dispatch(reset()),
  };
}

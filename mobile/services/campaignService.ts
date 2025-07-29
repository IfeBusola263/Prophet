// Minimal mock campaign service
const createCampaign = async data => {
  // Simulate network delay
  return new Promise(resolve => {
    setTimeout(() => {
      console.log('Campaign submitted:', data);
      resolve({ success: true });
    }, 500);
  });
};

export default {
  createCampaign,
};

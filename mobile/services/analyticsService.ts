// Minimal mock analytics service
const getStats = async (campaignId?: string) => {
  // Returns static open/click rates for MVP
  return {
    openRate: 42,
    clickRate: 17,
  };
};

export default {
  getStats,
};

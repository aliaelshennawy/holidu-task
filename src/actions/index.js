export const getOffers = () => ({
  type: 'GET_OFFERS',
});
export const setSearchQuery = (query) => ({
  type: 'SET_SEARCH_QUERY',
  query
});

export const getQuery = (state) => state.query;
export const getAdults = (state) => state.adults;
export const getCheckinDate = (state) => state.checkin;
export const getCheckoutDate = (state) => state.checkout;

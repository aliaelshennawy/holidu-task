export const getOffers = () => ({
  type: 'GET_OFFERS',
});
export const setSearchQuery = (query) => ({
  type: 'SET_SEARCH_QUERY',
  query
});
export const getQuery = (state) => state.query;

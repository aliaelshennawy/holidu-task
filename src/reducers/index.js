const reducer = (state = {}, action) => {
     console.log('Action in reducer', action)
  switch (action.type) {
    case 'GET_OFFERS':
         return { ...state, loading: true };
     case 'SET_SEARCH_QUERY':
          return {...state, query: action.query , loading: true}
    case 'OFFERS_RECEIVED':
         return { ...state, offers: action.data.offers , loading: false }
    default: 
         return state;
  }
 };
 export default reducer;
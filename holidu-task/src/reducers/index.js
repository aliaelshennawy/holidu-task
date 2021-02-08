const reducer = (state = {}, action) => {
  switch (action.type) {
    case 'GET_OFFERS':
         return { ...state, loading: true };
    case 'OFFERS_RECEIVED':
         return { ...state, offers: action.json[0], loading: false }
    default: 
         return state;
  }
 };
 export default reducer;
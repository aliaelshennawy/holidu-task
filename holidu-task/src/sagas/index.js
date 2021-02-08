import { put, takeLatest, all } from 'redux-saga/effects';
function* fetchOffers() {
  const json = yield fetch('https://api.holidu.com/old/rest/v6/search/offers?searchId=46fdd790-e0a7-4b96-98b5-6be594a8e8b1&searchTerm=Mallorca%2C+Spanien&adults=2&domainId=2&locale=de-DE&currency=EUR')
        .then(response => response.json(), );    
        //check offers to replace value below
  yield put({ type: "OFFERS_RECEIVED", json: json.offers, });
}
function* actionWatcher() {
     yield takeLatest('GET_OFFERS', fetchOffers)
}
export default function* rootSaga() {
   yield all([
   actionWatcher(),
   ]);
}
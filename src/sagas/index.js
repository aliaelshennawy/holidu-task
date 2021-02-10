import axios from 'axios'
import { call, put, all, takeLatest } from 'redux-saga/effects'

function* fetchOffers() {
  try {
    const { data } = yield call(axios.get, 'https://api.holidu.com/old/rest/v6/search/offers?searchId=46fdd790-e0a7-4b96-98b5-6be594a8e8b1&searchTerm=Mallorca%2C+Spanien&adults=2&domainId=2&locale=de-DE&currency=EUR')
    yield put({ type: "OFFERS_RECEIVED", data})
  } catch (e) {
    console.log(e.message)
  }
}
function* actionWatcher() {
  yield takeLatest('GET_OFFERS', fetchOffers)
}
export default function* rootSaga() {
yield all([
actionWatcher(),
]);
}
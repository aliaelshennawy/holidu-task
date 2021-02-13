import axios from 'axios'
import { call, put, all, takeLatest, select } from 'redux-saga/effects'
import { getQuery , getAdults , getCheckinDate , getCheckoutDate} from '../actions'



function* fetchOffers() {
  let query = yield select(getQuery)
  try {
    const { data } = yield call(axios.get, 'https://api.holidu.com/old/rest/v6/search/offers', {
      params: query
  })
    yield put({ type: "OFFERS_RECEIVED", data})
    return Promise.resolve('Offers Retrived Successfully');
  } catch (e) {
    return Promise.reject(e);
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
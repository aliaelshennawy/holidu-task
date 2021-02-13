import axios from 'axios'
import { call, put, all, takeLatest, select } from 'redux-saga/effects'
import { getOffers , getQuery} from '../actions'



function* fetchOffers() {
  let query = yield select(getQuery)
  try {
    const { data } = yield call(axios.get, 'https://api.holidu.com/old/rest/v6/search/offers', {
      params: { searchTerm: query }
  })
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
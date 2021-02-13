import axios from "axios";
import { call, put, all, takeLatest, select } from "redux-saga/effects";
import { getQuery } from "../actions";

const CancelToken = axios.CancelToken;
let source = CancelToken.source();

function* fetchOffers() {
  let query = yield select(getQuery);
  source && source.cancel("Operation canceled due to new request.");
  source = axios.CancelToken.source();
  try {
    const { data } = yield call(
      axios.get,
      "https://api.holidu.com/old/rest/v6/search/offers",
      {
        params: query,
      },
      {
        cancelToken: source.token,
      }
    );
    if (data.offers.length) {
      yield put({ type: "OFFERS_RECEIVED", data });
    } else {
      yield put({ type: "NO_OFFERS_RECIEVED" });
    }
    return Promise.resolve("Offers Retrived Successfully");
  } catch (e) {
    if (axios.isCancel(e)) {
      console.log('Request canceled');
    }
    return Promise.reject(e);
  }
}
function* actionWatcher() {
  yield takeLatest("GET_OFFERS", fetchOffers);
}
export default function* rootSaga() {
  yield all([actionWatcher()]);
}

import { put, call, takeEvery } from "redux-saga/effects";
import { fetchTrendingMovies } from "api";
import { FETCH_TRENDING_MOVIES, receiveTrendingMovies } from "actions";

function* fetchMovies() {
  const movies = yield call(fetchTrendingMovies);
  yield put(receiveTrendingMovies(movies.results));
}

export default function* rootSaga() {
  yield takeEvery(FETCH_TRENDING_MOVIES, fetchMovies);
}

import { put, call, all, takeEvery } from "redux-saga/effects";
import { normalize } from "normalizr";
import { categoryListSchema } from "schemas";
import * as api from "api";
import {
  FETCH_TRENDING_MOVIES,
  FETCH_CATEGORIES,
  FETCH_TRENDING_TODAY,
  receiveTrendingMovies,
  receiveCategories,
  receiveTrendingToday
} from "actions";

function* fetchMovies() {
  const movies = yield call(api.fetchTrendingWeek);
  yield put(receiveTrendingMovies(movies.results));
}

function* fetchCategories() {
  const res = yield call(api.fetchCategories);
  const normalized = normalize(res.genres, categoryListSchema);
  yield put(receiveCategories(normalized.entities.categories));
}

function* fetchTrendingToday() {
  const movies = yield call(api.fetchTrendingToday);
  yield put(receiveTrendingToday(movies.results));
}

export default function* rootSaga() {
  yield all([
    takeEvery(FETCH_TRENDING_MOVIES, fetchMovies),
    takeEvery(FETCH_CATEGORIES, fetchCategories),
    takeEvery(FETCH_TRENDING_TODAY, fetchTrendingToday)
  ]);
}

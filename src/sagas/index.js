import { put, call, all, takeEvery } from "redux-saga/effects";
import { normalize } from "normalizr";
import { categoryListSchema } from "schemas";
import * as api from "api";
import {
  FETCH_TRENDING_MOVIES,
  FETCH_CATEGORIES,
  FETCH_TRENDING_TODAY,
  DISCOVER_BY_CATEGORY,
  receiveMovies,
  receiveCategories
} from "actions";

function* fetchMovies() {
  const movies = yield call(api.fetchTrendingWeek);
  yield put(receiveMovies(movies.results));
}

function* fetchCategories() {
  const res = yield call(api.fetchCategories);
  const normalized = normalize(res.genres, categoryListSchema);
  yield put(receiveCategories(normalized.entities.categories));
}

function* fetchTrendingToday() {
  const movies = yield call(api.fetchTrendingToday);
  yield put(receiveMovies(movies.results));
}

function* discoverByCategory(action) {
  const { payload } = action;
  const movies = yield call(() => api.discoverByCategory(payload));
  yield put(receiveMovies(movies.results));
}

export default function* rootSaga() {
  yield all([
    takeEvery(FETCH_TRENDING_MOVIES, fetchMovies),
    takeEvery(FETCH_CATEGORIES, fetchCategories),
    takeEvery(FETCH_TRENDING_TODAY, fetchTrendingToday),
    takeEvery(DISCOVER_BY_CATEGORY, discoverByCategory)
  ]);
}

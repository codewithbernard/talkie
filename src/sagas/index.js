import { put, call, all, takeEvery } from "redux-saga/effects";
import { normalize } from "normalizr";
import { categoryListSchema } from "schemas";
import * as api from "api";
import {
  FETCH_TRENDING_MOVIES,
  FETCH_CATEGORIES,
  FETCH_TRENDING_TODAY,
  DISCOVER_BY_CATEGORY,
  FETCH_SEARCH_MOVIES,
  receiveMovies,
  receiveCategories,
  receiveNextMovies,
  receiveSearchMovies
} from "actions";

function* fetchMovies(action) {
  const { payload } = action;
  const movies = yield call(() => api.fetchTrendingWeek(payload));
  if (payload === 1) {
    yield put(receiveMovies(movies.results));
  } else {
    yield put(receiveNextMovies(movies.results));
  }
}

function* fetchCategories() {
  const res = yield call(api.fetchCategories);
  const normalized = normalize(res.genres, categoryListSchema);
  yield put(receiveCategories(normalized.entities.categories));
}

function* fetchTrendingToday(action) {
  const { payload } = action;
  const movies = yield call(() => api.fetchTrendingToday(action.payload));
  if (payload === 1) {
    yield put(receiveMovies(movies.results));
  } else {
    yield put(receiveNextMovies(movies.results));
  }
}

function* discoverByCategory(action) {
  const { category, pageNumber } = action.payload;
  const movies = yield call(() => api.discoverByCategory(category, pageNumber));
  if (pageNumber === 1) {
    yield put(receiveMovies(movies.results));
  } else {
    yield put(receiveNextMovies(movies.results));
  }
}

function* fetchSearchMovies({ payload }) {
  if (payload) {
    const movies = yield call(() => api.fetchSearchMovies(payload));
    yield put(receiveSearchMovies(movies.results));
  }
}

export default function* rootSaga() {
  yield all([
    takeEvery(FETCH_TRENDING_MOVIES, fetchMovies),
    takeEvery(FETCH_CATEGORIES, fetchCategories),
    takeEvery(FETCH_TRENDING_TODAY, fetchTrendingToday),
    takeEvery(DISCOVER_BY_CATEGORY, discoverByCategory),
    takeEvery(FETCH_SEARCH_MOVIES, fetchSearchMovies)
  ]);
}

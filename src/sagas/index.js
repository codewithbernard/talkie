import { put, call, all, takeEvery } from "redux-saga/effects";
import { normalize } from "normalizr";
import { categoryListSchema } from "schemas";
import * as api from "api";
import {
  FETCH_TRENDING_MOVIES,
  FETCH_CATEGORIES,
  receiveTrendingMovies,
  receiveCategories
} from "actions";

function* fetchMovies() {
  const movies = yield call(api.fetchTrendingMovies);
  yield put(receiveTrendingMovies(movies.results));
}

function* fetchCategories() {
  const res = yield call(api.fetchCategories);
  const normalized = normalize(res.genres, categoryListSchema);
  yield put(receiveCategories(normalized.entities.categories));
}

export default function* rootSaga() {
  yield all([
    takeEvery(FETCH_TRENDING_MOVIES, fetchMovies),
    takeEvery(FETCH_CATEGORIES, fetchCategories)
  ]);
}

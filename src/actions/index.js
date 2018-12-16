const FETCH_TRENDING_MOVIES = "FETCH_TRENDING_MOVIES";
const FETCH_TRENDING_TODAY = "FETCH_TRENDING_TODAY";
const RECEIVE_TRENDING_TODAY = "RECEIVE_TRENDING_TODAY";
const RECEIVE_TRENDING_MOVIES = "RECEIVE_TRENDING_MOVIES";
const FETCH_CATEGORIES = "FETCH_CATEGORIES";
const RECEIVE_CATEGORIES = "RECEIVE_CATEGORIES";

const fetchTrendingWeek = () => {
  return {
    type: FETCH_TRENDING_MOVIES
  };
};

const receiveTrendingMovies = movies => {
  return {
    type: RECEIVE_TRENDING_MOVIES,
    payload: movies
  };
};

const fetchTrendingToday = () => {
  return {
    type: FETCH_TRENDING_TODAY
  };
};

const receiveTrendingToday = movies => {
  return {
    type: RECEIVE_TRENDING_TODAY,
    payload: movies
  };
};

const fetchCategories = () => {
  return {
    type: FETCH_CATEGORIES
  };
};

const receiveCategories = categories => {
  return {
    type: RECEIVE_CATEGORIES,
    payload: categories
  };
};

export {
  fetchTrendingWeek,
  receiveTrendingMovies,
  fetchCategories,
  receiveCategories,
  fetchTrendingToday,
  receiveTrendingToday,
  FETCH_TRENDING_MOVIES,
  FETCH_TRENDING_TODAY,
  RECEIVE_TRENDING_MOVIES,
  RECEIVE_CATEGORIES,
  FETCH_CATEGORIES
};

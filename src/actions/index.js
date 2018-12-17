const FETCH_TRENDING_MOVIES = "FETCH_TRENDING_MOVIES";
const FETCH_TRENDING_TODAY = "FETCH_TRENDING_TODAY";
const RECEIVE_TRENDING_MOVIES = "RECEIVE_TRENDING_MOVIES";
const DISCOVER_BY_CATEGORY = "DISCOVER_CATEGORY";
const FETCH_CATEGORIES = "FETCH_CATEGORIES";
const RECEIVE_CATEGORIES = "RECEIVE_CATEGORIES";

const discoverByCategory = category => {
  return {
    type: DISCOVER_BY_CATEGORY,
    payload: category
  };
};

const fetchTrendingWeek = () => {
  return {
    type: FETCH_TRENDING_MOVIES
  };
};

const receiveMovies = movies => {
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
  receiveMovies,
  fetchCategories,
  receiveCategories,
  fetchTrendingToday,
  discoverByCategory,
  FETCH_TRENDING_MOVIES,
  FETCH_TRENDING_TODAY,
  RECEIVE_TRENDING_MOVIES,
  RECEIVE_CATEGORIES,
  FETCH_CATEGORIES,
  DISCOVER_BY_CATEGORY
};

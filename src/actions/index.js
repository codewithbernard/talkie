const FETCH_TRENDING_MOVIES = "FETCH_TRENDING_MOVIES";
const FETCH_TRENDING_TODAY = "FETCH_TRENDING_TODAY";
const RECEIVE_TRENDING_MOVIES = "RECEIVE_TRENDING_MOVIES";
const DISCOVER_BY_CATEGORY = "DISCOVER_CATEGORY";
const FETCH_CATEGORIES = "FETCH_CATEGORIES";
const RECEIVE_CATEGORIES = "RECEIVE_CATEGORIES";
const RECEIVE_NEXT_MOVIES = "RECEIVE_NEXT_MOVIES";

const discoverByCategory = (category, pageNumber) => {
  return {
    type: DISCOVER_BY_CATEGORY,
    payload: { category, pageNumber }
  };
};

const fetchTrendingWeek = pageNumber => {
  return {
    type: FETCH_TRENDING_MOVIES,
    payload: pageNumber
  };
};

const receiveMovies = movies => {
  return {
    type: RECEIVE_TRENDING_MOVIES,
    payload: movies
  };
};

const receiveNextMovies = movies => {
  return {
    type: RECEIVE_NEXT_MOVIES,
    payload: movies
  };
};

const fetchTrendingToday = pageNumber => {
  return {
    type: FETCH_TRENDING_TODAY,
    payload: pageNumber
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
  receiveNextMovies,
  fetchTrendingToday,
  discoverByCategory,
  FETCH_TRENDING_MOVIES,
  FETCH_TRENDING_TODAY,
  RECEIVE_TRENDING_MOVIES,
  RECEIVE_CATEGORIES,
  FETCH_CATEGORIES,
  DISCOVER_BY_CATEGORY,
  RECEIVE_NEXT_MOVIES
};

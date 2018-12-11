const FETCH_TRENDING_MOVIES = "FETCH_TRENDING_MOVIES";
const RECEIVE_TRENDING_MOVIES = "RECEIVE_TRENDING_MOVIES";
const FETCH_CATEGORIES = "FETCH_CATEGORIES";
const RECEIVE_CATEGORIES = "RECEIVE_CATEGORIES";

const fetchTrendingMovies = () => {
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
  fetchTrendingMovies,
  receiveTrendingMovies,
  fetchCategories,
  receiveCategories,
  FETCH_TRENDING_MOVIES,
  RECEIVE_TRENDING_MOVIES,
  RECEIVE_CATEGORIES,
  FETCH_CATEGORIES
};

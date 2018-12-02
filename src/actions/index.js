const FETCH_TRENDING_MOVIES = "FETCH_TRENDING_MOVIES";
const RECEIVE_TRENDING_MOVIES = "RECEIVE_TRENDING_MOVIES";

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

export {
  fetchTrendingMovies,
  receiveTrendingMovies,
  FETCH_TRENDING_MOVIES,
  RECEIVE_TRENDING_MOVIES
};

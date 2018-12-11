import ky from "ky";
const API_URL = "http://api.themoviedb.org/3";
const { REACT_APP_API_KEY } = process.env;
const api = ky.extend({
  prefixUrl: API_URL,
  searchParams: { api_key: REACT_APP_API_KEY }
});

const fetchTrendingMovies = async () => {
  return await api.get("trending/movie/week").json();
};

const fetchCategories = async () => {
  return await api.get("genre/movie/list").json();
};

export { fetchTrendingMovies, fetchCategories };

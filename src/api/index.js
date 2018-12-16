import ky from "ky";
const API_URL = "https://api.themoviedb.org/3";
const { REACT_APP_API_KEY } = process.env;
const api = ky.extend({
  prefixUrl: API_URL,
  searchParams: { api_key: REACT_APP_API_KEY }
});

const fetchTrendingWeek = async () => {
  return await api.get("trending/movie/week").json();
};

const fetchTrendingToday = async () => {
  return await api.get("trending/movie/today").json();
};

const fetchCategories = async () => {
  return await api.get("genre/movie/list").json();
};

export { fetchTrendingWeek, fetchTrendingToday, fetchCategories };

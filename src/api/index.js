import ky from "ky";
const API_URL = "https://api.themoviedb.org/3";
const { REACT_APP_API_KEY } = process.env;
const api = ky.extend({
  prefixUrl: API_URL,
  searchParams: { api_key: REACT_APP_API_KEY }
});

const fetchTrendingWeek = async page => {
  return await api
    .get("trending/movie/week", {
      searchParams: {
        page
      }
    })
    .json();
};

const fetchTrendingToday = async page => {
  return await api
    .get("trending/movie/day", {
      searchParams: {
        page
      }
    })
    .json();
};

const discoverByCategory = async (categoryId, page) => {
  return await api
    .get("discover/movie", {
      searchParams: {
        with_genres: categoryId,
        page
      }
    })
    .json();
};

const fetchCategories = async () => {
  return await api.get("genre/movie/list").json();
};

const fetchSearchMovies = async searchTerm => {
  return await api
    .get("search/movie", {
      searchParams: {
        query: searchTerm
      }
    })
    .json();
};

export {
  fetchTrendingWeek,
  fetchTrendingToday,
  fetchCategories,
  discoverByCategory,
  fetchSearchMovies
};

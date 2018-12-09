import ky from "ky";
const API_URL = "http://api.themoviedb.org/3";

const fetchTrendingMovies = async () => {
  return await ky
    .get(
      `${API_URL}/trending/movie/week?api_key=${process.env.REACT_APP_API_KEY}`
    )
    .json();
};

export { fetchTrendingMovies };

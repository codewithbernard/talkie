import ky from "ky";

const fetchTrendingMovies = async () => {
  return await ky
    .get(
      "https://api.themoviedb.org/3/trending/movie/week?api_key=04430fa460dcecf46e8609834d542056"
    )
    .json();
};

export { fetchTrendingMovies };

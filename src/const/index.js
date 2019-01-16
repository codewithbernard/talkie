const categories = [
  { label: "Comedy", value: "comedy" },
  { label: "Drama", value: "drama" },
  { label: "Thriller", value: "thriller" },
  { label: "Horror", value: "horror" },
  { label: "Action", value: "action" },
  { label: "Romance", value: "romance" },
  { label: "Fantasy", value: "fantasy" },
  { label: "Sci-fi", value: "scifi" }
];

const categoryIds = {
  comedy: 35,
  drama: 18,
  thriller: 53,
  horror: 27,
  action: 28,
  romance: 10749,
  fantasy: 14,
  scifi: 878
};

const featured = [
  { label: "This Week", value: "" },
  { label: "Today", value: "today" }
];

const posterApi = "http://image.tmdb.org/t/p/";

export { categories, categoryIds, posterApi, featured };

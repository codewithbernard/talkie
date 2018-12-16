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

const featured = [
  { label: "This Week", value: "" },
  { label: "Today", value: "today" }
];

const posterApi = "http://image.tmdb.org/t/p/";

export { categories, posterApi, featured };

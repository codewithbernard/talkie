import { combineReducers } from "redux";
import movies from "./movies";
import categories from "./categories";

export default combineReducers({
  movies,
  categories
});

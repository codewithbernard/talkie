import { RECEIVE_CATEGORIES } from "actions";

export default (state = [], action) => {
  switch (action.type) {
    case RECEIVE_CATEGORIES:
      return action.payload || null;
    default:
      return state;
  }
};

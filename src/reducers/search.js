import { RECEIVE_SEARCH_MOVIES } from "actions";

export default (state = [], action) => {
  switch (action.type) {
    case RECEIVE_SEARCH_MOVIES:
      return action.payload || null;
    default:
      return state;
  }
};

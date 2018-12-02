import { RECEIVE_TRENDING_MOVIES } from "actions";

export default (state = [], action) => {
  switch (action.type) {
    case RECEIVE_TRENDING_MOVIES:
      return action.payload || null;
    default:
      return state;
  }
};

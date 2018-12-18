import { RECEIVE_TRENDING_MOVIES, RECEIVE_NEXT_MOVIES } from "actions";

export default (state = [], action) => {
  switch (action.type) {
    case RECEIVE_TRENDING_MOVIES:
      return action.payload || null;
    case RECEIVE_NEXT_MOVIES:
      return [...state, ...action.payload] || null;
    default:
      return state;
  }
};

import { ADD_MOVIE_TO_WATCHPAGE } from "../actions/types";

export default (state = [], action) => {
  switch (action.type) {
    case ADD_MOVIE_TO_WATCHPAGE:
      return state.concat(action.payload);
    default:
      return state;
  }
};

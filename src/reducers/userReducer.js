import { ADD_USER, UPDATE_USER, LOGOUT_USER } from "../actions/types";

export default (state = null, action) => {
  switch (action.type) {
    case ADD_USER:
    case UPDATE_USER:
      return action.payload;
    case LOGOUT_USER:
      return null;
    default:
      return state;
  }
};

export const getUserSelector = (state) => state.user;

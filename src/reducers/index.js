import { combineReducers } from "redux";
import topRatedMovies from "./topratedReducer";

export default combineReducers({
  topRatedMovies: topRatedMovies,
});

import { combineReducers } from "redux";
import topRatedMovies from "./topratedReducer";
import popularMovies from "./popularMovies";

export default combineReducers({
  topRatedMovies: topRatedMovies,
  popularMovies: popularMovies,
});

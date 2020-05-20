import { combineReducers } from "redux";
import topRatedMovies from "./topratedReducer";
import popularMovies from "./popularMovies";
import moviesByKeyword from "./moviesByKeyword";

export default combineReducers({
  topRatedMovies: topRatedMovies,
  popularMovies: popularMovies,
  moviesByKeyword: moviesByKeyword,
});

import { combineReducers } from "redux";
import topRatedMovies from "./topratedReducer";
import popularMovies from "./popularMovies";
import moviesByKeyword from "./moviesByKeyword";
import upcomingMovies from "./upcomingMovies";

export default combineReducers({
  topRatedMovies: topRatedMovies,
  popularMovies: popularMovies,
  moviesByKeyword: moviesByKeyword,
  upcomingMovies: upcomingMovies,
});

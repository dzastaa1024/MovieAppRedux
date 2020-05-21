import { combineReducers } from "redux";
import topRatedMovies from "./topratedReducer";
import popularMovies from "./popularMovies";
import moviesByKeyword from "./moviesByKeyword";
import upcomingMovies from "./upcomingMovies";
import tvShows from "./tvShows";
import keywordReducer from "./keywordReducer";
import modalReducer from "./modalReducer";
import clikedMovie from "./clikedMovieReducer";

export default combineReducers({
  topRatedMovies: topRatedMovies,
  popularMovies: popularMovies,
  moviesByKeyword: moviesByKeyword,
  upcomingMovies: upcomingMovies,
  tvShows: tvShows,
  keyword: keywordReducer,
  isModal: modalReducer,
  clikedMovie: clikedMovie,
});

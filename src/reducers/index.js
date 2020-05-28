import { combineReducers } from "redux";
import apiReducer from "./apiReducer";
import keywordReducer from "./keywordReducer";
import modalReducer from "./modalReducer";
import clikedMovie from "./clikedMovieReducer";
import addMovieToWatchList from "./addMovieToWatchPage";
import userReducer from "./userReducer";
import toggleGenreFilters from "./filterReducer";
import toggleLanguageFilters from "./filterReducer";

export default combineReducers({
  keyword: keywordReducer,
  isModal: modalReducer,
  clikedMovie: clikedMovie,
  watchList: addMovieToWatchList,
  dataApi: apiReducer,
  user: userReducer,
  activeGenreFilter: toggleGenreFilters,
  activeLanguageFilter: toggleLanguageFilters,
});

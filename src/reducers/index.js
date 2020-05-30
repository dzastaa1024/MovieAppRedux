import { combineReducers } from "redux";
import apiReducer from "./apiReducer";
import keywordReducer from "./keywordReducer";
import modalReducer from "./modalReducer";
import clikedMovie from "./clikedMovieReducer";
import addMovieToWatchList from "./addMovieToWatchPage";
import userReducer from "./userReducer";
import toggleGenreFilters from "./filterReducer";
import toggleLanguageFilters from "./filterReducer";

// SELECTORS
import { getUserSelector } from "./userReducer";
import { getKeywordSelector } from "./keywordReducer";
import {
  getActiveGenreFilterSelector,
  getActiveLanguageFilterSelector,
} from "./filterReducer";
import {
  getMoviesByKeywordSelector,
  getTopRatedMoviesSelector,
  getPopularMoviessSelector,
} from "./apiReducer";

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

export {
  getUserSelector,
  getMoviesByKeywordSelector,
  getTopRatedMoviesSelector,
  getPopularMoviessSelector,
  getKeywordSelector,
  getActiveGenreFilterSelector,
  getActiveLanguageFilterSelector,
};

import { FETCH_PopularMovies } from "../actions/types";
import { FETCH_TopRatedMovies } from "../actions/types";
import { FETCH_MoviesByKeyword } from "../actions/types";
import { FETCH_UpcomingMovies } from "../actions/types";
import { FETCH_TVShowsPopular } from "../actions/types";
import { FETCH_Genres } from "../actions/types";
import { FETCH_AllMoviesAndTvShows } from "../actions/types";
import { FETCH_Languages } from "../actions/types";

const INITIAL_STATE = {
  topRatedMovies: [],
  popularMovies: [],
  moviesByKeyword: [],
  upcomingMovies: [],
  tvShows: [],
  genres: [],
  allMoviesAndTvShows: [],
  languages: [],
};

const apiReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_PopularMovies:
      return {
        ...state,
        popularMovies: action.payload,
      };
    case FETCH_TopRatedMovies:
      return {
        ...state,
        topRatedMovies: action.payload,
      };

    case FETCH_MoviesByKeyword:
      return {
        ...state,
        moviesByKeyword: action.payload,
      };
    case FETCH_UpcomingMovies:
      return {
        ...state,
        upcomingMovies: action.payload,
      };
    case FETCH_TVShowsPopular:
      return {
        ...state,
        tvShows: action.payload,
      };
    case FETCH_Genres:
      return {
        ...state,
        genres: action.payload,
      };
    case FETCH_AllMoviesAndTvShows:
      return {
        ...state,
        allMoviesAndTvShows: action.payload,
      };
    case FETCH_Languages:
      return {
        ...state,
        languages: action.payload,
      };
    default:
      return state;
  }
};

export default apiReducer;

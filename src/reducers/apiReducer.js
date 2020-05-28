import * as type from "../actions/types";

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
    case type.FETCH_PopularMovies:
      return {
        ...state,
        popularMovies: action.payload,
      };
    case type.FETCH_TopRatedMovies:
      return {
        ...state,
        topRatedMovies: action.payload,
      };

    case type.FETCH_MoviesByKeyword:
      return {
        ...state,
        moviesByKeyword: action.payload,
      };
    case type.FETCH_UpcomingMovies:
      return {
        ...state,
        upcomingMovies: action.payload,
      };
    case type.FETCH_TVShowsPopular:
      return {
        ...state,
        tvShows: action.payload,
      };
    case type.FETCH_Genres:
      return {
        ...state,
        genres: action.payload,
      };
    case type.FETCH_AllMoviesAndTvShows:
      return {
        ...state,
        allMoviesAndTvShows: action.payload,
      };
    case type.FETCH_Languages:
      return {
        ...state,
        languages: action.payload,
      };
    default:
      return state;
  }
};

export default apiReducer;

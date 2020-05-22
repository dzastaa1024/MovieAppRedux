const INITIAL_STATE = {
  topRatedMovies: [],
  popularMovies: [],
  moviesByKeyword: [],
  upcomingMovies: [],
  tvShows: [],
};

const apiReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "FETCH_PopularMovies":
      return {
        ...state,
        popularMovies: action.payload,
      };
    case "FETCH_TopRatedMovies":
      return {
        ...state,
        topRatedMovies: action.payload,
      };

    case "FETCH_MoviesByKeyword":
      return {
        ...state,
        moviesByKeyword: action.payload,
      };
    case "FETCH_UpcomingMovies":
      return {
        ...state,
        upcomingMovies: action.payload,
      };
    case "FETCH_TVShowsPopular":
      return {
        ...state,
        tvShows: action.payload,
      };
    default:
      return state;
  }
};

export default apiReducer;

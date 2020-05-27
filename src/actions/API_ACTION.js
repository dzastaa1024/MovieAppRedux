import movieDB from "../api/movieDB";

export const fetchTopRatedMovies = () => async (dispatch) => {
  const url = `/3/movie/top_rated?api_key=${process.env.REACT_APP_APIkey}`;

  const res = await movieDB.get(url);
  dispatch({ type: "FETCH_TopRatedMovies", payload: res.data.results });
};

export const fetchPopularMovies = () => async (dispatch) => {
  const url = `/3/movie/popular?api_key=${process.env.REACT_APP_APIkey}`;

  const res = await movieDB.get(url);
  dispatch({ type: "FETCH_PopularMovies", payload: res.data.results });
};

export const fetchMoviesByKeyword = (keyword) => async (dispatch) => {
  const url = `/3/search/movie?api_key=${process.env.REACT_APP_APIkey}&query=${keyword}`;

  const res = await movieDB.get(url);
  dispatch({ type: "FETCH_MoviesByKeyword", payload: res.data.results });
};

export const fetchMoviesUpcoming = () => async (dispatch) => {
  const url = `/3/movie/upcoming?api_key=${process.env.REACT_APP_APIkey}`;

  const res = await movieDB.get(url);
  dispatch({ type: "FETCH_UpcomingMovies", payload: res.data.results });
};

export const fetchTVShowsPopular = () => async (dispatch) => {
  const url = `/3/tv/popular?api_key=${process.env.REACT_APP_APIkey}`;

  const res = await movieDB.get(url);
  dispatch({ type: "FETCH_TVShowsPopular", payload: res.data.results });
};

export const fetchGenre = () => async (dispatch) => {
  const url = `/3/genre/movie/list?api_key=${process.env.REACT_APP_APIkey}`;

  const res = await movieDB.get(url);
  dispatch({ type: "FETCH_Genres", payload: res.data.genres });
};

export const fetchAllMoviesAndTvShows = (keyword) => async (dispatch) => {
  const url = `/3/search/multi?api_key=${process.env.REACT_APP_APIkey}&query=${keyword}`;

  const res = await movieDB.get(url);
  dispatch({ type: "FETCH_AllMoviesAndTvShows", payload: res.data.results });
};

export const fetchLanguages = () => async (dispatch) => {
  const url = `/3/configuration/languages?api_key=${process.env.REACT_APP_APIkey}`;

  const res = await movieDB.get(url);

  dispatch({ type: "FETCH_Languages", payload: res.data });
};

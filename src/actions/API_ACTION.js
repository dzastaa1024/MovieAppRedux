import movieDB from "../api/movieDB";
import _ from "lodash";

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

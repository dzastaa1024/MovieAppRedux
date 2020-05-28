import { ADD_MOVIE_TO_WATCHPAGE } from "./types";

export const addMovieToWatchPage = (movie) => {
  return {
    type: ADD_MOVIE_TO_WATCHPAGE,
    payload: movie,
  };
};

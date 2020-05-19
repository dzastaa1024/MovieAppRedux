import movieDB from "../api/movieDB";
import _ from "lodash";

export const fetchTopRatedMovies = () => async (dispatch) => {
  const url = `/3/movie/top_rated?api_key=${process.env.REACT_APP_APIkey}`;

  const res = await movieDB.get(url);

  dispatch({ type: "FETCH_TopRatedMovies", payload: res.data.results });
};

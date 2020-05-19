export default (state = [], action) => {
  switch (action.type) {
    case "FETCH_PopularMovies":
      return action.payload;
    default:
      return state;
  }
};

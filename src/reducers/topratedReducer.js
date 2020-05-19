export default (state = [], action) => {
  switch (action.type) {
    case "FETCH_TopRatedMovies":
      return action.payload;
    default:
      return state;
  }
};

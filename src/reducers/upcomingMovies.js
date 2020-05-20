export default (state = [], action) => {
  switch (action.type) {
    case "FETCH_UpcomingMovies":
      return action.payload;
    default:
      return state;
  }
};

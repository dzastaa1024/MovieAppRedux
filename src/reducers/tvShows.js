export default (state = [], action) => {
  switch (action.type) {
    case "FETCH_TVShowsPopular":
      return action.payload;
    default:
      return state;
  }
};

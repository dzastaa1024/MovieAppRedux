export default (state = [], action) => {
  switch (action.type) {
    case "FETCH_MoviesByKeyword":
      return action.payload;
    default:
      return state;
  }
};

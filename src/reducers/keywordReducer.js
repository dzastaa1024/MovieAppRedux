export default (state = "", action) => {
  switch (action.type) {
    case "UPDATE_KEYWORD":
      return action.payload;
    default:
      return state;
  }
};

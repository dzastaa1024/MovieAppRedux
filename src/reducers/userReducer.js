export default (state = null, action) => {
  switch (action.type) {
    case "ADD_USER":
    case "UPDATE_USER":
      return action.payload;
    case "LOGOUT_USER":
      return null;
    default:
      return state;
  }
};

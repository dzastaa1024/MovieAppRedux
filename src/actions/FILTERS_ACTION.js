export const toggleGenreFilters = (id) => {
  return {
    type: "TOGGLE_GENRE_FILTER",
    payload: id,
  };
};

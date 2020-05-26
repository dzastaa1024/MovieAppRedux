const INIT_STATE = {
  genres: [],
  languages: [],
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case "TOGGLE_GENRE_FILTER":
      const filterId = action.payload;
      const isActiveFilter = state.genres.includes(filterId);

      if (isActiveFilter) {
        const activeFilters = state.genres.filter((genreId) => {
          return genreId !== filterId;
        });
        return {
          ...state,
          genres: activeFilters,
        };
      } else {
        return {
          ...state,
          genres: [...state.genres, action.payload],
        };
      }

    default:
      return state;
  }
};

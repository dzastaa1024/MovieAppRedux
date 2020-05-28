export const toggleGenreFilters = (id) => {
  return {
    type: "TOGGLE_GENRE_FILTER",
    payload: id,
  };
};

export const toggleLanguageFilters = (language) => {
  return {
    type: "TOGGLE_LANGUAGE_FILTER",
    payload: language,
  };
};

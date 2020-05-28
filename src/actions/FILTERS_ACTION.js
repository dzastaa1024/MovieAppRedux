import { TOGGLE_GENRE_FILTER, TOGGLE_LANGUAGE_FILTER } from "./types";

export const toggleGenreFilters = (id) => {
  return {
    type: TOGGLE_GENRE_FILTER,
    payload: id,
  };
};

export const toggleLanguageFilters = (language) => {
  return {
    type: TOGGLE_LANGUAGE_FILTER,
    payload: language,
  };
};

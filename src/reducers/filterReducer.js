import { TOGGLE_GENRE_FILTER, TOGGLE_LANGUAGE_FILTER } from "../actions/types";

const INIT_STATE = {
  genres: [],
  languages: [],
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case TOGGLE_GENRE_FILTER:
      const filterId = action.payload;
      const isActiveGenreFilter = state.genres.includes(filterId);

      if (isActiveGenreFilter) {
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

    case TOGGLE_LANGUAGE_FILTER:
      const filterLanguage = action.payload;
      const isActiveLanguageFilter = state.languages.includes(filterLanguage);

      if (isActiveLanguageFilter) {
        const activeFilters = state.languages.filter((filterLang) => {
          return filterLang !== filterLanguage;
        });
        return {
          ...state,
          languages: activeFilters,
        };
      } else {
        return {
          ...state,
          languages: [...state.languages, action.payload],
        };
      }

    default:
      return state;
  }
};

import React, { Component } from "react";
import { Wrapper } from "./style";
import { connect } from "react-redux";
import { fetchPopularMovies, fetchMoviesByKeyword } from "../../actions";

import MovieList from "../../components/MovieList";

class MoviePage extends Component {
  componentDidMount() {
    this.props.fetchPopularMovies();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.keyword !== this.props.keyword) {
      this.props.fetchMoviesByKeyword(this.props.keyword);
    }
  }

  render() {
    const {
      popularMovies,
      moviesByKeyword,
      activeGenreFilter,
      activeLanguageFilter,
    } = this.props;

    const isMovieBykeyword = moviesByKeyword.length > 0;

    let moviesToRender = moviesByKeyword;

    if (moviesToRender) {
      activeGenreFilter.forEach((filterId) => {
        moviesToRender = moviesToRender.filter((movie) => {
          return (
            (movie.genre_ids && movie.genre_ids.includes(filterId)) ||
            (movie.genre && movie.genre === filterId)
          );
        });
      });
    }

    if (moviesToRender && activeLanguageFilter.length > 0) {
      activeLanguageFilter.forEach((filterLanguage) => {
        moviesToRender = moviesToRender.filter((movie) => {
          return (
            movie.original_language &&
            movie.original_language === filterLanguage
          );
        });
      });
    }

    return (
      <Wrapper>
        <MovieList movies={isMovieBykeyword ? moviesToRender : popularMovies} />
      </Wrapper>
    );
  }
}

const popularMoviesSelector = (state) => state.dataApi.popularMovies;

const mapStateToProps = (state) => {
  return {
    popularMovies: popularMoviesSelector(state),
    moviesByKeyword: state.dataApi.moviesByKeyword,
    keyword: state.keyword,
    isModal: state.isModal,
    activeGenreFilter: state.activeGenreFilter.genres,
    activeLanguageFilter: state.activeLanguageFilter.languages,
  };
};

export default connect(mapStateToProps, {
  fetchPopularMovies,
  fetchMoviesByKeyword,
})(MoviePage);

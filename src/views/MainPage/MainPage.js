import React, { Component } from "react";
import { connect } from "react-redux";
import { Wrapper } from "./style";
import {
  fetchTopRatedMovies,
  fetchPopularMovies,
  fetchMoviesByKeyword,
} from "../../actions";

import MovieList from "../../components/MovieList";

class MainPage extends Component {
  componentDidMount() {
    this.props.fetchTopRatedMovies();
    this.props.fetchPopularMovies();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.keyword !== this.props.keyword) {
      this.props.fetchMoviesByKeyword(this.props.keyword);
    }
  }

  render() {
    const {
      topRatedMovies,
      popularMovies,
      activeGenreFilter,
      moviesByKeyword,
      activeLanguageFilter,
    } = this.props;

    const isMoviesBykeyword = moviesByKeyword.length > 0;

    const ratedAndPopularMovies = {
      topRatedMovies,
      popularMovies,
    };

    let moviesToRender = moviesByKeyword;
    if (moviesToRender && activeGenreFilter.length > 0) {
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
        <MovieList
          movies={isMoviesBykeyword ? moviesToRender : ratedAndPopularMovies}
        />
      </Wrapper>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    topRatedMovies: state.dataApi.topRatedMovies,
    popularMovies: state.dataApi.popularMovies,
    moviesByKeyword: state.dataApi.moviesByKeyword,
    keyword: state.keyword,
    isModal: state.isModal,
    activeGenreFilter: state.activeGenreFilter.genres,
    activeLanguageFilter: state.activeLanguageFilter.languages,
  };
};

export default connect(mapStateToProps, {
  fetchTopRatedMovies,
  fetchPopularMovies,
  fetchMoviesByKeyword,
})(MainPage);

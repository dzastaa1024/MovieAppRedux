import React, { Component } from "react";
import { Wrapper } from "./style";
import { connect } from "react-redux";
import { fetchPopularMovies, fetchMoviesByKeyword } from "../../actions";

import MovieList from "../../components/MovieList";
import MovieModal from "../../components/Modal/MovieModal/MovieModal";

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
    const { popularMovies, moviesByKeyword, activeFilter } = this.props;

    const isMovieBykeyword = moviesByKeyword.length > 0;

    let moviesToRender = moviesByKeyword;

    if (moviesToRender) {
      activeFilter.forEach((filterId) => {
        moviesToRender = moviesToRender.filter((movie) => {
          return (
            (movie.genre_ids && movie.genre_ids.includes(filterId)) ||
            (movie.genre && movie.genre === filterId)
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

const mapStateToProps = (state) => {
  return {
    popularMovies: state.dataApi.popularMovies,
    moviesByKeyword: state.dataApi.moviesByKeyword,
    keyword: state.keyword,
    isModal: state.isModal,
    activeFilter: state.activeFilter.genres,
  };
};

export default connect(mapStateToProps, {
  fetchPopularMovies,
  fetchMoviesByKeyword,
})(MoviePage);

import React, { Component } from "react";
import { connect } from "react-redux";
import { Wrapper } from "./style";
import {
  fetchTopRatedMovies,
  fetchPopularMovies,
  fetchMoviesByKeyword,
} from "../../actions";

import MovieList from "../../components/MovieList";
import MovieModal from "../../components/Modal/MovieModal/MovieModal";

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
      activeFilter,
      moviesByKeyword,
    } = this.props;

    const isMoviesBykeyword = moviesByKeyword.length > 0;

    const ratedAndPopularMovies = {
      topRatedMovies,
      popularMovies,
    };

    if (moviesByKeyword) {
      activeFilter.forEach((filterId) => {
        const filterArray = moviesByKeyword.filter((movie) => {
          return (
            (movie.genre_ids && movie.genre_ids.includes(filterId)) ||
            (movie.genre && movie.genre === filterId)
          );
        });
        console.log("filterArray", filterArray);
      });
    }

    return (
      <Wrapper>
        <MovieList
          movies={
            isMoviesBykeyword
              ? this.props.moviesByKeyword
              : ratedAndPopularMovies
          }
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
    activeFilter: state.activeFilter.genres,
  };
};

export default connect(mapStateToProps, {
  fetchTopRatedMovies,
  fetchPopularMovies,
  fetchMoviesByKeyword,
})(MainPage);

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
    const { topRatedMovies, popularMovies, isModal } = this.props;

    const isMovieBykeyword = this.props.moviesByKeyword.length > 0;

    const ratedAndPopularMovies = {
      topRatedMovies,
      popularMovies,
    };

    return (
      <Wrapper>
        <MovieList
          movies={
            isMovieBykeyword
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
  };
};

export default connect(mapStateToProps, {
  fetchTopRatedMovies,
  fetchPopularMovies,
  fetchMoviesByKeyword,
})(MainPage);

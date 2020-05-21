import React, { Component } from "react";
import styled from "styled-components";
import { Wrapper } from "../views/MainPage";
import { connect } from "react-redux";
import { fetchPopularMovies, fetchMoviesByKeyword } from "../actions";

import MovieList from "../components/MovieList";

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
    const { popularMovies } = this.props;
    console.log("popularMovies", popularMovies);

    const isMovieBykeyword = this.props.moviesByKeyword.length > 0;

    return (
      <Wrapper>
        <MovieList
          movies={isMovieBykeyword ? this.props.moviesByKeyword : popularMovies}
        />
      </Wrapper>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    popularMovies: state.popularMovies,
    moviesByKeyword: state.moviesByKeyword,
    keyword: state.keyword,
  };
};

export default connect(mapStateToProps, {
  fetchPopularMovies,
  fetchMoviesByKeyword,
})(MoviePage);

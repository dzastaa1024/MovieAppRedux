import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import {
  fetchTopRatedMovies,
  fetchPopularMovies,
  fetchMoviesByKeyword,
} from "../actions";

import MovieList from "../components/MovieList";

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
    const { topRatedMovies, popularMovies } = this.props;

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
    topRatedMovies: state.topRatedMovies,
    popularMovies: state.popularMovies,
    moviesByKeyword: state.moviesByKeyword,
    keyword: state.keyword,
  };
};

export default connect(mapStateToProps, {
  fetchTopRatedMovies,
  fetchPopularMovies,
  fetchMoviesByKeyword,
})(MainPage);

export const Wrapper = styled.div`
  padding: 2rem;
  background-color: #18171f;
  margin-left: 20rem;
  margin-top: 10rem;
  border-top-left-radius: 40px;
  width: calc(100% - 2 * 200px);
  min-height: 100%;
`;

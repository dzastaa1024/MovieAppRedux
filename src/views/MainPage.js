import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { fetchTopRatedMovies, fetchPopularMovies } from "../actions";

import Scroll from "../components/Scroll";
import MovieList from "../components/MovieList";

class MainPage extends Component {
  componentDidMount() {
    this.props.fetchTopRatedMovies();
    this.props.fetchPopularMovies();
  }

  render() {
    const { topRatedMovies, popularMovies } = this.props;
    console.log("this.props.moviesByKeyword", this.props.moviesByKeyword);

    const isMovieBykeyword = this.props.moviesByKeyword.length > 0;

    const ratedAndPopularMovies = {
      topRatedMovies,
      popularMovies,
    };

    console.log("propsy", topRatedMovies);
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
  };
};

export default connect(mapStateToProps, {
  fetchTopRatedMovies,
  fetchPopularMovies,
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

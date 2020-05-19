import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { fetchTopRatedMovies } from "../actions";

import Scroll from "../components/Scroll";
import MovieList from "../components/MovieList";

class MainPage extends Component {
  componentDidMount() {
    this.props.fetchTopRatedMovies();
    console.log("propsy");
  }

  render() {
    return (
      <Wrapper>
        <Scroll>
          MainPage
          <MovieList />
        </Scroll>
      </Wrapper>
    );
  }
}

export const Wrapper = styled.div`
  padding: 2rem;
  background-color: #18171f;
  margin-left: 20rem;
  margin-top: 10rem;
  border-top-left-radius: 40px;
  width: calc(100% - 2 * 200px);
  min-height: 100%;

  border: 1px solid red;
`;

const mapStateToProps = (state) => {
  console.log("state", state);
  return {
    topRatedMovies: state.topRatedMovies,
  };
};

export default connect(mapStateToProps, { fetchTopRatedMovies })(MainPage);

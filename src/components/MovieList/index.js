import React, { Component } from "react";
import styled from "styled-components";

import MovieItem from "../MovieItem";

class MovieList extends Component {
  render() {
    return (
      <Wrapper>
        <Title>Results</Title>
        <List>
          <MovieItem />
        </List>
      </Wrapper>
    );
  }
}

const Wrapper = styled.div``;

const List = styled.ul``;

const Title = styled.p``;

export default MovieList;

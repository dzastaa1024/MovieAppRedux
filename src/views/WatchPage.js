import React, { Component } from "react";
import styled from "styled-components";

import MovieList from "../components/MovieList";

export default class SidebarNews extends Component {
  render() {
    return (
      <Wrapper>
        <MovieList />
      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
  height: calc(100% - 1 * 100px);
  padding: 2rem;
  background-color: #18171f;
  margin-left: 20rem;
  margin-top: 10rem;
  border-top-left-radius: 40px;
  width: calc(100% - 2 * 200px);
`;

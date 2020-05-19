import React, { Component } from "react";
import styled from "styled-components";

import Scroll from "../components/Scroll";
import { Wrapper } from "../views/MainPage";
import MovieList from "../components/MovieList";

export default class SidebarNews extends Component {
  render() {
    return (
      <Wrapper>
        <Scroll>
          <MovieList />;
        </Scroll>
      </Wrapper>
    );
  }
}

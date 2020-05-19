import React, { Component } from "react";
import styled from "styled-components";
import { Wrapper } from "./MainPage";
import Scroll from "../components/Scroll";
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

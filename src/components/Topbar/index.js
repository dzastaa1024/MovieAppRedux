import React, { Component } from "react";
import styled from "styled-components";

export default class Topbar extends Component {
  render() {
    return (
      <Wrapper>
        <LeftWrapper></LeftWrapper>
        <MiddleWrapper></MiddleWrapper>
        <RightWrapper></RightWrapper>
      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
  border: 1px solid black;
  width: 100%;
  height: 10rem;
  position: fixed;
  display: flex;
  justify-content: space-between;
  padding: 0 2rem;
  align-items: center;
  background-color: black;
`;

const LeftWrapper = styled.div``;

const MiddleWrapper = styled.div``;

const RightWrapper = styled.div``;

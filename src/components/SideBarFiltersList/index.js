import React, { Component } from "react";
import styled from "styled-components";

import Scroll from "../Scroll";

export default class SideBarFiltersList extends Component {
  render() {
    return (
      <Wrapper>
        <Title>Side bar news </Title>
        <Scroll>
          <List></List>
        </Scroll>
      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
  padding: 2rem;
  color: #d4d4d4;
  font-size: 1.3rem;
  height: 50%;
  overflow: hidden;
`;

const List = styled.ul`
  cursor: pointer;
  padding: 0.5rem;
`;

const Title = styled.h2`
  padding-bottom: 2rem;
  color: #d4d4d4;
`;

import React, { Component } from "react";
import styled from "styled-components";

import SideBarFiltersList from "../SideBarFiltersList";

export default class SidebarFilters extends Component {
  render() {
    return (
      <Wrapper>
        <SideBarFiltersList />
        <SideBarFiltersList />
      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
  border: 1px solid black;
  background-color: black;
  width: 20rem;
  position: fixed;
  top: 10rem;
  bottom: 0;
  left: 0;
`;

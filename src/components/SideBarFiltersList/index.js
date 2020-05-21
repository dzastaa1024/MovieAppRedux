import React, { Component } from "react";
import { Wrapper, List, Title } from "./style";

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

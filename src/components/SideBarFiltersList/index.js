import React, { Component } from "react";
import { Wrapper, List, Title } from "./style";

import Scroll from "../Scroll";

export default class SideBarFiltersList extends Component {
  render() {
    const { genres } = this.props;

    return (
      <Wrapper>
        <Title>Side bar news </Title>
        <Scroll>
          <List>
            {genres
              ? genres.map((genre) => {
                  return <li>{genre.name}</li>;
                })
              : null}
          </List>
        </Scroll>
      </Wrapper>
    );
  }
}

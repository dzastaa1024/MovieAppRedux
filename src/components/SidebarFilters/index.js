import React, { Component } from "react";
import { Wrapper } from "./style";

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

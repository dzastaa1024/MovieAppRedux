import React from "react";
import { ScrollWrapper } from "./style";

const Scroll = (props) => {
  return <ScrollWrapper>{props.children}</ScrollWrapper>;
};

export default Scroll;

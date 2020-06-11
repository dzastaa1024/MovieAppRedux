import React from "react";
import {
  Wrapper,
  LeftWrapper,
  MiddleWrapper,
  Input,
  RightWrapper,
  CameraIcon,
} from "./style";
import { connect } from "react-redux";
import { updateKeyword } from "../../actions";
import { Link } from "react-router-dom";

import TopBarList from "../TopBarList";

const Topbar = ({ updateKeyword, keyword }) => {
  const handleChange = (e) => {
    updateKeyword(e.target.value);
  };

  return (
    <Wrapper>
      <LeftWrapper>
        <Link to={"/"}>
          <CameraIcon />
        </Link>
      </LeftWrapper>
      <MiddleWrapper>
        <Input
          onChange={handleChange}
          value={keyword}
          placeholder="Search any movies or tv shows"
        />
      </MiddleWrapper>
      <RightWrapper>
        <TopBarList />
      </RightWrapper>
    </Wrapper>
  );
};

const mapStateToProps = (state) => {
  return {
    keyword: state.keyword,
  };
};

export default connect(mapStateToProps, {
  updateKeyword,
})(Topbar);

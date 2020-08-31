import React from "react";
import {
  Wrapper,
  LeftWrapper,
  MiddleWrapper,
  Input,
  RightWrapper,
  CameraIcon,
} from "./style";
import { useDispatch, useSelector } from "react-redux";
import { updateKeyword } from "../../actions";
import { Link } from "react-router-dom";

import TopBarList from "../TopBarList";

const Topbar = () => {
  const keyword = useSelector(state => state.keyword);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(updateKeyword(e.target.value));
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



export default Topbar;

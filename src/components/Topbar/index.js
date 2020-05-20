import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { updateKeyword } from "../../actions";
import { Link } from "react-router-dom";
import * as boxiconsSolid from "@styled-icons/boxicons-solid";

import TopBarList from "../TopBarList";

class Topbar extends Component {
  handleChange = (e) => {
    this.props.updateKeyword(e.target.value);
  };

  render() {
    return (
      <Wrapper>
        <LeftWrapper>
          <Link to={"/"}>
            <CameraIcon />
          </Link>
        </LeftWrapper>
        <MiddleWrapper>
          <Input
            onChange={this.handleChange}
            value={this.props.keyword}
            placeholder="Search any movies or tv shows"
          />
        </MiddleWrapper>
        <RightWrapper>
          <TopBarList />
        </RightWrapper>
      </Wrapper>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    keyword: state.keyword,
  };
};

export default connect(mapStateToProps, {
  updateKeyword,
})(Topbar);

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

const Input = styled.input`
  width: 35rem;
  height: 3.4rem;
  border-radius: 20px;
  border: none;
  background-color: #17161f;
  text-align: center;
  font-size: 2rem;
  font-weight: 100;
  color: white;
  outline: none;
`;

const RightWrapper = styled.div``;

const CameraIcon = styled(boxiconsSolid.CameraMovie)`
  width: 6rem;
  height: 6rem;
  color: #ecff34;
`;

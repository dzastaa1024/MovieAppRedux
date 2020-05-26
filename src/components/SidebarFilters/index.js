import React, { Component } from "react";
import { Wrapper } from "./style";
import { connect } from "react-redux";
import { fetchGenre } from "../../actions/API_ACTION";

import SideBarFiltersList from "../SideBarFiltersList";

class SidebarFilters extends Component {
  componentDidMount() {
    this.props.fetchGenre();
  }

  render() {
    console.log(this.props.genres);
    return (
      <Wrapper>
        <SideBarFiltersList genres={this.props.genres}></SideBarFiltersList>
        <SideBarFiltersList />
      </Wrapper>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    genres: state.dataApi.genres,
  };
};

export default connect(mapStateToProps, { fetchGenre })(SidebarFilters);

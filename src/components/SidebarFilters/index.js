import React, { Component } from "react";
import { Wrapper } from "./style";
import { connect } from "react-redux";
import { fetchGenre, fetchLanguages } from "../../actions/API_ACTION";

import SideBarFiltersList from "../SideBarFiltersList";

class SidebarFilters extends Component {
  componentDidMount() {
    this.props.fetchGenre();
    this.props.fetchLanguages();
  }

  render() {
    const { genres, languages } = this.props;
    return (
      <Wrapper>
        <SideBarFiltersList
          filters={genres}
          filterKey="genres"
          title={"Genres"}
        />
        <SideBarFiltersList
          filters={languages}
          filterKey="languages"
          title={"Languages"}
        />
      </Wrapper>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    genres: state.dataApi.genres,
    languages: state.dataApi.languages,
  };
};

export default connect(mapStateToProps, { fetchGenre, fetchLanguages })(
  SidebarFilters
);

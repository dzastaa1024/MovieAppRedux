import React, { useEffect } from "react";
import { Wrapper } from "./style";
import { connect } from "react-redux";
import { fetchGenre, fetchLanguages } from "../../actions/API_ACTION";

import SideBarFiltersList from "../SideBarFiltersList";

const SidebarFilters = ({ genres, languages, fetchGenre, fetchLanguages }) => {
  useEffect(() => {
    fetchGenre();
    fetchLanguages();
  }, []);

  // componentDidMount() {
  //   this.props.fetchGenre();
  //   this.props.fetchLanguages();
  // }

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
};

const mapStateToProps = (state) => {
  return {
    genres: state.dataApi.genres,
    languages: state.dataApi.languages,
  };
};

export default connect(mapStateToProps, { fetchGenre, fetchLanguages })(
  SidebarFilters
);

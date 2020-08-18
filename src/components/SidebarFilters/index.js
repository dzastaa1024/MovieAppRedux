import React, { useEffect } from "react";
import { Wrapper } from "./style";
import { useSelector, useDispatch } from "react-redux";
import { fetchGenre, fetchLanguages } from "../../actions/API_ACTION";

import SideBarFiltersList from "../SideBarFiltersList";

const SidebarFilters = () => {
  const genres = useSelector(state => state.dataApi.genres);
  const languages = useSelector(state => state.dataApi.languages);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchGenre());
    dispatch(fetchLanguages());
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


export default SidebarFilters;


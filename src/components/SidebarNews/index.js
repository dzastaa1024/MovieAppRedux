import React, { useEffect } from "react";
import { Wrapper, List, Title } from "./style";
import { fetchMoviesUpcoming } from "../../actions/index";

import MovieList from "../MovieList";
import Scroll from "../Scroll";
import { useSelector, useDispatch } from "react-redux";

const SidebarNews = () => {
  const upcomingMovies = useSelector(state => state.dataApi.upcomingMovies);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMoviesUpcoming());
  }, []);

  // componentDidMount() {
  //   this.props.fetchMoviesUpcoming();
  // }

  return (
    <Wrapper>
      <Scroll>
        <List>
          <Title>Upcoming Movies</Title>
          <MovieList movies={upcomingMovies} sidebarNews />
        </List>
      </Scroll>
    </Wrapper>
  );
};

export default SidebarNews;

import React, { Component } from "react";
import { Wrapper, List, Title } from "./style";
import { fetchMoviesUpcoming } from "../../actions/index";

import MovieList from "../MovieList";
import Scroll from "../Scroll";
import { connect } from "react-redux";

class SidebarNews extends Component {
  componentDidMount() {
    this.props.fetchMoviesUpcoming();
  }

  render() {
    const { upcomingMovies } = this.props;

    return (
      <Wrapper>
        <Scroll>
          <List>
            <Title>Upcoming Movies</Title>
            <MovieList movies={upcomingMovies} />
          </List>
        </Scroll>
      </Wrapper>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    upcomingMovies: state.upcomingMovies,
  };
};

export default connect(mapStateToProps, { fetchMoviesUpcoming })(SidebarNews);

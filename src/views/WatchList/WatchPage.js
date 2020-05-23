import React, { Component } from "react";
import MovieList from "../../components/MovieList";
import { Wrapper } from "./style";
import { connect } from "react-redux";

class WatchPage extends Component {
  render() {
    const { watchList } = this.props;
    return (
      <Wrapper>
        <MovieList movies={watchList} />
      </Wrapper>
    );
  }
}

const mapStateToprops = (state) => {
  return {
    watchList: state.watchList,
  };
};

export default connect(mapStateToprops)(WatchPage);

import React, { Component } from "react";
import styled from "styled-components";
import { Wrapper } from "../views/MainPage";
import { connect } from "react-redux";
import { fetchTVShowsPopular } from "../actions";

import MovieList from "../components/MovieList";

class TVPage extends Component {
  state = {
    filteredTVShows: [],
  };

  componentDidMount() {
    this.props.fetchTVShowsPopular();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.keyword !== this.props.keyword) {
      const filteredTVShows = this.props.tvShows.filter((tvshow) => {
        return (
          tvshow.name
            .toLowerCase()
            .includes(this.props.keyword.toLowerCase()) ||
          tvshow.original_name
            .toLowerCase()
            .includes(this.props.keyword.toLowerCase())
        );
      });
      this.setState({
        filteredTVShows: filteredTVShows,
      });
    }
  }

  render() {
    const { tvShows, keyword } = this.props;
    const { filteredTVShows } = this.state;

    const movieToRender = keyword ? filteredTVShows : tvShows;
    return (
      <Wrapper>
        {keyword && !filteredTVShows.length && <p>0 results</p>}
        <MovieList movies={movieToRender} />
      </Wrapper>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    tvShows: state.tvShows,
    keyword: state.keyword,
  };
};

export default connect(mapStateToProps, { fetchTVShowsPopular })(TVPage);

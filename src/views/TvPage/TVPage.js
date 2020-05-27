import React, { Component } from "react";
import { Wrapper } from "./style";
import { connect } from "react-redux";
import { fetchTVShowsPopular } from "../../actions";

import MovieList from "../../components/MovieList";
import MovieModal from "../../components/Modal/MovieModal/MovieModal";

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
    const { tvShows, keyword, activeFilter } = this.props;
    const { filteredTVShows } = this.state;

    //const movieToRender = keyword ? filteredTVShows : tvShows;

    let moviesToRender = filteredTVShows;

    if (moviesToRender) {
      activeFilter.forEach((filterId) => {
        moviesToRender = moviesToRender.filter((movie) => {
          return (
            (movie.genre_ids && movie.genre_ids.includes(filterId)) ||
            (movie.genre && movie.genre === filterId)
          );
        });
      });
    }

    return (
      <Wrapper>
        {/* {keyword && !filteredTVShows.length && <p>0 results</p>}
        <MovieList movies={movieToRender} /> */}
        <MovieList movies={keyword ? moviesToRender : tvShows} />
      </Wrapper>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    tvShows: state.dataApi.tvShows,
    keyword: state.keyword,
    isModal: state.isModal,
    activeFilter: state.activeFilter.genres,
  };
};

export default connect(mapStateToProps, { fetchTVShowsPopular })(TVPage);

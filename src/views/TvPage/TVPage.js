import React, { Component } from "react";
import { Wrapper } from "./style";
import { connect } from "react-redux";
import { fetchTVShowsPopular } from "../../actions";

import MovieList from "../../components/MovieList";

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
    const {
      tvShows,
      keyword,
      activeGenreFilter,
      activeLanguageFilter,
    } = this.props;
    const { filteredTVShows } = this.state;

    let moviesToRender = filteredTVShows;

    if (moviesToRender) {
      activeGenreFilter.forEach((filterId) => {
        moviesToRender = moviesToRender.filter((movie) => {
          return (
            (movie.genre_ids && movie.genre_ids.includes(filterId)) ||
            (movie.genre && movie.genre === filterId)
          );
        });
      });
    }

    if (moviesToRender && activeLanguageFilter.length > 0) {
      activeLanguageFilter.forEach((filterLanguage) => {
        moviesToRender = moviesToRender.filter((movie) => {
          return (
            movie.original_language &&
            movie.original_language === filterLanguage
          );
        });
      });
    }

    return (
      <Wrapper>
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
    activeGenreFilter: state.activeGenreFilter.genres,
    activeLanguageFilter: state.activeLanguageFilter.languages,
  };
};

export default connect(mapStateToProps, { fetchTVShowsPopular })(TVPage);

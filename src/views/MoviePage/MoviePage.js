import React, { Component } from "react";
import { Wrapper } from "./style";
import { connect } from "react-redux";
import { fetchPopularMovies, fetchMoviesByKeyword } from "../../actions";

import MovieList from "../../components/MovieList";
import MovieModal from "../../components/Modal/MovieModal/MovieModal";

class MoviePage extends Component {
  componentDidMount() {
    this.props.fetchPopularMovies();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.keyword !== this.props.keyword) {
      this.props.fetchMoviesByKeyword(this.props.keyword);
    }
  }

  render() {
    const { popularMovies, isModal } = this.props;
    console.log("popularMovies", popularMovies);

    const isMovieBykeyword = this.props.moviesByKeyword.length > 0;

    return (
      <Wrapper>
        <MovieList
          movies={isMovieBykeyword ? this.props.moviesByKeyword : popularMovies}
        />
        {isModal && <MovieModal />}
      </Wrapper>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    popularMovies: state.popularMovies,
    moviesByKeyword: state.moviesByKeyword,
    keyword: state.keyword,
    isModal: state.isModal,
  };
};

export default connect(mapStateToProps, {
  fetchPopularMovies,
  fetchMoviesByKeyword,
})(MoviePage);

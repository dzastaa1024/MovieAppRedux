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
    const { tvShows, keyword, isModal } = this.props;
    const { filteredTVShows } = this.state;

    const movieToRender = keyword ? filteredTVShows : tvShows;
    return (
      <Wrapper>
        {keyword && !filteredTVShows.length && <p>0 results</p>}
        <MovieList movies={movieToRender} />
        {isModal && <MovieModal />}
      </Wrapper>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    tvShows: state.tvShows,
    keyword: state.keyword,
    isModal: state.isModal,
  };
};

export default connect(mapStateToProps, { fetchTVShowsPopular })(TVPage);

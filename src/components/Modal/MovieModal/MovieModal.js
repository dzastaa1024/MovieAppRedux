import React, { Component } from "react";
import {
  Wrapper,
  Container,
  LeftContent,
  Image,
  RightContent,
  Title,
  Overview,
  Average,
  ReleaseDate,
  ModalBtn,
  Action,
} from "./style";

import Modal from "../index";
import { connect } from "react-redux";
import { addMovieToWatchPage, closeModal } from "../../../actions";

class MovieModal extends Component {
  renderContent() {
    const { clikedMovie, addMovieToWatchPage, closeModal } = this.props;
    return (
      <Wrapper>
        <Container>
          <LeftContent>
            <Image
              src={`https://image.tmdb.org/t/p/w200${clikedMovie.poster_path}`}
            />
          </LeftContent>
          <RightContent>
            <Title>{clikedMovie.title}</Title>
            <Average>{clikedMovie.vote_average}</Average>
            <ReleaseDate>{clikedMovie.release_date}</ReleaseDate>
            <Overview>{clikedMovie.overview}</Overview>
          </RightContent>
        </Container>
        <Action>
          <ModalBtn
            onClick={(() => addMovieToWatchPage(clikedMovie), closeModal)}
          >
            Add to
          </ModalBtn>
          <ModalBtn onClick={closeModal} closing>
            Close
          </ModalBtn>
        </Action>
      </Wrapper>
    );
  }

  render() {
    return (
      <div>
        <Modal
          modalContent={this.renderContent()}
          closeModal={this.props.closeModal}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    clikedMovie: state.clikedMovie,
  };
};

export default connect(mapStateToProps, { addMovieToWatchPage, closeModal })(
  MovieModal
);

import React from "react";
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
import {useSelector, useDispatch} from 'react-redux';
import Modal from "../index";
import { addMovieToWatchPage, closeModal } from "../../../actions";

const MovieModal = () => {
  const clikedMovie = useSelector((state)=> state.clikedMovie);
  const dispatch = useDispatch();

  const renderContent = () => {
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
            onClick={() => {
              dispatch(addMovieToWatchPage(clikedMovie));
              dispatch(closeModal());
            }}
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

    return (
      <div>
        <Modal
          modalContent={renderContent()}
          closeModal={closeModal}
        />
      </div>
    );
  
}

export default MovieModal;

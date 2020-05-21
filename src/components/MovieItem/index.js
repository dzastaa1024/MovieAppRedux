import React from "react";
import styled, { css } from "styled-components";
import { connect } from "react-redux";
import { openModal, selectMovie } from "../../actions";

const MovieItem = ({ movie, openModal, selectMovie }) => {
  return (
    <Item
      onClick={() => {
        console.log("click");
        openModal();
        selectMovie(movie);
      }}
    >
      <Image src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} />
      <Title>{movie.title}</Title>
      {/* {sidebarNews ? (
        <ReleaseDate sidebarNews={sidebarNews}>
          {movie.release_date}
        </ReleaseDate>
      ) : (
        <Average>
          {" "}
          <GoldStar /> {movie.vote_average}
        </Average>
      )} */}
    </Item>
  );
};

export default connect(null, { openModal, selectMovie })(MovieItem);

const Item = styled.li`
  display: flex;
  flex-direction: column;
  flex: 0 1 25%;
  padding: 0 2rem 2rem;
  cursor: pointer;
`;

const Image = styled.img`
  /* width: 100%; */
`;

const Title = styled.p`
  font-size: 1.5rem;
  padding-top: 2rem;
  color: #fff;
`;

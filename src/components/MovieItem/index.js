import React from "react";
import { Item, Image, Title, Average, ReleaseDate, GoldStar } from "./style";
import { connect } from "react-redux";
import { openModal, selectMovie } from "../../actions";

const MovieItem = ({ movie, openModal, selectMovie, sidebarNews }) => {
  return (
    <Item
      onClick={() => {
        openModal();
        selectMovie(movie);
      }}
    >
      <Image src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} />
      <Title>{movie.title}</Title>
      {sidebarNews ? (
        <ReleaseDate sidebarNews={sidebarNews}>
          {movie.release_date}
        </ReleaseDate>
      ) : (
        <Average>
          {" "}
          <GoldStar /> {movie.vote_average}
        </Average>
      )}
    </Item>
  );
};

export default connect(null, { openModal, selectMovie })(MovieItem);

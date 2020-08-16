import React from "react";
import { Item, Image, Title, Average, ReleaseDate, GoldStar } from "./style";
import {useDispatch} from 'react-redux';
import { openModal, selectMovie } from "../../actions";

const MovieItem = ({ movie, sidebarNews }) => {
  const dispatch = useDispatch();
  return (
    <Item
      onClick={() => {
        dispatch(openModal());
        dispatch(selectMovie(movie));
      }}
    >
      <Image src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} />
      <Title sidebarNews={sidebarNews}>{movie.title}</Title>
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

export default MovieItem;

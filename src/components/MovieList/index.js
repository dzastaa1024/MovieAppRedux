import React from "react";
import { Wrapper, List, Slider, Title } from "./style";

import MovieItem from "../MovieItem";

const MovieList = ({ movies, sidebarNews }) => {
  if (Array.isArray(movies)) {
    return (
      <Wrapper>
        <Title sidebarNews={sidebarNews}>Results</Title>
        <List sidebarNews={sidebarNews}>
          {movies.map((movie) => {
            return (
              <MovieItem
                movie={movie}
                key={movie.id}
                sidebarNews={sidebarNews}
              />
            );
          })}
        </List>
      </Wrapper>
    );
  } else {
    const { topRatedMovies, popularMovies } = movies;
    return (
      <>
        <Wrapper>
          <Title>Top rated movies: </Title>
          <Slider>
            {topRatedMovies.map((movie) => {
              return <MovieItem movie={movie} key={movie.id} />;
            })}
          </Slider>
          <Title>Popular movies</Title>
          <Slider>
            {popularMovies.map((movie) => {
              return <MovieItem movie={movie} key={movie.id} />;
            })}
          </Slider>
        </Wrapper>
      </>
    );
  }
};

export default MovieList;

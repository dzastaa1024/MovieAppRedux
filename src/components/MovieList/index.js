import React, { Component } from "react";
import { Wrapper, List, Slider, Title } from "./style";

import MovieItem from "../MovieItem";

class MovieList extends Component {
  render() {
    const { movies } = this.props;

    if (Array.isArray(movies)) {
      return (
        <Wrapper>
          <List>
            {movies.map((movie) => {
              return <MovieItem movie={movie} key={movie.id} />;
            })}
          </List>
        </Wrapper>
      );
    } else {
      const { topRatedMovies, popularMovies } = movies;

      return (
        <>
          <Wrapper>
            <Title>Top rated movies</Title>
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
  }
}

export default MovieList;

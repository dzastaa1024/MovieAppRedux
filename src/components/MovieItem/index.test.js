import React from "react";
import { shallow } from "enzyme";
import MovieItem from "./";
import { Item } from "./style";

describe("MovieItem", () => {
  const initProps = {
    movie: {
      poster_path: "",
      title: "Agata",
      release_date: "20/03/2000",
      vote_average: 2,
    },
  };

  it("should call openModal and selectMovie with movie onClick on item", () => {
    const openModal = jest.fn();
    const selectMovie = jest.fn();

    const wrapper = shallow(
      <MovieItem {...initProps} handleClick={(openModal, selectMovie)} />
    );
    console.log(wrapper.debug());
  });
});

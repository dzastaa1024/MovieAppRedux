import styled, { css } from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const List = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;

  ${(props) =>
    props.sidebarNews &&
    css`
      flex-direction: column;
    `}

  @media (max-width: 750px) {
    flex-direction: column;
  }
`;

const Slider = styled.ul`
  display: flex;
  overflow: hidden;
  overflow-x: scroll;
`;

const Title = styled.p`
  padding-bottom: 2rem;
  color: #fff;
  padding-left: 2rem;

  ${(props) =>
    props.sidebarNews &&
    css`
      display: none;
    `}
`;

export { Wrapper, List, Slider, Title };

import styled, { css } from "styled-components";
import { Star } from "@styled-icons/boxicons-solid/Star";

const Item = styled.li`
  display: flex;
  flex-direction: column;
  flex: 0 1 25%;
  padding: 0 2rem 2rem;
  width: 100%;
  cursor: pointer;
`;

const Image = styled.img`
  /* width: 100%; */
`;

const Title = styled.p`
  font-size: 1.5rem;
  padding-top: 2rem;
  color: #fff;

  ${(props) =>
    props.sidebarNews &&
    css`
      font-size: 1.5rem;
    `}
`;

const Average = styled.p`
  padding-top: 1rem;
  color: white;
`;

const ReleaseDate = styled.p`
  display: none;
  ${(props) =>
    props.sidebarNews &&
    css`
      display: block;
      font-size: 1.5rem;
      color: white;
      padding: 1rem 0;
      font-size: 1rem;
    `}
`;

const GoldStar = styled(Star)`
  color: gold;
  width: 1.5rem;
`;

export { Item, Image, Title, Average, ReleaseDate, GoldStar };

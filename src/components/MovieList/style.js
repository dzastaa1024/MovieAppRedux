import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const List = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Slider = styled.ul`
  display: flex;
  overflow: hidden;
  overflow-x: scroll;
`;

const Title = styled.p`
  padding-bottom: 1rem;
  padding-left: 2rem;
  color: #fff;
`;

export { Wrapper, List, Slider, Title };

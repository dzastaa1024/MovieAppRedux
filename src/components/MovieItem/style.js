import styled from "styled-components";

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

export { Item, Image, Title };

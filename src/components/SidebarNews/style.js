import styled from "styled-components";

const Wrapper = styled.div`
  border: 1px solid black;
  width: 20rem;
  position: fixed;
  top: 10rem;
  bottom: 0;
  right: 0;
  background-color: #232220;
  padding: 2rem;
`;

const List = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.li`
  display: flex;
  padding-bottom: 2rem;
  color: #fff;
  font-size: 2rem;
`;

export { Wrapper, List, Title };

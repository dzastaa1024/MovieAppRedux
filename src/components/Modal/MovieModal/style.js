import styled, { css } from "styled-components";

const Wrapper = styled.div``;

const Container = styled.div`
  display: flex;
`;

const LeftContent = styled.div`
  flex: 1 0 30%;
`;

const Image = styled.img``;

const RightContent = styled.div`
  padding-left: 2rem;
  flex: 1 1 70%;
`;

const Title = styled.h1`
  padding-bottom: 1rem;
`;

const Overview = styled.p`
  text-align: justify;
`;

const Average = styled.span`
  font-size: 1.5rem;
  width: 3rem;
  height: 3rem;
  background-color: #e8df8b;
  color: #fff;
  border-radius: 7px;
  position: absolute;
  right: 2rem;
  top: 2rem;
  text-align: center;
  line-height: 3rem;
`;

const ReleaseDate = styled.p`
  padding-bottom: 1rem;
  font-size: 1.2rem;
  color: #e8df8b;
  bottom: 2rem;
  font-weight: 500;
`;

const ModalBtn = styled.button`
  margin-right: 2rem;
  border-radius: 3px;
  padding: 1rem;
  font-size: 1rem;
  font-weight: 500;
  background-color: #b9c7a9;
  color: white;
  border: none;
  cursor: pointer;
  ${(props) =>
    props.closing &&
    css`
      color: #b9c7a9;
      border: 1px solid #b9c7a9;
      background-color: white;
    `}
`;

const Action = styled.div`
  text-align: right;
`;

export {
  Wrapper,
  Container,
  LeftContent,
  Image,
  RightContent,
  Title,
  Overview,
  Average,
  ReleaseDate,
  ModalBtn,
  Action,
};

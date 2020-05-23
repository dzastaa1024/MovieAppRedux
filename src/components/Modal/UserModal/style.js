import styled, { css } from "styled-components";
import * as boxiconsSolid from "@styled-icons/boxicons-solid";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 5rem;
`;

const TopContent = styled.div`
  text-align: center;
  margin-bottom: 3rem;
`;

const Icon = styled.div`
  width: 9rem;
  height: 9rem;
  color: #cac7c7;
  margin: auto;
`;

const Name = styled.span`
  color: #c7b511;
  font-size: 2rem;
  ${(props) =>
    props.username &&
    css`
      font-size: 3rem;
    `}
`;

const ButtomContent = styled.div`
  display: flex;
  flex-direction: column;
`;

const List = styled.ul``;

const Item = styled.li`
  list-style-type: none;
  border-bottom: 1px solid #ece8e8;
  &:first-child {
    border-top: 1px solid #ece8e8;
  }
`;

const ItemWrapper = styled.span`
  display: block;
  cursor: pointer;
`;

const IconWrapper = styled.span`
  display: inline-block;
  margin: 1.5rem;
`;

const UserDetail = styled(boxiconsSolid.UserDetail)`
  width: 100%;
  height: 100%;
  border: 0.5rem solid #ece8e8;
  border-radius: 50%;
  padding: 4px;
`;

const ListIcon = styled.div`
  width: 6rem;
  height: 6rem;
  border: 2px solid #c7b511;
  border-radius: 50px;
  color: #c7b511;
  padding: 5px;
`;

export {
  Wrapper,
  TopContent,
  Icon,
  Name,
  ButtomContent,
  List,
  Item,
  ItemWrapper,
  IconWrapper,
  UserDetail,
  ListIcon,
};

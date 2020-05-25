import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { User } from "@styled-icons/boxicons-regular/User";

const Menu = styled.ul`
  list-style-type: none;
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
`;

const MenuItem = styled.li``;

const MenuItemNavLink = styled(NavLink)`
  color: grey;
`;

const MenuItemValue = styled.span`
  &:hover {
    color: #ecff34;
  }
`;

const Picture = styled.div`
  width: 3rem;
  height: 3rem;
  border: 1px solid black;
  border-radius: 50px;
`;

const UserIcon = styled(User)`
  color: lightgray;
  cursor: pointer;
`;
export { Menu, MenuItemNavLink, MenuItem, MenuItemValue, Picture, UserIcon };

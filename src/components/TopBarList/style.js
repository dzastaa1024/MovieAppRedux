import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Menu = styled.ul`
  list-style-type: none;
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
`;

const MenuItemNavLink = styled(NavLink)`
  color: grey;
`;

const MenuItem = styled.li``;

const MenuItemValue = styled.span`
  &:hover {
    color: #ecff34;
  }
`;

export { Menu, MenuItemNavLink, MenuItem, MenuItemValue };

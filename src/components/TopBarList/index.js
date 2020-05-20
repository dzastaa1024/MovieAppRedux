import React, { Component } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const menuItems = [
  { btnText: "Movies", to: "/movies" },
  { btnText: "TV Shows", to: "/tvshows" },
  { btnText: "WatchList", to: "/watchlists" },
];

export default class TopBarList extends Component {
  render() {
    return (
      <Menu>
        {menuItems.map((menuItem) => (
          <MenuItemNavLink
            to={menuItem.to}
            key={menuItem.to}
            activeStyle={{ color: "#ecff34" }}
          >
            <MenuItem>
              <MenuItemValue>{menuItem.btnText}</MenuItemValue>
            </MenuItem>
          </MenuItemNavLink>
        ))}
      </Menu>
    );
  }
}

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

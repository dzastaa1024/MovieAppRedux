import React, { Component } from "react";
import { Menu, MenuItemNavLink, MenuItem, MenuItemValue } from "./style";

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

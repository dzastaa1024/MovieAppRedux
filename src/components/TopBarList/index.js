import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import UserModal from "../Modal/UserModal/UserModal";
import { logOutUser } from "../../actions/userActions";
import { getUserSelector } from "../../reducers";
import {
  Menu,
  MenuItemNavLink,
  MenuItem,
  MenuItemValue,
  UserIcon,
  Picture,
} from "./style";
import { useDispatch, useSelector } from "react-redux";

const menuItems = [
  { btnText: "Movies", to: "/movies" },
  { btnText: "TV Shows", to: "/tvshows" },
  { btnText: "WatchList", to: "/watchlists" },
];

const TopBarList = () => {
  const [isUserModal, setIsUserModal] = useState(false);
  const user = useSelector(state => getUserSelector(state));
  const dispatch = useDispatch();


  const openModal = () => {
    setIsUserModal(true);
  };

  const closeModal = () => {
    setIsUserModal(false);
  };

  return (
    <>
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
        {user ? (
          <MenuItem>
            <Picture>
              <UserIcon onClick={openModal} />
            </Picture>
          </MenuItem>
        ) : (
          <MenuItem>
            <NavLink to="/signup">Sign Up</NavLink>
          </MenuItem>
        )}
      </Menu>
      {isUserModal ? (
        <UserModal onClose={closeModal} logOut={dispatch(logOutUser)} />
      ) : null}
    </>
  );
};


export default TopBarList;

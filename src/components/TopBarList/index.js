import React, { Component } from "react";
import { NavLink } from "react-router-dom";
//import { openModal } from "../../actions";
import UserModal from "../Modal/UserModal/UserModal";
import {
  Menu,
  MenuItemNavLink,
  MenuItem,
  MenuItemValue,
  UserIcon,
  Picture,
} from "./style";
import { connect } from "react-redux";

const menuItems = [
  { btnText: "Movies", to: "/movies" },
  { btnText: "TV Shows", to: "/tvshows" },
  { btnText: "WatchList", to: "/watchlists" },
];

class TopBarList extends Component {
  state = {
    isUserModal: false,
  };

  openModal = () => {
    this.setState({
      isUserModal: true,
    });
  };

  closeModal = () => {
    this.setState({
      isUserModal: false,
    });
  };

  render() {
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
          {this.props.user ? (
            <MenuItem>
              <Picture>
                <UserIcon onClick={this.openModal} />
              </Picture>
            </MenuItem>
          ) : (
            <MenuItem>
              <NavLink to="/signUpForm">Sign Up</NavLink>
            </MenuItem>
          )}
        </Menu>
        {this.state.isUserModal ? (
          <UserModal onClose={this.closeModal} />
        ) : null}
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

export default connect(mapStateToProps, {})(TopBarList);

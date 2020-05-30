import React, { Component } from "react";
import { NavLink } from "react-router-dom";
//import { openModal } from "../../actions";
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
              <NavLink to="/signup">Sign Up</NavLink>
            </MenuItem>
          )}
        </Menu>
        {this.state.isUserModal ? (
          <UserModal onClose={this.closeModal} logOut={this.props.logOutUser} />
        ) : null}
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: getUserSelector(state),
  };
};

export default connect(mapStateToProps, { logOutUser })(TopBarList);

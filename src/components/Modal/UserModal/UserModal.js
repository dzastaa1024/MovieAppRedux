import React, { Component } from "react";
import Modal from "../";
import * as heroiconsSolid from "@styled-icons/heroicons-solid";
import { Link } from "react-router-dom";
import { clearLocalStorage } from "../../../localStorage/localStorage";

import {
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
} from "./style";

export default class UserModal extends Component {
  renderContent() {
    const { userName, onClose } = this.props;
    return (
      <Wrapper>
        <TopContent>
          <Icon>
            <UserDetail />
          </Icon>
          <Name username> Hello, {userName} </Name>
        </TopContent>
        <ButtomContent>
          <List>
            <Item>
              <Link to={"/watchlists"} onClick={onClose}>
                <ItemWrapper>
                  <IconWrapper>
                    <ListIcon as={heroiconsSolid.ClipboardList} />
                  </IconWrapper>
                  <Name>Watch List</Name>
                </ItemWrapper>
              </Link>
            </Item>
            <Item>
              <Link to={"/account"} onClick={onClose}>
                <ItemWrapper>
                  <IconWrapper>
                    <ListIcon as={heroiconsSolid.Cog} />
                  </IconWrapper>
                  <Name>Settings accounts</Name>
                </ItemWrapper>
              </Link>
            </Item>
            <Item>
              <ItemWrapper>
                <IconWrapper>
                  <ListIcon as={heroiconsSolid.TrendingUp} />
                </IconWrapper>
                <Name>Activity</Name>
              </ItemWrapper>
            </Item>
            <Item>
              <Link
                to={"/"}
                onClick={() => {
                  clearLocalStorage("user");
                  this.props.logOut();
                  onClose();
                }}
              >
                <ItemWrapper>
                  <IconWrapper>
                    <ListIcon as={heroiconsSolid.Cog} />
                  </IconWrapper>
                  <Name>Log Out</Name>
                </ItemWrapper>
              </Link>
            </Item>
          </List>
        </ButtomContent>
      </Wrapper>
    );
  }

  render() {
    const { onClose } = this.props;
    return (
      <div>
        <Modal modalContent={this.renderContent()} closeModal={onClose} />
      </div>
    );
  }
}

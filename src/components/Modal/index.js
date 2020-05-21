import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";

import { connect } from "react-redux";
import { closeModal } from "../../actions";

const Modal = ({ closeModal, modalContent, s }) => {
  return ReactDOM.createPortal(
    <Dimmer onClick={closeModal}>
      <ModalBody onClick={(e) => e.stopPropagation()}>
        <CloseIcon onClick={closeModal}>x</CloseIcon>
        <ModalContent>{modalContent}</ModalContent>
        <ModalAction></ModalAction>
      </ModalBody>
    </Dimmer>,
    document.getElementById("modal")
  );
};

export default connect(null, { closeModal })(Modal);

const Dimmer = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 10;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-content: center;
`;

const ModalBody = styled.div`
  position: relative;
  width: 50vw;
  background-color: #fff;
  padding: 2rem;
  align-self: center;
`;

const ModalContent = styled.div``;

const CloseIcon = styled.span`
  width: 3rem;
  height: 3rem;
  line-height: 3rem;
  color: #fff;
  background: #b9c7a9;
  text-align: center;
  border-radius: 5rem;
  position: absolute;
  top: -1.5rem;
  right: -1.5rem;
  cursor: pointer;
`;

const ModalAction = styled.div``;

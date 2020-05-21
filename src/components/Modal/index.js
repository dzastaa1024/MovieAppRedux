import React from "react";
import ReactDOM from "react-dom";
import {
  Dimmer,
  ModalBody,
  ModalContent,
  CloseIcon,
  ModalAction,
} from "./style";

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

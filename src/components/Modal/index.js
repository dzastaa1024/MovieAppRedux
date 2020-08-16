import React from "react";
import ReactDOM from "react-dom";
import {
  Dimmer,
  ModalBody,
  ModalContent,
  CloseIcon,
  ModalAction,
} from "./style";

const Modal = ({ closeModal, modalContent }) => {
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

export default Modal;

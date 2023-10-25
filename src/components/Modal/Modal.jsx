import PropTypes from "prop-types";
import React, { useEffect } from "react";
import close from "../../images/icons.svg";
import { createPortal } from "react-dom";
import { ModalBackdrop, ModalDiv, CloseBtn } from "./Modal.styled";

const modalRoot = document.querySelector("#modal-root");

function Modal({ children, onCloseModal, isOpenModal }) {
  useEffect(() => {
    const handleKeyDown = e => {
      if (e.code === "Escape") {
        onCloseModal();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onCloseModal]);

  const handleContentClick = e => {
    e.stopPropagation();
  };

  return createPortal(
    <ModalBackdrop onClick={onCloseModal}>
      <ModalDiv onClick={handleContentClick}>
        <CloseBtn type="button" aria-label="close button modal" onClick={onCloseModal}>
          <svg width="24" height="24">
            <use href={`${close}#icon-x`} />
          </svg>
        </CloseBtn>
        {children}
      </ModalDiv>
    </ModalBackdrop>,
    modalRoot
  );
}

Modal.propTypes = {
  onCloseModal: PropTypes.func.isRequired,
  isOpenModal: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
};

export default Modal;

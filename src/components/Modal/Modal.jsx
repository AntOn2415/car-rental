import PropTypes from "prop-types";
import React, { useEffect, useState, useRef } from "react";
import { createPortal } from "react-dom";
import { ModalBackdrop, ModalDiv, CloseBtn } from "./Modal.styled";
import close from "../../images/icons.svg";

const modalRoot = document.querySelector("#modal-root");

function Modal({ children, onCloseModal, isOpenModal }) {
  const [isAnimating, setIsAnimating] = useState(false);
  const modalRef = useRef(null);

  useEffect(() => {
    const handleKeyDown = e => {
      if (e.code === "Escape" && isOpenModal) {
        setIsAnimating(true);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onCloseModal, isOpenModal]);

  const handleAnimationEnd = () => {
    if (isAnimating) {
      setIsAnimating(false);
      onCloseModal();
    }
  };

  const handleContentClick = e => {
    e.stopPropagation();
  };

  const handleBackdropClick = () => {
    setIsAnimating(true);
  };

  useEffect(() => {
    if (isOpenModal) {
      setIsAnimating(false);
    }
  }, [isOpenModal]);

  return createPortal(
    (isOpenModal || isAnimating) && (
      <ModalBackdrop
        onClick={handleBackdropClick}
        data-animation={isAnimating ? "fadeOut" : "fadeIn"}
        onAnimationEnd={handleAnimationEnd}
      >
        <ModalDiv
          ref={modalRef}
          onClick={handleContentClick}
          data-animation={isAnimating ? "zoomOut" : "zoomIn"}
          onAnimationEnd={handleAnimationEnd}
        >
          <CloseBtn
            type="button"
            aria-label="close button modal"
            onClick={() => setIsAnimating(true)}
          >
            <svg width="24" height="24">
              <use href={`${close}#icon-x`} />
            </svg>
          </CloseBtn>
          {children}
        </ModalDiv>
      </ModalBackdrop>
    ),
    modalRoot
  );
}

Modal.propTypes = {
  onCloseModal: PropTypes.func.isRequired,
  isOpenModal: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
};

export default Modal;

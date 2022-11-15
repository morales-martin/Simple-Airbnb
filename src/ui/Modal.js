import React, { useState } from "react";
import ReactModal from "react-modal";

function Modal(props) {
  
  const handleCloseModal = () => {
    props.setShow(false);
  }

  useState(() => {
    ReactModal.setAppElement('body')
  },[])

  return (
    <ReactModal
      isOpen={
        props.show
        /* Boolean describing if the modal should be shown or not. */
      }
      onRequestClose={
        handleCloseModal
      }
      contentLabel={"Share Modal"}
      portalClassName={
        "ReactModalPortal" /* className to be applied to the portal.*/
      }
      overlayClassName={
        "ReactModal__Overlay" /* className to be applied to the overlay.*/
      }
      id={"share-modal"}
      className={
        "ReactModal__Content" /* className to be applied to the modal content.*/
      }
      bodyOpenClassName={
        "ReactModal__Body--open" /* String className to be applied to the modal ownerDocument.body */
      }
      htmlOpenClassName={
        "ReactModal__Html--open" /* String className to be applied to the modal ownerDocument.html */
      }
      ariaHideApp={
        true /* Boolean indicating if the appElement should be hidden */
      }
      shouldFocusAfterRender={
        true /* Boolean indicating if the modal should be focused after render. */
      }
      shouldCloseOnOverlayClick={
        true /* Boolean indicating if the overlay should close the modal */
      }
      shouldCloseOnEsc={
        true /* Boolean indicating if pressing the esc key should close the modal */
      }
      shouldReturnFocusAfterClose={
        true /* Boolean indicating if the modal should restore focus to the element
     that had focus prior to its display. */
      }
      //     parentSelector={
      //       () => document.body
      //       /* Function that will be called to get the parent element
      //  that the modal will be attached to. */
      //     }

      style={{
        overlay: {
          display: "flex",
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(187, 187, 187, 0.75)",
        },
        content: {
          margin: "auto",
          height: "60vh",
          width: "70vw",
          maxWidth: "70rem",
          background: "#F5F5F5",
          overflow: "auto",
          WebkitOverflowScrolling: "touch",
          borderRadius: "24px",
          outline: "none",
          padding: "20px",
        }
      }}
    >
      {props.children}
    </ReactModal>
  );
}
export default Modal;

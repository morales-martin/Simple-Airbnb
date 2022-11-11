import React from "react";
import Modal from "../ui/Modal";
import ShareForm from "./ShareForm";
import './ShareModal.css'

function ShareModal(props) {
  return (
    <Modal show={props.showModal} setShow={props.setShowModal}>
      <div className="share-modal-container">
        <div className="share-item-list">
          <div>List Item</div>
        </div>
        <ShareForm selectedItems={props.selectedItems} setSelectedItems={props.setSelectedItems} />
      </div>
    </Modal>
  );
}

export default ShareModal;

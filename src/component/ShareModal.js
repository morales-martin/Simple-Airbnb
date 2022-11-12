import React from "react";
import Modal from "../ui/Modal";
import ShareForm from "./ShareForm";
import './ShareModal.css'
import Card from "../ui/Card";

function ShareModal(props) {
  const mapToArray = [...props.selectedItems]
  return (
    <Modal show={props.showModal} setShow={props.setShowModal}>
      <div className="share-modal-container">
        <div className="share-item-list">
          <div>
            {
              mapToArray.map((item) => {
                return (
                  <Card images={item[1].images} id={item[1].id} title={item[1].title} listingName={item[1].listingName} price={item[1].price} days={item[1].days} beds={item[1].beds} bathrooms={item[1].bathrooms} ></Card>
                )
              })
            }
          </div>
        </div>
        <ShareForm selectedItems={props.selectedItems} setSelectedItems={props.setSelectedItems} />
      </div>
    </Modal>
  );
}

export default ShareModal;

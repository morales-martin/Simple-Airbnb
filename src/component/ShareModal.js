import React from "react";
import Modal from "../ui/Modal";
import ShareForm from "./ShareForm";
import "./ShareModal.css";
import Card from "../ui/Card";

function ShareModal(props) {
  return (
    <Modal show={props.showModal} setShow={props.setShowModal}>
      <div className="share-modal-container">
        <div className="share-item-list">
          <div>
            {props.selectedItems.map((item) => {
              return (
                <Card
                  key={item.id}
                  images={item.images}
                  id={item.id}
                  title={item.title}
                  listingName={item.listingName}
                  price={item.price}
                  days={item.days}
                  beds={item.beds}
                  bathrooms={item.bathrooms}
                  selectedItems={props.selectedItems}
                  selectItemHandler={props.selectItemHandler}
                  deselectItemHandler={props.deselectItemHandler}
                ></Card>
              );
            })}
          </div>
        </div>
        <ShareForm selectedItems={props.selectedItems} />
      </div>
    </Modal>
  );
}

export default ShareModal;

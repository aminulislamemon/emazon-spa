import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./reviewItems.css";

const ReviewItem = ({ product, removeItemHandler }) => {
  const { id, name, price, quantity, img } = product;
  return (
    <div className="review-items">
      <div className="items-img">
        <img src={img} alt={name} />
      </div>
      <div className="detail-container">
        <div className="review-detailes">
          <p>{name}</p>
          <p>
            <small>Price: ${price}</small>
          </p>
          <p>
            <small>Quantity: {quantity}</small>
          </p>
        </div>
        <div className="delete-item">
          <button onClick={()=>removeItemHandler(id)}>
            <FontAwesomeIcon className="delete-icon" icon={faTrash} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReviewItem;

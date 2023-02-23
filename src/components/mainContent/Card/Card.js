import React from "react";
import "./Card.css";
import img1 from "../images/1.jpg";

function Card(props) {
  return (
    <div className="card__layout">
      <div className="card">
        <div className="image__container">
          <div className="card__name">{props.name}</div>
          <div className="card__location">{props.location}</div>
          <img className="card__image" src={img1} alt="card-image" />
        </div>
      </div>
      <div className="card__details">
        <div className="flex">
          <div className="card__platform">{props.platform}</div>
          <div className="card__price">{props.price}</div>
        </div>
        <div className="card__description">{props.description}</div>
      </div>
    </div>
  );
}

export default Card;

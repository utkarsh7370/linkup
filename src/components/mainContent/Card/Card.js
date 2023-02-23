import React from "react";
import "./Card.css";
import img1 from "../images/1.jpg";

function Card(props) {
  return (
    <div className="cards__layout">
      <div className="cards">
        <div className="image__container">
          <div className="cards__name">{props.name}</div>
          <div className="cards__location">{props.location}</div>
          <img className="cards__image" src={img1} alt="cards-image" />
        </div>
      </div>
      <div className="cards__details">
        <div className="flex">
          <div className="cards__platform">{props.platform}</div>
          <div className="cards__price">{props.price}</div>
        </div>
        <div className="cards__description">{props.description}</div>
      </div>
    </div>
  );
}

export default Card;

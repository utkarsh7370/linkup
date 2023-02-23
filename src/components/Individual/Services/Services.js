import React from "react";
import "./Services.css";
function Services() {
  return <div className="wrapper"></div>;
}
function Card(props) {
  return (
    <div className="card">
      <div className="card__body">
        <img src={props.img} class="card__image" />
        <h2 className="card__title">{props.title}</h2>
        <p className="card__description">{props.description}</p>
      </div>
      <button className="card__btn">View Recipe</button>
    </div>
  );
}

export default Services;

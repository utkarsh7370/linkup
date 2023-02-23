import { React, useState } from "react";
import "./Card1.css";
import img1 from "../images/1.jpg";

function Card1(props) {
  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };
  return (
    <div
      className={hovered ? "cardHovered" : "card1"}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img className="card__image1" src={img1} alt="card-image" />
    </div>
  );
}

export default Card1;

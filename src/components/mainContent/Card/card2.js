import { React, useState } from "react";
import "./Card2.css";
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
      className={hovered ? "cardHovered" : "cards2"}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img className="cards__image2" src={img1} alt="cards-image" />
    </div>
  );
}

export default Card1;

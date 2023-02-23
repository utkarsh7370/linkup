import { React, useState } from "react";
import "./Card2.css";
import img1 from "../images/1.jpg";

function Card2(props) {
  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };
  return (
    <div
      className={hovered ? "cards2__Hovered" : "cards2"}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img className="cards2__image" src={img1} alt="cards-image" />
    </div>
  );
}

export default Card2;

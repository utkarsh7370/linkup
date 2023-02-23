import React from "react";
import "./Row.css";
import data from "../Card/data";
import Card from "../Card/Card";

function Row(props) {
  const cards = data.map((item) => {
    return <Card key={item.id} {...item} />;
  });

  return (
    <div className="row">
      <h2 className="row__heading">Featured</h2>
      <p className="row__description">
        Hire top influencers across all platforms
      </p>
      <div className="row__list">{cards}</div>
    </div>
  );
}

export default Row;

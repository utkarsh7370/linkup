import React from "react";
import Card1 from "../Card/Card1";
import "./Banner.css";

function Banner() {
  return (
    <div className="banner">
      <div className="banner__search">
        <h1 className="banner__title">
          Linkup with Creators <br />A new way to discover creators,
          influencers, or makers
        </h1>
        <div className="banner__find">
          <input
            className="banner__input"
            placeholder="Enter platform, keywords, niches or categories"
          ></input>
          <button className="banner__button">Go</button>
        </div>
      </div>
      <div className="banner__card">
        <Card1 />
        <Card1 />
        <Card1 />
      </div>
    </div>
  );
}

export default Banner;

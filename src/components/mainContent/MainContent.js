import React from "react";
import Row from "./Row/Row";
import Nav from "./Nav/Nav";
import Banner from "./Banner/Banner";
import "./MainContent.css";

function MainContent() {
  return (
    <div>
      <Nav />
      <Banner />
      <Row />
      <Row />
      <Row />
      <Row />
    </div>
  );
}

export default MainContent;

import "./App.css";
import Influencer from "./components/Individual/Influencer/Influencer";
import Services from "./components/Individual/Services/Services";
import Testimonial from "./components/Individual/Testimonial/Testimonial";
import Socials from "./components/Individual/Socials/Socials";
import React from "react";
import Card from "./components/mainContent/Card/Card";
import data from "./components/mainContent/Card/data";
import "./components/mainContent/Card/Card.css";
import MainContent from "./components/mainContent/MainContent";

export default function App() {
  return (
    <div>
      <Influencer />
      <Services />
      <Testimonial />
      <Socials />
      <MainContent />
    </div>
  );
}

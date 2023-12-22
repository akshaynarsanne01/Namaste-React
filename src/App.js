import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import FooterComponent from "./components/Footer";

// RestaurantList is JSON Data for displaying cards

const ratingSvg = require("./utils/Images/raing.svg");


const AppComponent = () => {
  return (
    <>
      <Header />
      <Body />
      <FooterComponent />
    </>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppComponent />);

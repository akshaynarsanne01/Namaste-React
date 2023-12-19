import React from "react";
import ReactDOM from "react-dom/client";

const TitleHeading = () => (
  <div>
    <h1>Namaste React 😍</h1>
  </div>
);

const Heading = () => (
  <div id="container">
    {TitleHeading()} 
    <TitleHeading />
    <TitleHeading></TitleHeading>
    <h2>This is React Course</h2>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Heading />);

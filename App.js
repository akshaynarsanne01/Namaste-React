import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement(
  "h1",
  { id: "heading" },
  "this is hello world from"
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);

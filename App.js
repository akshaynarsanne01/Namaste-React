const parent = React.createElement(
  <div className="parent_class">
    <div childClass="child_class">
      <h1>this it html tag</h1>
    </div>
  </div>
);

const heading = React.createElement(
  "h1",
  { id: "heading" },
  "this is hello world from"
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);

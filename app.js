import React from "react";
import ReactDom from "react-dom/client";

var heading = React.createElement(
  "h2",
  { className: "head-tag", style: { color: "red" } },
  "this is heading tag."
);

const data = <h1>this is single line jsx</h1>;

const FunctionalComponents = () => {
  return (
    <>
      <p>this is functional type jsx</p>
      <p>this is functional components</p>
    </>
  );
};

const rootDir = React.createElement("div", { className: "container" }, [
  heading,
  data,
  <FunctionalComponents />,
]);
var root = ReactDom.createRoot(document.getElementById("root"));
root.render(rootDir);

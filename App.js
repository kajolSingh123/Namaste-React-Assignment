import React, { Component } from "react";
import ReactDOM from "react-dom/client";

const HeadingComponent = () => {
  return (
    <div id="container">
      <h1 className="heading">React Functional Component</h1>
    </div>
  );
};
const titel = (
  <h1 className="head" tabIndex="6">
    Hello world
    <HeadingComponent />
  </h1>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(titel);

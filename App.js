import React, { Component } from "react";
import ReactDOM from "react-dom/client";

const Titel = () => (
  <h1 className="head" tabIndex="6">
    Hello world
  </h1>
);

// Component Composition in React

const HeadingComponent = () => {
  return (
    <>
      <Titel />
      <h1 className="heading">React Functional Component</h1>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);

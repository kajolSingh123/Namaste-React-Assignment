import React, { Component } from "react";
import ReactDOM from "react-dom/client";
import Header from "./copmonents/Header";
import Body from "./copmonents/Body";

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);

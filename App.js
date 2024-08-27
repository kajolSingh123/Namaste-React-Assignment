import React from "react";
import ReactDOM from "react-dom/client";

// React.createElements => ReactElement-js object =>when we rendered this to dom then it's becomes HTML Element.

const heading = React.createElement("h1",{id:"heading"},"Namaste React")

// JSX is not html inside js./it look like html or XML- like syntex.
// JXS (transpiled before it reaches the JS) - PARCEL - Babel.
//Jsx => React.createElement => ReactElement-js object => HTMLElement(render)

const jsxHeading =<h1>Hello world</h1>

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(heading)







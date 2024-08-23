

const Parent = React.createElement("div",{id:"parent"},
    React.createElement("div",{id:"child"} , [
        React.createElement("h1",{id:"child2"},"I'm H1 Tag" ),
        React.createElement("h2",{id:"child2"},"I'm H2 Tag" ),
        React.createElement("h3",{id:"child2"},"I'm H3 Tag" ) 
    ]),
    React.createElement("div",{id:"child"} , [
        React.createElement("h1",{id:"child2"},"I'm H1 Tag" ),
        React.createElement("h2",{id:"child2"},"I'm H2 Tag" ),
        React.createElement("h3",{id:"child2"},"I'm H3 Tag" ) 
    ])
);








const heading = React.createElement("h1", {id:"heading"},"Hello World from React");
     
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(Parent)
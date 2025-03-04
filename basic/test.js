import { func } from "prop-types";
import React from "react";
import ReactDom from "react-dom/client";

function Hello(props){
    return <h1>hello world</h1>
}

const container=document.getElementById("root");
const root=ReactDom.createRoot(container);
root.render(Hello);
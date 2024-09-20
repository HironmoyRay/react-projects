import { createRoot } from "react-dom/client";
import React from 'react'
import App from "./App";

// const myElement = (
//   <a href="https://google.com" target="_blank">
//     Go to Google
//   </a>
// );
// createRoot(document.getElementById("root")).render(myElement);

const reactElement = React.createElement("a",{href:"https://google.com", target:"_blank"},"Click Google") 

createRoot(document.getElementById("root")).render(reactElement);


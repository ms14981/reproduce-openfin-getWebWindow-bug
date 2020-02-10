import React from "react";
import ReactDOM from "react-dom";

import App from "./App";

const mountApp = () => {
    console.log(document);
    console.log(document.getElementById("root"));
    ReactDOM.render(<App/>, document.getElementById("root"));
};

if ("fin" in window) {
    window.fin.desktop.main(() => {
        mountApp();
    })
} else {
    throw new Error("This application can only be run in an OpenFin container");
}

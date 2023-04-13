import * as React from "react";
import * as ReactDom from "react-dom";
import { App } from "../App.tsx";
// import {StarWarsNameFunction} from "../shared/StarWarsNameFunction/StarWarsNameFunction.tsx"

window.addEventListener("load", () => {
  ReactDom.hydrate(<App />, document.getElementById("react_root"));
});

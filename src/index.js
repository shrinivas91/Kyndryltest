import React from "react";
import ReactDOM from "react-dom";
import { HomeComponent } from "./home";

import "./styles.css";

function App() {
  const setVMName = (e) => {};
  return (
    <div>
      <HomeComponent />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

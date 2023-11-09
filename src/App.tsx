import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import BarraSopra from "./components/BarraSopra";
import Notizie from "./components/Fetch";

function App() {
  return (
    <div className="App">
      <BarraSopra />
      <Notizie />
    </div>
  );
}

export default App;

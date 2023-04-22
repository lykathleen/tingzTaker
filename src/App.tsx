import React from "react";
import Sidebar from "./Sidebar.tsx";
import Main from "./Main.tsx";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Sidebar />
      <Main />
    </div>
  );
};

export default App;

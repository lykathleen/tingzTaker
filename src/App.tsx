import React, { useState } from "react";
import Sidebar from "./Sidebar.tsx";
import Main from "./Main.tsx";
import "./App.css";

const App = () => {
  const [tingz, setTingz] = useState([]);

  const handleAdd = () => {

  };

  return (
    <div className="App">
      <Sidebar tingz={tingz} handleAdd={handleAdd} />
      <Main />
    </div>
  );
};

export default App;

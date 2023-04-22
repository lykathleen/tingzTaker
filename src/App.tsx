import React, { useState } from "react";
import Sidebar from "./Sidebar.tsx";
import Main from "./Main.tsx";
import "./App.css";
import uuid from "react-uuid";

export interface NewTing {
  id: string;
  title: string;
  body: string;
  lastModified: number;
}
const App: React.FC = () => {
  const [tingz, setTingz] = useState<NewTing[]>([]);

  const handleAdd = () => {
    const newTing: NewTing = {
      id: uuid(),
      title: "Untitled Ting",
      body: "",
      lastModified: Date.now()
    };
    setTingz([newTing, ...tingz]);
  };

  return (
    <div className="App">
      <Sidebar tingz={tingz} handleAdd={handleAdd} />
      <Main />
    </div>
  );
};

export default App;

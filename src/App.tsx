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

  const handleDelete = (id: string) => {
    const newTingz: NewTing[] = tingz.filter((ting) => ting.id !== id);
    setTingz(newTingz);
  };

  return (
    <div className="App">
      <Sidebar
        tingz={tingz}
        handleAdd={handleAdd}
        handleDelete={handleDelete}
      />
      <Main />
    </div>
  );
};

export default App;

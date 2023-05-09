import React, { useState } from "react";
import Sidebar from "./Sidebar.tsx";
import Main from "./Main.tsx";
import "./App.css";
import uuid from "react-uuid";

export interface NewTing {
  id?: string;
  title?: string;
  body?: string;
  lastModified: number;
}
const App: React.FC = () => {
  const [tingz, setTingz] = useState<NewTing[]>([]);
  const [activeTing, setActiveTing] = useState("");

  const handleAdd = () => {
    const newTing = {
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

  const getActiveTing = () => {
    const newTing = tingz.find((ting) => ting.id === activeTing);
    return newTing;
  };

  const onUpdateTing = (updatedTing: NewTing) => {
    const updatedTingzArray = tingz.map((ting) => {
      if (ting.id === activeTing) {
        return updatedTing;
      }

      return ting;
    });

    setTingz(updatedTingzArray);
  };

  return (
    <div className="App">
      <Sidebar
        tingz={tingz}
        handleAdd={handleAdd}
        handleDelete={handleDelete}
        activeTing={activeTing}
        setActiveTing={setActiveTing}
      />
      <Main getActiveTing={getActiveTing} onUpdateTing={onUpdateTing} />
    </div>
  );
};

export default App;

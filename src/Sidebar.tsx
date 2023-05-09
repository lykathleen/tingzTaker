import React from "react";
import { NewTing } from "./App";

interface SidebarProps {
  tingz: NewTing[];
  handleAdd: () => void;
  handleDelete: (id: string) => void;
  activeTing: string;
  setActiveTing: (id: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({
  tingz,
  handleAdd,
  handleDelete,
  activeTing,
  setActiveTing
}: SidebarProps) => {
  const sortedTingz = tingz.sort((a, b) => b.lastModified - a.lastModified);

  return (
    <div className="sidebar">
      <div className="sidebarHeader">
        <h1>Tingz</h1>
        <button onClick={handleAdd}>Add</button>
      </div>

      <div className="sidebarTingz">
        {sortedTingz.map((ting) => (
          <div
            key={ting.id}
            className={`sidebarTing ${ting.id === activeTing && "active"}`}
            onClick={() => {
              setActiveTing(ting.id as string);
            }}
          >
            <div className="sidebarTingTitle">
              <strong>{ting.title}</strong>
              <div onClick={() => handleDelete(ting.id as string)}>Delete</div>
            </div>

            <p> {ting.body && ting.body.substring(0, 100) + "..."} </p>
            <small className="tingMeta">
              Last modified{" "}
              {new Date(ting.lastModified).toLocaleDateString("en-GB", {
                hour: "2-digit",
                minute: "2-digit"
              })}
            </small>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;

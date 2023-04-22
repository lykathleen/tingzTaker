import React from "react";

const Sidebar = ({ tingz, handleAdd }) => {
  return (
    <div className="sidebar">
      <div className="sidebarHeader">
        <h1>Tingz</h1>
        <button onClick={handleAdd}>Add</button>
      </div>

      <div className="sidebarTingz">
        {tingz.map((ting) => {
          <div className="sidebarTing">
            <div className="sidebarTingTitle">
              <strong>Title</strong>
              <div>Delete</div>
            </div>

            <p> PREVIEW </p>
            <small className="tingMeta">Last modified [date]</small>
          </div>;
        })}
      </div>
    </div>
  );
};

export default Sidebar;

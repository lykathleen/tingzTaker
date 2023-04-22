import React from "react";

const Sidebar = () => {
  return (
    <div className="sidebar">

      <div className="sidebarHeader">
        <h1>Tingz</h1>
        <button>Add</button>
      </div>

      <div className="sidebarTingz">
        <div className="sidebarTing">
          <div className="sidebarTingTitle">
            <strong>Title</strong>
            <div>Delete</div>
          </div>

          <p> PREVIEW </p>
          <small className="tingMeta">Last modified [date]</small>

        </div>
      </div>

    </div>
  );
};

export default Sidebar;

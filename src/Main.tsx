import React from "react";

const Main: React.FC = () => {
  return (
    <div className="main">
      <div className="mainTingEdit">
        <input type="text" id="title" autoFocus />
        <textarea id="body" placeholder="Insert your ting" />
      </div>
      <div className="mainTingPreview"></div>
      <h1 className="mainTingPreviewTitle">TITLE</h1>
      <div className="mainTingMarkdownPreview">Preview</div>
    </div>
  );
};

export default Main;

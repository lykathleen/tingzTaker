import React from "react";
import { NewTing } from "./App";

interface MainProps {
  getActiveTing: () => NewTing | undefined;
  onUpdateTing: (updatedTing: NewTing) => void;
}
const Main: React.FC<MainProps> = ({ getActiveTing, onUpdateTing }) => {
  const activeTing = getActiveTing?.();

  const onEditField = (key: keyof NewTing, value: string)  => {
    onUpdateTing({
      ...activeTing,
      [key]: value,
      lastModified: Date.now()
    });
  };

  if (!activeTing)
    return <div className="no-active-ting">No ting selected</div>;

  return (
    <div className="main">
      <div className="mainTingEdit">
        <input
          type="text"
          id="title"
          value={activeTing?.title}
          onChange={(event) => onEditField("title", event.target.value)}
          autoFocus
        />
        <textarea
          id="body"
          placeholder="Insert your ting"
          value={activeTing?.body}
          onChange={(event) => onEditField("body", event.target.value)}
        />
      </div>
      <div className="mainTingPreview"></div>
      <h1 className="mainTingPreviewTitle">{activeTing?.title}</h1>
      <div className="mainTingMarkdownPreview">{activeTing?.body}</div>
    </div>
  );
};

export default Main;

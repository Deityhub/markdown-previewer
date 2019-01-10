import React from "react";

const Editor = ({ handleChange, value }) => {
  return (
    <div className="editor">
      <textarea
        className="editor__area"
        onChange={handleChange}
        value={value}
        type="text"
      />
    </div>
  );
};

export default Editor;

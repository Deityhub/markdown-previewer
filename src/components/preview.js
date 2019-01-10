import React from "react";

const Preview = ({ render }) => {
  return (
    <div className="preview">
      <div className="preview__area" dangerouslySetInnerHTML={render()} />
    </div>
  );
};

export default Preview;

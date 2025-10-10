import React, { useState } from "react";

const Selection = (props) => {
  const { applyColor } = props;

  // Keeps track of this box’s background color
  const [selectionStyle, updateSelectionStyle] = useState({ background: "" });

  return (
    <div
      className="fix-box"
      style={selectionStyle}
      onClick={() => applyColor(updateSelectionStyle)}
    >
      <h3 className="subheading">Selection</h3>
    </div>
  );
};

export default Selection;

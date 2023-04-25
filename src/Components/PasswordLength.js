import React from "react";

const PasswordLength = ({ length, setLength }) => {
  return (
    <div className="settings">
      <p>length</p>
      <input
        type="range"
        min="6"
        value={length}
        max="12"
        onChange={(e) => setLength(e.target.value)}
      ></input>
      <p id="length-num">{length}</p>
    </div>
  );
};

export default PasswordLength;

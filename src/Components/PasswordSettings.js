import React from "react";

const PasswordSettings = ({
  lowercase,
  setLowercase,
  uppercase,
  setUppercase,
  special,
  setSpecial,
}) => {
  return (
    <div className="align-settings">
      <div className="settings">
        <input type="checkbox" checked readOnly></input>
        <p>numbers (always enabled)</p>
      </div>
      <div className="settings">
        <input
          type="checkbox"
          onChange={(e) => {
            setLowercase(!lowercase);
          }}
        ></input>
        <p> lowercase </p>
      </div>
      <div className="settings">
        <input
          type="checkbox"
          onChange={(e) => {
            setUppercase(!uppercase);
          }}
        ></input>
        <p> uppercase </p>
      </div>
      <div className="settings">
        <input
          type="checkbox"
          onChange={(e) => {
            setSpecial(!special);
          }}
        ></input>
        <p> special characters </p>
      </div>
    </div>
  );
};

export default PasswordSettings;

import { useState } from "react";
// import { generatePassword } from "./generatePassword";

const PasswordDisplay = ({ password, buttonText, setButtonText }) => {
  const copyPass = async () => {
    try {
      await navigator.clipboard.writeText(password);
      setButtonText("copied!");
    } catch (e) {
      console.log("error in copy", e);
    }
  };
  // doGeneratePassword function here
  return (
    <div className="password">
      <input id="password" defaultValue={password} readOnly></input>
      <button onClick={copyPass}>{buttonText}</button>
    </div>
  );
};

export default PasswordDisplay;

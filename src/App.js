import "./styles.css";
import { useState } from "react";
import PasswordDisplay from "./Components/PasswordDisplay";
import PasswordSettings from "./Components/PasswordSettings";
import PasswordLength from "./Components/PasswordLength";
// import { generatePassword } from "./generatePassword";
import { generatePassword } from "./generatePassword";

export default function App() {
  const [length, setLength] = useState(10);
  const [lowercase, setLowercase] = useState(false);
  const [uppercase, setUppercase] = useState(false);
  const [special, setSpecial] = useState(false);
  const [password, setPassword] = useState("");
  const [buttonText, setButtonText] = useState("copy");
  const handleGenerate = () => {
    setPassword(generatePassword({ length, lowercase, uppercase, special }));
    setButtonText("copy");
  };

  return (
    <div className="App">
      <h1>generate a secure password</h1>
      <PasswordDisplay
        password={password}
        setPassword={setPassword}
        buttonText={buttonText}
        setButtonText={setButtonText}
      />
      <PasswordLength length={length} setLength={setLength} />
      <PasswordSettings
        lowercase={lowercase}
        setLowercase={setLowercase}
        uppercase={uppercase}
        setUppercase={setUppercase}
        special={special}
        setSpecial={setSpecial}
      />
      <button onClick={handleGenerate}>generate</button>
    </div>
  );
}

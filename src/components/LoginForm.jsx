import React, { useState } from "react";
import { TextInput } from "./form";
import SubmitButton from "./form/SubmitButton";

const LoginForm = ({ onLogin }) => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="LoginForm">
      <TextInput label="Username: " onChange={setUserName} value={userName} />
      <br />
      <TextInput
        label="Password: "
        onChange={setPassword}
        value={password}
        type="password"
      />
      <br />
      <SubmitButton label="Login" onClick={() => onLogin(userName, password)} />
    </div>
  );
};

export default LoginForm;

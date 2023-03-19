import React from "react";

const Input = (props) => {
  const { onChange, label, value, type } = props;
  return (
    <div className="LoginForm_Input_wrapper">
      <label>{label}</label>
      <input
        value={value}
        onChange={({ target }) => onChange(target.value)}
        className="LoginForm_Input"
        type={type}
      />
    </div>
  );
};

export default Input;

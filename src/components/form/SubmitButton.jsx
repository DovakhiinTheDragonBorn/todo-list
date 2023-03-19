import React from "react";

const SubmitButton = (props) => {
  const { label, onClick } = props;
  return (
    <button className="btn btn-submit" onClick={onClick}>
      {label}
    </button>
  );
};

export default SubmitButton;

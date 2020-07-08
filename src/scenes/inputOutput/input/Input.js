import React from "react";

const Input = ({ inputChange, name }) => {
  const inputStyle = {
    width: "300px",
    textAlign: "center",
    border: "none",
    // backgroundColor: "#ECEFF1",
    borderBottom: "2px solid #263238",
    padding: "1em",
    margin: "1em auto",
  };

  return (
    <input
      style={inputStyle}
      type="text"
      onChange={inputChange}
      value={name}
      placeholder="Input Name Here"
    />
  );
};

export default Input;

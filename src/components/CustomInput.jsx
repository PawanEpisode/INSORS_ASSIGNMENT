import React from "react";

const CustomInput = ({ text, type }) => {
  return (
    <div class="user-input-wrp">
      <br />
      <input type={type} className="inputText rounded-t-lg" required />
      <span className="floating-label">{text}</span>
    </div>
  );
};

export default CustomInput;

import React from "react";

const CustomInput = ({
  name,
  required,
  text,
  type,
  value,
  handleChange,
  pattern,
  title,
}) => {
  return (
    <div className="user-input-wrp">
      <br />
      <input
        pattern={pattern}
        title={title}
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={handleChange}
        className="inputText rounded-t-lg"
        required={required}
      />
      <span className="floating-label">{text}</span>
    </div>
  );
};

export default CustomInput;

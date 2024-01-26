import React, { useState } from "react";
import visibleye from '../assets/visible-eye.png';
import notVisibleye from '../assets/eye.png';

const CustomPassword = ({ text, value, handleChange }) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="user-input-wrp">
        <br />
        <input 
        className="inputText rounded-t-lg" required 
        type={showPassword ? "text" : "password"}
            value={value}
            onChange={handleChange}
        />
        <span className="floating-label">{text}</span>
        <button className="showpassword p-2 cursor-pointer" onClick={() => setShowPassword(!showPassword)}>
            <img className="w-[20px] h-[20px]" alt="password-eye" title={showPassword ? "show password": "hide password"} src={showPassword ? visibleye : notVisibleye}/>
        </button>
      </div>
  );
};

export default CustomPassword;

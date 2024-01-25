import React, { useState } from "react";
import visibleye from '../assets/visible-eye.png';
import notVisibleye from '../assets/eye.png';

const CustomPassword = ({ text }) => {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div class="user-input-wrp">
        <br />
        <input 
        className="inputText rounded-t-lg" required 
        type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
        />
        <span className="floating-label">{text}</span>
        <button className="showpassword p-2 cursor-pointer" onClick={() => setShowPassword(!showPassword)}>
            <img className="w-[20px] h-[20px]" alt="password-eye" src={showPassword ? visibleye : notVisibleye}/>
        </button>
      </div>
  );
};

export default CustomPassword;

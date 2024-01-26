import React, { useState } from 'react';

import './CustomSelect.css';

const CustomSelect = ({label, options, onChange }) => {

  const [selectedValue, setSelectedValue] = useState('');

  const handleSelectChange = (event) => {
    const newValue = event.target.value;
    setSelectedValue(newValue);
    if (onChange) {
      onChange(newValue);
    }
  };
  return (
    <div className="floating-label-container bg-[#f6f6f6]">  
      <select required id={label} className="floating-select" value={selectedValue} onChange={handleSelectChange}>
      <option value=""></option>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
      </select>
      <label htmlFor={label}>{label}</label>
    </div>
  )
}

export default CustomSelect
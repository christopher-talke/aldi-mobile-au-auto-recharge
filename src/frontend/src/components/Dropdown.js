import React from 'react';

const Dropdown = ({ label, selected = 0, options = [] }) => {
  return (
    <div>
      <label htmlFor={label}>{label}</label>
      <select name={label} id={label}>
        {options.map((option, index) => (
          <option value={index} selected={selected === index ? true : false} key={option.path}>
            {option.friendlyName}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;

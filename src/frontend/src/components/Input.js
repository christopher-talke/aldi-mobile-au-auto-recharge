import React from 'react';

const Input = ({ type, label }) => {
  return (
    <div>
      <label>{label}</label>
      <input type={type} />
    </div>
  );
};

export default Input;

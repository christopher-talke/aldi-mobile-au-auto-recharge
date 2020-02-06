import React from 'react';
import styled from 'styled-components';

const Dropdown = ({ label, selected = 0, options = [] }) => {
  return (
    <StyledDropdown>
      <label htmlFor={label}>{label}</label>
      <select name={label} id={label}>
        {options.map((option, index) => (
          <option value={index} selected={selected === index ? true : false} key={option.path}>
            {option.friendlyName}
          </option>
        ))}
      </select>
    </StyledDropdown>
  );
};

const StyledDropdown = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 15px;

  label {
    margin: 5px 0;
  }

  select {
    width: 342px;
    height: 35px;
    background: #ffffff;
    border: 1px solid #cfcfcf;
    border-radius: 3px;
    padding: 0 5px;
    font-size: 14px;
    color: #9e9e9e;
  }

  option {
    height: 35px;
  }
`;

export default Dropdown;

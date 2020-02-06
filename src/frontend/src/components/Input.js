import React from 'react';
import styled from 'styled-components';

const Input = ({ type, label }) => {
  return (
    <StyledLabel>
      <label>{label}</label>
      <input type={type} />
    </StyledLabel>
  );
};

const StyledLabel = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 15px;

  label {
    margin: 5px 0;
  }

  input {
    width: 330px;
    height: 35px;
    background: #ffffff;
    border: 1px solid #cfcfcf;
    border-radius: 3px;
    padding: 0 5px;
    font-size: 14px;
    color: #9e9e9e;
  }
`;

export default Input;

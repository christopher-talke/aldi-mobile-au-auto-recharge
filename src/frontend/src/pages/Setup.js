import React from 'react';
import styled from 'styled-components';
import Heading from '../components/Heading';
import Toast from '../components/Toast';
import Input from '../components/Input';

const Setup = () => {
  return (
    <StyledSetup>
      <Heading vertical />
      <Toast type="info">
        <p>We can see you’ve never used this service before, please fill out the details to complete the intial setup!</p>
      </Toast>
      <Input label="Username" type="text" />
      <Input label="Password" type="password" />
      <button>Setup</button>
    </StyledSetup>
  );
};

const StyledSetup = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;

  button {
    margin-top: 25px;
  }
`;

export default Setup;

import React from 'react';
import styled from 'styled-components';
import Heading from '../components/Heading';
import Input from '../components/Input';

const Login = () => {
  return (
    <StyledLogin>
      <Heading vertical />
      <Input label="Username" type="text" />
      <Input label="Password" type="password" />
      <button>Login</button>
    </StyledLogin>
  );
};

const StyledLogin = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;

  button {
    margin-top: 25px;
  }
`;

export default Login;

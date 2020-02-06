import React from 'react';
import styled from 'styled-components';
import Input from './Input';

const Notification = () => {
  return (
    <StyledNotification id="notification">
      <h1>Notification Settings</h1>
      <Input label="Email Address(es)" type="text" />
      <Input label="Mobile Numbers" type="text" />
      <button>Save</button>
    </StyledNotification>
  );
};

const StyledNotification = styled.div`
  button {
    margin-left: 170px;
  }
`;

export default Notification;

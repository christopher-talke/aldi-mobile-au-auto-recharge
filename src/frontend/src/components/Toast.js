import React from 'react';
import styled from 'styled-components';

const Toast = ({ children, type }) => {
  return <StyledToast type={type}>{children}</StyledToast>;
};

const StyledToast = styled.div`
  width: 290px;
  font-size: 12px;
  text-align: center;
  padding: 10px 25px;
  background: ${({ type }) => {
    switch (type) {
      case 'info':
        return `#01B5CE`;
      case 'success':
        return `#009946`;
      case 'warning':
        return `#FF0000`;
      default:
        return `#717171`;
    }
  }};
  border-radius: 3px;

  & * {
    color: white;
  }
`;

export default Toast;

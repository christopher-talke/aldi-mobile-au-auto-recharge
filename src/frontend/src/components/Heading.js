import React from 'react';
import styled from 'styled-components';

const Heading = ({ vertical }) => {
  console.log(vertical);

  return (
    <StyledLogo vertical={vertical}>
      <img src={process.env.PUBLIC_URL + '/logo.jpg'} alt="amar logo" />
      <h1>
        <span className="highlight">Unofficial</span> Pay-As-You-Go Automatic Recharge Service
      </h1>
    </StyledLogo>
  );
};

const StyledLogo = styled.div`
  display: flex;
  align-items: ${({ vertical }) => (vertical !== undefined ? 'inherit' : 'center')};
  flex-direction: ${({ vertical }) => (vertical !== undefined ? 'column' : 'row')};

  h1 {
    text-align: ${({ vertical }) => (vertical !== undefined ? 'center' : 'align-left')};
    width: 205px;
    margin: ${({ vertical }) => (vertical !== undefined ? '15px 0 20px 0' : '0 0 0 15px')};

    & .highlight {
      color: #00b6ce;
    }
  }

  img {
    width: 65px;
    height: auto;
  }
`;

export default Heading;

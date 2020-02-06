import React from 'react';
import styled from 'styled-components';

const Logs = () => {
  return (
    <StyledLog id="logs">
      <h1>Audit Log</h1>
      <p>Log dump of all previous balance checks, recharges and other loggable information.</p>
      <ul>
        <li>2020-02-01 - 0800 - Balance check complete, current balance is: $14.25, value is greater than minimum value, not recharging.</li>
        <li>2020-02-01 - 2000 - Balance check complete, current balance is: $14.53, value is greater than minimum value, not recharging.</li>
      </ul>
      <button>Clear Log</button>
    </StyledLog>
  );
};

const StyledLog = styled.div`
  p {
    margin-top: 15px;
  }

  ul {
    display: block;
    height: 515px;
    max-height: 515px;
    padding: 10px;
    border: 1px solid #cfcfcf;
    border-radius: 5px;
    margin-top: 10px;
    font-size: 12px;

    li:nth-of-type(1) {
      margin: 0;
    }

    li {
      margin: 10px 0;
    }
  }

  button {
    margin-left: calc(100% - 170px);
    background: #ed9160;
  }
`;

export default Logs;

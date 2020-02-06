import React from 'react';
import styled from 'styled-components';
import Service from '../components/Service';
import Notification from '../components/Notification';
import Heading from '../components/Heading';
import Logs from '../components/Logs';

const Home = () => {
  return (
    <StyledHome>
      <header>
        <Heading /> <button>Logout</button>
      </header>
      <main>
        <Service />
        <Notification />
        <Logs />
      </main>
    </StyledHome>
  );
};

const StyledHome = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  header {
    display: flex;
    justify-content: space-between;
    align-content: center;
    width: 1120px;
    margin: 0 auto;
    margin-top: 25px;
    margin-bottom: 75px;
  }

  main {
    display: grid;
    grid-template-columns: 400px 720px;
    grid-template-rows: repeat(2, auto);
    grid-column-gap: 0px;
    grid-row-gap: 0px;
    width: 1120px;

    & div button {
      margin-top: 25px;
    }
  }

  #service {
    grid-area: 2 / 1 / 3 / 2;
    margin-bottom: 35px;
  }

  #notification {
    grid-area: 3 / 1 / 4 / 2;
  }

  #logs {
    grid-area: 2 / 2 / 4 / 3;
  }
`;

export default Home;

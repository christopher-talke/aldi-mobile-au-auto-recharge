import React, { useState, useEffect } from 'react';
import Service from '../components/Service';
import Notification from '../components/Notification';
import Loading from '../components/Loading';

const Home = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
  }, [loading, setLoading]);

  if (loading) {
    return <Loading />;
  }

  return (
    <div>
      <Service />
      <Notification />
    </div>
  );
};

export default Home;

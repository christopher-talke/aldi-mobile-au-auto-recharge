import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Setup from './pages/Setup';
import Loading from './components/Loading';

export const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  const [isSetupComplete] = useState(true);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
  }, [loading, setLoading]);

  if (loading) {
    return <Loading />;
  }

  if (isAuthenticated)
    return (
      <Router>
        <Switch>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    );

  if (isSetupComplete) return <Login setIsAuthenticated={setIsAuthenticated} />;

  return <Setup />;
};

export default App;

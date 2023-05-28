import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import InitComponent from './containers/InitComponent';

const App = () => {
  return (
    <Router>
      <Switch>
        <InitComponent />
      </Switch>
    </Router>
  );
};

export default App;

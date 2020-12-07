import React from 'react';
import Dashboard from './views/Dashboard'
import Membership from './views/Membership'
import Schedule from './views/Schedule'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css';
import './sass/main.scss';

function App() {
  return (
    <Router>
      <Route exact path="/" component={Dashboard} />
      <Route path="/schedule" component={Schedule} />
      <Route path="/membership" component={Membership} />
    </Router>
  );
}

export default App;

import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Reports from './pages/Reports';
import Algorithm from './pages/Algorithm';
import Documentation from './pages/Documentation';
import Analysis from './pages/Analysis';
import Team from './pages/Team';


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/reports' component={Reports} />
          <Route path='/algorithm' component={Algorithm} />
          <Route path='/documentation' component={Documentation} />
          <Route path='/analysis' component={Analysis} />
          <Route path='/team' component={Team} />

        </Switch>
      </Router>
    </>
  );
}

export default App;

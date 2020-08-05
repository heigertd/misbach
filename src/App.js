import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from './pages/Home/Home'
import Charts from './pages/Charts/Charts'
import AboutContact from './pages/AboutContact/AboutContact'

function App() {
  return (
    <Router>
      <Route exact path = '/' component = {Home} />
      <Route exact path = 'charts' component = {Charts} />
      <Route exact path = 'about-contact' component = {AboutContact} />
    </Router>
  );
}

export default App;

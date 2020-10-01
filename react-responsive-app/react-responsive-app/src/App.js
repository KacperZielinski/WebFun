import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import ExampleClassComponent from './components/ExampleClassComponent';
import Home from './components/pages/HomePage/Home';

function App() {
  return (
    <Router>
      <Navbar />
      <ExampleClassComponent />
      <Switch>
        <Route path='/' exact component={Home} />
      </Switch>
    </Router>
  );
}

export default App;

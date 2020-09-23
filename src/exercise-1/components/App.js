import React, {Component} from 'react';
import '../styles/App.css';
import {BrowserRouter as Router} from 'react-router-dom';
import Header from './Header';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="app">
          <Header />
        </div>
      </Router>
    );
  }
}

export default App;

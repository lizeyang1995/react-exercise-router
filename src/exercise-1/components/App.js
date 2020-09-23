import React, {Component} from 'react';
import '../styles/App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Header from './Header';
import Home from './home/Home';
import MyProfile from './myProfile/MyProfile';
import AboutUs from './aboutUs/AboutUs';
import Products from './products/Products';
import Bicycle from './products/Bicycle';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="app">
          <Header />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/my-profile' component={MyProfile} />
            <Route path='/about-us' component={AboutUs} />
            <Route exact path='/products' component={Products} />
            <Route exact path='/products/1' component={Bicycle} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;

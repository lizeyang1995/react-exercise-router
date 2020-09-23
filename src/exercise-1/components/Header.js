import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import './Header.css';

class Header extends Component {
  render() {
    return (
      <div className="header">
        <p>
          <NavLink activeClassName='active' to='/'>Home</NavLink>
        </p>
        <p>
          <NavLink activeClassName='active' to='/my-profile'>My Profile</NavLink>
        </p>
        <p>
          <NavLink activeClassName='active' to='/about-us'>About Us</NavLink>
        </p>
      </div>
    );
  }
}

export default Header;

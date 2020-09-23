import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import './Header.css';

class Header extends Component {
  render() {
    return (
      <div className="header">
        <p>
          <NavLink activeClassName='active' className='link' to='/'>Home</NavLink>
        </p>
        <p>
          <NavLink activeClassName='active' className='link' to='/products'>Products</NavLink>
        </p>
        <p>
          <NavLink activeClassName='active' className='link' to='/my-profile'>My Profile</NavLink>
        </p>
        <p>
          <NavLink activeClassName='active' className='link' to='/about-us'>About Us</NavLink>
        </p>
      </div>
    );
  }
}

export default Header;

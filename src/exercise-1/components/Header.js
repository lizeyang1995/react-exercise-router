import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <div className="header">
        <p>
          <Link to='/home'>Home</Link>
        </p>
        <p>
          <Link to='/my-profile'>My Profile</Link>
        </p>
        <p>
          <Link to='/about-us'>About Us</Link>
        </p>
        
        
        
      </div>
    );
  }
}

export default Header;

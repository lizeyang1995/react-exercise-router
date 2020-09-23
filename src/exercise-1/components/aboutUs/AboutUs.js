import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './AboutUs.css';

class AboutUs extends Component {
  render() {
    return (
      <div className="about-us">
        <p className='company'>
          Company: ThoughtWorks local
        </p>
        <p className='location'>
          Location: Xi'an
        </p>
        <p className='more'>
          For more information,please view our <Link to='/'>website</Link>
        </p>
      </div>
    );
  }
}

export default AboutUs;

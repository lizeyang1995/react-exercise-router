import React, {Component} from 'react';
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
          For more information,please view our website
        </p>
      </div>
    );
  }
}

export default AboutUs;

import React, {Component} from 'react';
import './MyProfile.css';

class MyProfile extends Component {
  render() {
    return (
      <div className="my-profile">
        <p>
          Username: XXX
        </p>
        <p>
          Gender: Female
        </p>
        <p>
          Work: IT Industry
        </p>
        <p>
          Website: '/my-profile'
        </p>
      </div>
    );
  }
}

export default MyProfile;

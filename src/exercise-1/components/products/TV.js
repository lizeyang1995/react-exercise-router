import React, {Component} from 'react';
import './Products.css';

class TV extends Component {
  render() {
    return (
      <div className="tv">
        <h3>Product Details</h3>
        <p>
          Name: TV
        </p>
        <p>
          Id: 2
        </p>
        <p>
          Price: 40
        </p>
        <p>
          Quantity: 16
        </p>
        <p>
          Desc: TV is good
        </p>
        <p>
          URL: /products/2
        </p>
      </div>
    );
  }
}

export default TV;

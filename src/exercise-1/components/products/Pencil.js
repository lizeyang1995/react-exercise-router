import React, {Component} from 'react';
import './Products.css';

class Pencil extends Component {
  render() {
    return (
      <div className="pencil">
        <h3>Product Details</h3>
        <p>
          Name: Pencil
        </p>
        <p>
          Id: 3
        </p>
        <p>
          Price: 50
        </p>
        <p>
          Quantity: 17
        </p>
        <p>
          Desc: Pencil is good
        </p>
        <p>
          URL: /products/3
        </p>
      </div>
    );
  }
}

export default Pencil;

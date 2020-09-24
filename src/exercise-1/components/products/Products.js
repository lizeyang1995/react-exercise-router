import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './Products.css';
import Data from '../../../exercise-2/mockups/data.json';

class Products extends Component {
  render() {
    return (
      <div className="products">
        <p>
          All Products:
        </p>
        {
          Object.values(Data).map(product => (
            <p key={product.name}>
              <Link to={`/products/${product.id}`}>{product.name}</Link>
            </p>
          ))
        }
      </div>
    );
  }
}

export default Products;

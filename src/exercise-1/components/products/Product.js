import React, {Component} from 'react';
import Data from '../../../exercise-2/mockups/data.json';

class Product extends Component {
  state = {
    detail: {}
  }

  componentDidMount() {
    const data = Object.values(Data);
    const product = data.filter(product => product.id === parseInt(this.props.match.params.id))[0];
    this.setState({
      detail: product
    })
  }

  render() {
    return (
      <div className="product">
        <h3>Product Details</h3>
        <p>
          Name: {this.state.detail.name}
        </p>
        <p>
          Id: {this.state.detail.id}
        </p>
        <p>
          Price: {this.state.detail.price}
        </p>
        <p>
          Quantity: {this.state.detail.quantity}
        </p>
        <p>
          Desc: {this.state.detail.desc}
        </p>
        <p>
          URL: /products/{this.state.detail.id}
        </p>
      </div>
    );
  }
}

export default Product;

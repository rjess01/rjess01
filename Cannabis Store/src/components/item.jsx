import React, { Component } from 'react';
import QuantityPicker from './quantityPicker';

import './item.css';


class Item extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="Item">
                <img src={"/images/products/" + this.props.data.image} alt="product"></img>
            

            <h5>{this.props.data.title}</h5>
            
            <label>Total ${this.props.data.price.toFixed(2)}</label>
            <label>Price ${this.props.data.price.toFixed(2)}</label>

            <div className="item-controls">
                <QuantityPicker></QuantityPicker>

                <button className="btn btn-sm btn-info btn-add"> Add To Cart-E 
                    <i className="fa fa-cart-plus"></i>
                    </button>
                </div>
            </div>
         );
    }
}
 
export default Item;
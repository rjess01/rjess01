import React, { Component } from 'react';
import Item from './item';
import ItemService from '../services/itemservice';

class Catalog extends Component {
    state = { 
        catalog: []
     };

    render() {
         
        return ( 
            <div className="catalog">
                <h3>Our Catalog</h3>
                <h5>Plenty of { this.state.catalog.length } Flower to choose from</h5>
               

            { this.state.catalog.map( obj => <Item key={obj._id} data={obj}></Item> ) }

            </div>
         );
    }

 
// best place to load data from server
// exicuted after the initail render
    componentDidMount() {
        let service = new ItemService();
        let data = service.getCatalog();
        this.setState({ catalog: data });
    }

}

export default Catalog;
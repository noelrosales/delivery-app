import React, { Component } from 'react';
import './style.css';

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <nav>
                <h1>Delivery App</h1>
                <h4>Welcome Dek</h4>
            </nav>
        );
    }
}
 
export default Navbar;
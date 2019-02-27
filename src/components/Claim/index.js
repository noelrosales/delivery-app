import React, { Component } from 'react';
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';

class Claim extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <div className="Parcel">
                <Navbar />
                <div className="w3-container-fluid">
                    <div className="w3-row">
                        <div className="w3-col m2">
                            <Sidebar />
                        </div>
                        <div className="w3-col m10 w3-animate-right">
                            <div className="w3-container">
                                <div className="w3-card-4">
                                    <h1 className="w3-blue w3-container">Claim</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default Claim;
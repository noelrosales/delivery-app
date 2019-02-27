import React, { Component } from 'react';
import axios from 'axios';
import { Route, Redirect, withRouter } from 'react-router-dom';
import './style.css';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            staffId: '',
            password: '',
            loading: false
        }
    }

    componentDidMount(){
        //check if logged in
        const checker = localStorage.getItem('user');

        if(checker) {
            this.props.history.push('/parcel')
        }
    }

    handleChange = (e) => {
        console.log(e.target.name);
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    login = (e) => {
        e.preventDefault();
        const { staffId, password } = this.state;

        e.preventDefault();
        console.log(this.state);

        axios({
                method: 'post',
                url: 'http://ec2-52-74-225-236.ap-southeast-1.compute.amazonaws.com/server/api/v1/delivery-person/auth/login',
                data: {
                staffId: staffId, 
                password: password
            },
            headers: {
                'x-auth-deviceid' : '1',
                'x-auth-devicetype' : '1'
            }
        })
        .then( res => {
            const status = res.data.success;
            
            if(status === true){
               localStorage.setItem('user', JSON.stringify(res.data.data.user));
               this.props.history.push('/parcel')
            } else {
                alert('uh oh ahh')
            }
        })
        .catch( err => console.log(err))
    }

    render() { 
        return (
            <div className="Login w3-teal w3-container">
                <form ref="login" onSubmit={this.login} className="login-form w3-container w3-card w3-display-middle">
                    <h1>Login</h1>
                    <div className="">
                        <label>Staff ID</label>
                        <input className="w3-input" type="text" name="staffId" onChange={this.handleChange}/>
                        <br />
                        <label>Password</label>
                        <input className="w3-input" type="password" name="password" onChange={this.handleChange}/>
                        <br />
                        <input className="w3-btn w3-blue" type="submit"  value="LOGIN" />
                    </div>
                </form>
            </div>
        );
    }
}
 
export default withRouter(Login);
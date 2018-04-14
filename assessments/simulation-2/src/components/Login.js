import React, {Component} from 'react';
import logo from '../assets/auth_logo.png';

class Login extends Component {

    render(){
        return (
            <div className="login_page">
            <div className="login_container">
            <img src={logo} alt=""/>
                <form className="login_form">
                <label>Username</label>
                <br/>
                <input type="text"/>
                <br/>
                <label>Password</label>
                <br/>
                <input type="text"/>
                <br/>
                </form>
            <div className="auth_btn_container">
                <button className="btn btn-default btn-danger">
                Login
                </button>
                <button className="auth_btn_register">
                Register
                </button>
            </div>
            </div>
        </div>
        )
    }
}

export default Login;
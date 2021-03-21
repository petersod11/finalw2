import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './header.js';
import Form from './form.js';

class Login extends Component{
    render() {
        return (
            <div className="Login">
                <Header />
                <Form />
            </div>
        );
    }
}
export default Login;

ReactDOM.render(
    <Login />,
    document.getElementById('root')
  );

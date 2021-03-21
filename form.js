import React from 'react';
import './index.css';

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            username: '',
            password: '', };
      }
      myChangeHandler = (event) => {
          let nam = event.target.name;
          let pass = event.target.password;
        this.setState({[nam]: pass});
      }
      render() {
        return (
            <div className="form">
          <form>
          <p>User name:</p>
          <input
            type='text'
            name='username'
            onChange={this.myChangeHandler}
          />
          <p>Password:</p>
          <input 
            type='text'
            name='password'
            onChange={this.myChangeHandler}
            />
            <br/>
            <br/>
            <input type='submit' value="Submit"/>
            <br/>
            <br/>
            <br/>
            <br/>
            <input type='submit' value="New User"/>
          </form>
          </div>
        );
      }
    }
  export default Form 
  
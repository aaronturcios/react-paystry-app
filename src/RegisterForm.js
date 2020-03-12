import React, { Component } from 'react';



class RegisterForm extends Component {
  render() {
    return <div>
      <h4>Register Form</h4>
      <p>This is Register Form page.</p>
      <form>
          <label><input placeholder="Name"></input></label>
          <label><input placeholder="Email"></input></label>
          <button type='submit'>Register</button>
          
      </form>
    </div>
  }
}
export default RegisterForm;
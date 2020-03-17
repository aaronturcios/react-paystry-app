import React, { Component } from  'react';
import './addturnover.css';

class AddTurnover extends Component {
  render() {
    return (
      <div className="addturnover">
        <h2>Add A New Turnover</h2>
        <form className="addturnover__form">
          <label htmlFor="address">Address:</label>
          <input type="text" name="address" id="address" placeholder="address"/>
          

          <div className="addturnover__buttons">
            <button>Cancel</button>
            <button type="submit" >Save</button>
          </div>  
        </form>
      </div>
    );
  }
}

export default AddTurnover;
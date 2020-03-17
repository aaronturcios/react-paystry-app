import React, { Component } from 'react';
import './turnoverApp.css';
import TurnoverList from '../turnoverList/turnoverList';
import Fab from '../fab/fab';

class TurnoverApp extends Component {
  render() {
    return (
      <div className="turnoverApp">
        <h2>Turnovers</h2>
        <TurnoverList turnovers={this.props.turnovers}/>
        <Fab/>
      </div>
    );
  }
}

export default TurnoverApp;
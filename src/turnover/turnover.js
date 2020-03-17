import React from 'react';

export default function Turnover(props) {
    const turnovers = props.turnoverDatas.map(item => 
    item.completed ? <li> {item.text} COMPLETED</li> : <li> {item.text}</li>)
    
    
    return (
      <div className="turnover">
        <div className="turnover__row">
          <div className="turnover__address">
                {props.address}
              <ul>{turnovers}</ul>
          </div>
        </div>      
        
      </div>
    ) 
  }
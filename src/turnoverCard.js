import React from 'react';


export default function TurnoverCard (props) {
    return (
        <div className="turnoverCard">
            <button type ="button">delete</button>
            <h3> {props.title} </h3>
            <p> {props.content} </p>
        </div>
    )
}


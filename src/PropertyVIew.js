import React from 'react';
import TurnoverCard from './TurnoverCard.js';


export default function PropertyView(props) {
    return (
       <section className="Property-view">
           <header className="Property-header"> 
            <h2>{props.header}</h2> 
           </header>
           <div className="property-cards">
              {props.turnoverCard.map((card) =>
               <TurnoverCard
                    title={TurnoverCard.title}
                    content={TurnoverCard.content}
                    key={TurnoverCard.id}
                    />
               )}
               <button
                    type='button'
                    className='Property-add-button'>
                        + Add New Property
                </button>
           </div>
       </section>
    )
}
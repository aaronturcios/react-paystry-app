import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Turnover from '../turnover/turnover';
import TurnoversContext from '../TurnoversContext';

//import STORE from '../store'

class TurnoverList extends Component {
  static proptTypes = {
    bookmarks: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string,
      })
    )
  };

  static defaultProps = {
    turnovers: []
  };

  static contextType = TurnoversContext;

  render() {
    const { turnovers } = this.context
    return (
      <section className='TurnoverList'>
        <h2>Your bookmarks</h2>
        <ul className='TurnoverList__list' aria-live='polite'>
          {turnovers.map(turnover=>
            <Turnover
              key={turnover.id}
              {...turnover}
            />
          )}
        </ul>
      </section>
    );
  }
}

export default TurnoverList;




// class TurnoverList extends Component {
//     componentDidMount() {
//         //TODO Add fetch to database when server is ready
//     }
  
//     render() {
//     const turnovers = this
//           .props
//           .turnovers
//           .map((turnover, i) => <Turnover { ...turnover } key={i}/>);
//     return (
//       <div className="turnoverList">
//         {turnovers}
//       </div>
//     );
//   }
// }

// TurnoverList.defaultProps = {
//   turnovers: STORE
// };

// export default TurnoverList;
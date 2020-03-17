import React from 'react'

const TurnoversContext = React.createContext({
  turnovers: [],
  addTurnover: () => {},
  deleteTurnover: () => {},
})

export default TurnoversContext
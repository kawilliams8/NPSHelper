import React from 'react';
import Park from '../../containers/Park/Park'

const ParksContainer = ({ parks }) => {

  const parksCards = parks.map(park => {
    return <Park key={park.parkCode} park={park}/>
  })

  return (
    <section className="ParksContainer">
      {parksCards}
    </section>
  )
}

export default ParksContainer;
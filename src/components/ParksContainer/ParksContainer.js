import React from 'react';
import { Link } from 'react-router-dom';
import Park from '../../containers/Park/Park';
import './ParksContainer.css';

const ParksContainer = ({ parks }) => {

  const parksCards = parks.map(park => {
    const { parkCode} = park;
    return (
      <Link to={`/${parkCode}`}>
        <div key={parkCode} className="Park" park={park}>{park.name}</div>
      </Link>
    )
  })

  return (
    <section className="ParksContainer">
      {parksCards}
    </section>
  )
}

export default ParksContainer;
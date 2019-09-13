import React from 'react';
import { Link } from 'react-router-dom';
import './ParksContainer.css';

const ParksContainer = ({ parks }) => {

  const parkCards = parks.map(park => {
    const { id, parkCode, name, states, type } = park;
    return (
      <Link to={`/${type}/${parkCode}`}>
        <div className="Park-link" key={id} type={type}>
          <h3>{name}</h3>
          <h4>{states}</h4>
        </div>
      </Link>
    )
  })

  return (
    <section className="ParksContainer">
      {parkCards}
    </section>
  )
}

export default ParksContainer;
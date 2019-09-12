import React from 'react';
import './Park.css';

const Park = ({park}) => {
  return (
    <section className="Park">
      <h2>{park.name}</h2>
      <h3>{park.description}</h3>
      <h3>{park.designation}</h3>
      <h3>{park.directionsInfo}</h3>
      <h3>{park.directionsUrl}</h3>
      <h3>{park.fullName}</h3>
      <h3>{park.latLong}</h3>
      <h3>{park.states}</h3>
      <h3>{park.url}</h3>
      <h3>{park.weatherInfo}</h3>
    </section>
  )
}

export default Park;
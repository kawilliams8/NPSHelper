import React from 'react';
import './Park.css';

const Park = ({park}) => {
  return (
    <section className="Park">
      <h2>{park.name}</h2>
      <h3>{park.fullName}</h3>
      <h3>Designation: {park.designation}</h3>
      <h3>Home State: {park.states}</h3>
      <h3>{park.description}</h3>
      <h3>Directions: {park.directionsInfo}</h3>
      <h3>LatLong: {park.latLong}</h3>
      <h3>Weather: {park.weatherInfo}</h3>
      <a href={park.url}>Official Site</a>
    </section>
  )
}

export default Park;
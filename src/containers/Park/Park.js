import React from 'react';
import { Link } from 'react-router-dom';
import './Park.css';

const Park = ({ park }) => {
  return (
    <section className="Park">
      <Link to="/parks" className="button">Go Back</Link>
      <h2>{park.name}</h2>
      <h3>{park.fullName}</h3>
      <h3>Designation: {park.designation}</h3>
      <h3>Home State: {park.states}</h3>
      <h3>{park.description}</h3>
      <h3>Directions: {park.directionsInfo}</h3>
      <h3>LatLong: {park.latLong}</h3>
      <h3>Weather: {park.weatherInfo}</h3>
      <a href={park.url}>Official Site</a>
      <img src={park.images[0].url} alt={park.fullName} />
    </section>
  )
}

export default Park;
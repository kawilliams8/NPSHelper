import React from 'react';
import { Link } from 'react-router-dom';
import './Park.css';

const Park = (props) => {
  console.log('Park props', props)
  return (
    <div className="Park">
      <Link to="/parks/" className="button">Go Back</Link>
      <section className="Park">
        <h2>{props.park.name}</h2>
        <h3>{props.park.fullName}</h3>
        <h3>Designation: {props.park.designation}</h3>
        <h3>Home State: {props.park.states}</h3>
        <h3>{props.park.description}</h3>
        <h3>Directions: {props.park.directionsInfo}</h3>
        <h3>LatLong: {props.park.latLong}</h3>
        <h3>Weather: {props.park.weatherInfo}</h3>
        <a href={props.park.url}>Official Site</a>
        <img src={props.park.images[0].url} alt={props.park.fullName} />
      </section>
    </div>
  )
}

export default Park;
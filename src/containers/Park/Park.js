import React from 'react';
import { Link } from 'react-router-dom';
import notFound from '../../images/image-not-found.jpg';
import { key } from '../App/key';
import './Park.css';

const Park = ({ park }) => {
  console.log('inPark', park)
  let mapUrl = "";
  if (park.latLong) {
  const lat = park.latLong.split(" ")[0].substring(4);
  const long = park.latLong.split(" ")[1].substring(5);
  mapUrl = `https://api.mapbox.com/styles/v1/mapbox/light-v9/static/${long},${lat}5,0,0/500x400?access_token=${key.mb_api_key}`
  }

  return (
    <section className="Park-card">
      <img className="Park-card-image" src={park.images[0].url || notFound  } alt={park.fullName} />
      {park.latLong && <img className="Park-card-map" src={mapUrl} alt='map' />}
      <article className="Park-card-info">
      <h2>{park.name}</h2>
      <h3>{park.fullName}</h3>
      <h3>Designation: {park.designation}</h3>
      <h3>Home State: {park.states}</h3>
      <h3>{park.description}</h3>
      <h3>Directions: {park.directionsInfo}</h3>
      <h3>LatLong: {park.latLong}</h3>
      <h3>Weather: {park.weatherInfo}</h3>
      <a href={park.url} target="_blank" rel="noopener noreferrer">Official Site</a>
      <Link to="/parks" className="button">Go Back</Link>
      </article>
    </section>
  )
}

export default Park;
import React from 'react';
import PropTypes from 'prop-types';
import '../Trail/Trail.css';

const Trail = ({ trail }) => {  
  return (
    <article className="Trail">
      <img src={trail.imgSmall} alt={trail.name} className="Trail-image"/>
      <div className="Trail-info-wrapper">
      <h3>{trail.name}, Distance: {trail.length} miles</h3>
      <h4>{trail.summary}</h4>
      <h4>Ascent: {trail.ascent} feet, Descent: {trail.descent} feet</h4>
      </div>
    </article>
  )
}

export default Trail;

Trail.propTypes = {
  props: PropTypes.shape({
    description: PropTypes.string,
    designation: PropTypes.string,
    directionsInfo: PropTypes.string,
    directionsUrl: PropTypes.string,
    fullName: PropTypes.string,
    id: PropTypes.string,
    latLong: PropTypes.string,
    name: PropTypes.string,
    parkCode: PropTypes.string,
    states: PropTypes.string,
    type: PropTypes.string,
    url: PropTypes.string,
    weatherInfo: PropTypes.string,
  })
}
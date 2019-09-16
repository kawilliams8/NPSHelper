import React from 'react';
import '../Trail/Trail.css';

const Trail = ({ trail }) => {
  console.log(trail)
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

export default Trail
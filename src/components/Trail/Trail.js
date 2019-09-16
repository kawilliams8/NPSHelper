import React from 'react';
import '../Trail/Trail.css';

const Trail = ({ trail }) => {
  console.log(trail)
  return (
    <article className="Trail">
      <img src={trail.imgSqSmall} alt={trail.name} className="Trail-image"/>
      <h3>{trail.name}</h3>
      <h4>{trail.length} miles</h4>
      <h4>{trail.summary}</h4>
      <h4>{trail.ascent}</h4>
      <h4>{trail.descent}</h4>
    </article>
  )
}

export default Trail
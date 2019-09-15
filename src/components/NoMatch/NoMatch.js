import React from 'react';
import { NavLink } from 'react-router-dom';

const NoMatch = () => {
  return (
    <div className="NoMatch"> 
      <h2>Sorry, this page doesn't exist.</h2>
      <NavLink to="/" className="NavText">HOME</NavLink>
    </div>
  )
}

export default NoMatch;
import React from 'react';
import { NavLink } from 'react-router-dom';
import Arrowhead from '../../assets/images/US-NationalParkService-Logo.svg';

const NoMatch = () => {
  return (
    <div className="NoMatch"> 
      <h2>Sorry, this page doesn't exist.</h2>
      <h3>Return to the{<NavLink to="/" className="NavText">Welcome Center</NavLink>}</h3>
      <img src={Arrowhead} alt="National Parks Service arrowhead logo" />
    </div>
  )
}

export default NoMatch;
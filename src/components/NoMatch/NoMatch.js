import React from 'react';
import { NavLink } from 'react-router-dom';
import Arrowhead from '../../assets/images/US-NationalParkService-Logo.svg';
import '../NoMatch/NoMatch.css';

const NoMatch = () => {
  return (
    <div className="NoMatch">
      <h2>Sorry, you've gone off trail.</h2>
      <h3>Return to the {<NavLink to="/" className="NoMatch-NavText">Welcome Center</NavLink>}</h3>
      <img src={Arrowhead} alt="National Parks Service arrowhead logo" className="NoMatch-arrowhead" />
    </div>
  )
}

export default NoMatch;
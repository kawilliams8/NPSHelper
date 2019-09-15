import React from 'react';
import Arrowhead from '../../assets/images/US-NationalParkService-Logo.svg';
import './Home.css';

const Home = () => {
  return (
    <div className="Home">
      <h2 className="Home-welcome">Home Component Here</h2>
      <img src={Arrowhead} alt="National Parks Service arrowhead logo" className="Home-arrowhead"/>
    </div>
  )
}

export default Home;
import React from 'react';
import Arrowhead from '../../assets/images/US-NationalParkService-Logo.svg';
import './Home.css';

const Home = () => {
  return (
    <div className="Home">
      <h2 className="Home-welcome">National Park System of the U.S.</h2>
      <section className="Home-nps-info">
      <img src={Arrowhead} alt="National Parks Service arrowhead logo" className="Home-arrowhead"/>
      <div className="Home-info-wrapper">
        <p>The National Park System is the collection of physical properties owned or administered by the National Park Service. The collection includes all national parks and most national monuments, as well as several other types of protected areas of the United States. As of March 2019, there are 419 units of the National Park System.</p>
        <p>The National Register of Historic Places (NRHP), which contains nearly 79,000 entries, is administered by the National Park Service. All historically significant park units are automatically included on the NRHP—i.e., all national historical parks and historic sites, national battlefields and military parks, and national memorials, as well as some national monuments.</p>
        <p>National Park System units are found in all 50 states, in Washington, D.C., and in the U.S.territories of Guam, the Northern Mariana Islands, American Samoa, the U.S.Virgin Islands, and Puerto Rico.</p >
        <p>Nearly all units managed by the National Park Service participate in the National Park Passport Stamps program.</p>
      </div>
      </section>
    </div>
  )
}

export default Home;
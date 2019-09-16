import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { addFavorite, removeFavorite } from '../../actions';
import Trails from '../../components/TrailsContainer/TrailsContainer';
import notFound from '../../assets/images/image-not-found.jpg';
import { key } from '../App/key';
import './Park.css';

export const Park = (props) => { 
  const { park } = props;
  console.log(park)
  let lat, long, mapUrl = "";
  if (park.latLong) {
    lat = park.latLong.split(" ")[0].substring(4);
    long = park.latLong.split(" ")[1].substring(5);
    mapUrl = `https://api.mapbox.com/styles/v1/mapbox/light-v9/static/${long},${lat}5,0,0/500x400?access_token=${key.mb_api_key}`
  }
  let img = notFound; 
  if (park.images) {
    img = park.images[0].url
  }

  return (
    <section className="Park">
      <h2 className="Park-heading">{park.name}</h2>
      <h3 className="Park-subheading">Full Name: {park.fullName}</h3>
      <h3 className="Park-subheading">Designation: {park.designation}</h3>
      <h3 className="Park-subheading">Home State: {park.states}</h3>
      <div className="Park-button-wrapper">
        <button className="Park-fave-button" onClick={() => props.addFavorite(park)}>Add to Favorites</button>
        <button className="Park-fave-button" onClick={() => props.removeFavorite(park)}>Remove from Favorites</button>
      </div>
      <div className="Park-images-wrapper">
        <img className="Park-card-image" src={img} alt={park.fullName} />
        {park.latLong && <img className="Park-card-image" src={mapUrl} alt='map' />}
      </div>
      <div className="Park-info-cards">
        <article className="Park-card-info">
          <h3 className="Park-info-subheading">Description:</h3>
          <h3>{park.description}</h3>
          <h3 className="Park-info-subheading">Directions:</h3>
          <h3>{park.directionsInfo}</h3>
          <h3 className="Park-info-subheading">Weather:</h3>
          <a className="Park-weather-link" href={park.weatherInfo} target="_blank" rel="noopener noreferrer">View Current Weather Report</a>
          <h3 className="Park-info-subheading">Further Information:</h3>
          <a className="Park-site-link" href={park.url} target="_blank" rel="noopener noreferrer">Official Site</a>
        </article>
        <Trails data={park}/>
      </div>
      <Link to="/parks" className="Park-final-link">RETURN</Link>
    </section>
  )
}

export const mapStateToProps = state => ({
  parks: state.parks,
  monts: state.monts,
  others: state.others,
  favorites: state.favorites
});

export const mapDispatchToProps = dispatch => ({
  addFavorite: park => dispatch(addFavorite(park)),
  removeFavorite: park => dispatch(removeFavorite(park))
});

export default connect(mapStateToProps, mapDispatchToProps)(Park);

Park.propTypes = {
  props : PropTypes.shape({
    addfavorite : PropTypes.func,
    removeFavorite : PropTypes.func,
    parks : PropTypes.array,
    monts: PropTypes.array,
    others : PropTypes.array,
    favorites : PropTypes.array,
    park: PropTypes.object
  })
}
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Star from '../../assets/images/star.png';
import './ParksContainer.css';

export const ParksContainer = (props) => {
  const { type } = props;
  const parkCards = props[type].map(park => {
    const { id, parkCode, name, states, type, designation, description } = park;
    return (
      <Link to={`/${type}/${parkCode}`} style={{ textDecoration: 'none' }}>
        <div className="Park-link" key={id} type={type}>
          <h3 className="Park-link-heading">
            {window.location.pathname === '/favorites' && <img className="Favorites-star" src={Star} alt="star"/>}
            {name}
            </h3>
          <h4 className="Park-link-body">{designation}</h4>
          <h4 className="Park-link-body">{states}</h4>
          <p className="Park-link-description">{description}</p>
          <p className="Park-link-ellipsis">...</p>
          <Link to={`/parks/${parkCode}`} className="Park-link-more">Read More...</Link>
        </div>
      </Link>
    )
  })

  return (
    <section className={`ParksContainer ${type}`}>
      {parkCards}
    </section>
  )
}

export const mapStateToProps = state => ({
  parks: state.parks,
  monts: state.monts,
  others: state.others,
  favorites: state.favorites
});

export default connect(mapStateToProps)(ParksContainer);

ParksContainer.propTypes = {
  props : PropTypes.shape({
    dispatch : PropTypes.func,
    favorites : PropTypes.array,
    parks : PropTypes.array,
    others: PropTypes.array,
    monts : PropTypes.array,
    type : PropTypes.string
  })
}
import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './ParksContainer.css';

export const ParksContainer = (props) => {
  const { type } = props;
  const parkCards = props[type].map(park => {
    const { id, parkCode, name, states, type, designation, description } = park;
    return (
      <Link to={`/${type}/${parkCode}`} style={{ textDecoration: 'none' }}>
        <div className="Park-link" key={id} type={type}>
          <h3 className="Park-link-heading">{name}</h3>
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
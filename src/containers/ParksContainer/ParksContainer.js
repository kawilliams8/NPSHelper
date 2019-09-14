import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './ParksContainer.css';

export const ParksContainer = (props) => {
  const { type } = props;
  const parkCards = props[type].map(park => {
    const { id, parkCode, name, states, type } = park;
    return (
      <Link to={`/${type}/${parkCode}`}>
        <div className="Park-link" key={id} type={type}>
          <h3>{name}</h3>
          <h4>{states}</h4>
        </div>
      </Link>
    )
  })

  return (
    <section className="ParksContainer">
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
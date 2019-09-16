import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Trail from '../Trail/Trail';
import './TrailsContainer.css';
import { fetchTrails } from '../../apiCalls/apiCalls';

export default class TrailsContainer extends Component {
  constructor(props){
    super(props)
    this.state = {
    lat: "",
    long: "",
    url: "",
    trails: []
  }
}

  componentDidMount () {
    let lat, long;
    if (this.props.data.latLong) {
        try {
        lat = this.props.data.latLong.split(" ")[0].substring(4, 12);
        long = this.props.data.latLong.split(" ")[1].substring(5, 15);
        this.setState({lat: lat, long: long})
      } finally {
        this.setState({ url: `https://www.trailrunproject.com/data/get-trails?lat=${lat}&lon=${long}&maxDistance=10&key=200590238-ef474523460511c3d882949ee2312c21` })
      }
    }
  }

  componentDidUpdate() {
    if (this.state.trails.length < 1) {
      fetchTrails(this.state.url)
      .then(data => this.setState({trails: data.trails}))
      .catch(error => this.setState({error: error.message}))
    }
  }
  
  render() {
    const trailCards = this.state.trails.map((trail, index) => {
      return <Trail trail={trail} key={index}/>
    });

    return (
      <section className="TrailsContainer">
        <h3 className="Trails-info-subheading">Hiking/Running Trails near {this.props.data.name}:</h3>
        {this.state.trails.length < 1 && <h4>No trails found near this National Park... Volunteer and build one!</h4>}
        {trailCards}
      </section>
    )
  }
};

TrailsContainer.propTypes = {
  props: PropTypes.shape({
    description: PropTypes.string,
    designation: PropTypes.string,
    directionsInfo: PropTypes.string,
    directionsUrl: PropTypes.string,
    fullName: PropTypes.string,
    id: PropTypes.string,
    latLong: PropTypes.string,
    name: PropTypes.string,
    parkCode: PropTypes.string,
    states: PropTypes.string,
    type: PropTypes.string,
    url: PropTypes.string,
    weatherInfo: PropTypes.string,
  })
}
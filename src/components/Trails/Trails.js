import React, { Component } from 'react';
import '../Trails/Trails.css';

export default class Trails extends Component {
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

  componentDidUpdate(prevProps) {
    if (this.state.trails.length < 1) {
      fetch(this.state.url)
        .then(res => res.json())
        .then(data => this.setState({trails: data.trails}))
        .catch(error => this.setState({error: error.message}))
    }
  }
  
  render() {
    console.log('trails', this.state.trails)
    return (
      <section className="Trails">
        <h3 className="Trails-info-subheading">Hiking/Running Trails near {this.props.data.name}:</h3>
        {this.state.trails.length < 1 && <h4>Not found.</h4>}
      </section>
    )
  }
}
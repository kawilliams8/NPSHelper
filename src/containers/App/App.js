import React, { Component } from 'react';
import './App.css';
import ParksContainer from '../../components/ParksContainer/ParksContainer';
import TempParkData from '../App/TempData';
import { key } from './key.js';

class App extends Component {
  constructor() {
    super()
    this.state = {
      parks: [],
      error: "",
      isLoading: true
    }
  }

  componentDidMount() {
    // Comment in fetch and remove temp data
    fetch(`https://developer.nps.gov/api/v1/parks?api_key=${key.api_key}`)
    .then(res => res.json())
    .then(data => this.setState({parks: data.data}))
    .then(() => this.setState({isLoading: false}))
    .catch(error => this.setState({error: error.message}))
  }

  render() {
    return (
      <div className="App">
        <ParksContainer parks={this.state.parks}/>
      </div>
    )
  }
}

export default App;
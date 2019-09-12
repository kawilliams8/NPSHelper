import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Home from '../Home/Home';

import './App.css';
import ParksContainer from '../../components/ParksContainer/ParksContainer';
import Park from '../Park/Park';
import TempParkData from '../App/TempData';
import { key } from './key.js';

class App extends Component {
  constructor() {
    super()
    this.state = {
      parks: TempParkData,
      error: "",
      isLoading: true
    }
  }

  componentDidMount() {
    // Comment in fetch and remove temp data, reassign state to array
    // fetch(`https://developer.nps.gov/api/v1/parks?api_key=${key.api_key}`)
    // .then(res => res.json())
    // .then(data => this.setState({parks: data.data}))
    // .then(() => this.setState({isLoading: false}))
    // .catch(error => this.setState({error: error.message}))
  }

  render() {
    return (
      <main className="App">
        <Router>
        <header className="App-header">
          <NavLink to="/parks" className="NavText">Home</NavLink>  
        </header>
        <Route exact path='/parks' render={ () => <ParksContainer parks={this.state.parks}/>} />
        <Route path='/parks/:id' render={ ({ match }) => {
          const { parkCode } = match.params;
          const park = this.state.parks.find(park => park.parkCode === parkCode);
          return <Park park={park}/>
        }} />
        </Router>
      </main>
    )
  }
}

export default App;
import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';
import { storeParks, storeMonts, storeOthers, addFavorite, removeFavorite } from '../../actions';
import { connect } from 'react-redux';
import Home from '../Home/Home';
import ParksContainer from '../../components/ParksContainer/ParksContainer';
import Park from '../Park/Park';
import './App.css';

import { key } from './key.js';
import TempParkData from '../App/TempData';

export class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      error: "",
      isLoading: true
    }
  }

  componentDidMount() {
    // Comment in fetch and remove temp data, reassign state to array
    fetch(`https://developer.nps.gov/api/v1/parks?api_key=${key.nps_api_key}`)
    .then(res => res.json())
    .then(data => this.filterParks(data.data))
    .then(() => this.setState({isLoading: false}))
    .then(() => console.log(this.state.isLoading))
    .catch(error => this.setState({error: error.message}))
  }

  filterParks = (data) => {
    let natlParks = data.filter(park => park.designation === "National Park");
    natlParks.map(park => park.type = "parks")
    this.props.storeParks(natlParks);
    let natlMonts = data.filter(park => park.designation === "National Monument");
    natlMonts.map(park => park.type = "monuments");
    this.props.storeMonts(natlMonts);
    this.setState({ monuments: natlMonts });
    let natlOthers = data.filter(park => park.designation !== "National Park" && park.designation !== "National Monument");
    natlOthers.map(park => park.type = "others");
    this.props.storeOthers(natlOthers);
  }

  render() {
    return (
      <main className="App">
        {this.state.isLoading}
        <header className="App-header">
          <NavLink to="/" className="NavText">Home</NavLink>
          <NavLink to="/parks" className="NavText">National Parks</NavLink>
          <NavLink to="/monuments" className="NavText">National Monuments</NavLink>
          <NavLink to="/others" className="NavText">Other Sites</NavLink>
          <NavLink to="/favorites" className="NavText">Favorite Sites</NavLink>
        </header>
        <Route exact path='/' component={Home} />
        <Route exact path='/parks' render={ () => <ParksContainer parks={this.props.parks}/>} />
        <Route exact path='/monuments' render={() => <ParksContainer parks={this.props.monuments} />} />
        <Route exact path='/others' render={() => <ParksContainer parks={this.props.others} />} />
        <Route exact path='/favorites' render={() => <ParksContainer parks={this.props.favorites} />} />

        <Route path='/parks/:parkCode' render={({ match }) => {
          const { parkCode } = match.params;
          const park = this.props.parks.find(park => park.parkCode === parkCode);
          return <Park park={park}/>
        }} />
        <Route path='/monuments/:parkCode' render={({ match }) => {
          const { parkCode } = match.params;
          const park = this.props.parks.find(park => park.parkCode === parkCode);
          return <Park park={park} />
        }} />
        <Route path='/others/:parkCode' render={({ match }) => {
          const { parkCode } = match.params;
          const park = this.props.parks.find(park => park.parkCode === parkCode);
          return <Park park={{...park}} />
        }} />
        <Route path='/favorites/:parkCode' render={({ match }) => {
          const { parkCode } = match.params;
          const park = this.props.parks.find(park => park.parkCode === parkCode);
          return <Park park={{ ...park }} />
        }} />
      </main>
    )
  }
}

const mapStateToProps = state => ({
  parks: state.parks,
  monts: state.monts,
  others: state.others,
  favorites: state.favorites
});

const mapDispatchToProps = dispatch => ({
  storeParks: parks => dispatch(storeParks(parks)),
  storeMonts: monts => dispatch(storeMonts(monts)),
  storeOthers: others => dispatch(storeOthers(others)),
  addFavorite: park => dispatch(addFavorite(park)),
  removeFavorite: park => dispatch(removeFavorite(park))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
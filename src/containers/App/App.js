import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Route, NavLink, Switch } from 'react-router-dom';
import { storeParks, storeMonts, storeOthers, addFavorite, removeFavorite } from '../../actions';
import { fetchParks } from '../../apiCalls/apiCalls';
import { connect } from 'react-redux';
import Loading from '../../assets/images/loading.gif';
import Home from '../../components/Home/Home';
import ParksContainer from '../ParksContainer/ParksContainer';
import Park from '../Park/Park';
import './App.css';
import NoMatch from '../../components/NoMatch/NoMatch';

export class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      parks: [],
      error: "",
      isLoading: true
    }
  }

  componentDidMount() {
    fetchParks()
    .then(data => this.filterAndStoreParks(data))
    .then(() => this.setState({isLoading: false}))
    .catch(error => this.setState({error: error.message}))
  }

  filterAndStoreParks = (data) => {
    let natlParks = data.filter(park => park.designation === "National Park");
    natlParks.map(park => park.type = "parks")
    this.props.storeParks(natlParks);
    let natlMonts = data.filter(park => park.designation === "National Monument");
    natlMonts.map(park => park.type = "monuments");
    this.props.storeMonts(natlMonts);
    let natlOthers = data.filter(park => park.designation !== "National Park" && park.designation !== "National Monument");
    natlOthers.map(park => park.type = "others");
    this.props.storeOthers(natlOthers);
  }

  render() {
    return (
      <main className="App">
        <header className="App-header">
          <NavLink to="/" className="App-nav-text">HOME</NavLink>
          <NavLink to="/parks" className="App-nav-text">NATIONAL PARKS</NavLink>
          <NavLink to="/monuments" className="App-nav-text">NATIONAL MONUMENTS</NavLink>
          <NavLink to="/others" className="App-nav-text">OTHER SITES</NavLink>
          <NavLink to="/favorites" className="App-nav-text">MY FAVORITES</NavLink>
        </header>
        {this.state.isLoading && <h2 className="App-welcome">Welcome to NPS Helper</h2>}
        {this.state.isLoading && <img src={Loading} alt="mountains animation" className="App-loading"/>}
        {this.state.error && <h2 className="App-welcome">{this.state.error}</h2>}
        <Switch>
          {!this.state.isLoading && <Route exact path='/' component={Home} />}
          <Route exact path='/parks' render={() => <ParksContainer type={"parks"} />} />
          <Route exact path='/monuments' render={() => <ParksContainer type={"monts"} />} />
          <Route exact path='/others' render={() => <ParksContainer type={"others"} />} />
          <Route exact path='/favorites' render={() => <ParksContainer type={"favorites"} />} />
          <Route path='/parks/:parkCode' render={({ match }) => {
            const { parkCode } = match.params;
            const park = this.props.parks.find(park => park.parkCode === parkCode);
            return <Park park={park}/>
          }} />
          <Route exact path='/monuments/:parkCode' render={({ match }) => {
            const { parkCode } = match.params;
            const park = this.props.monts.find(park => park.parkCode === parkCode);
            return <Park park={park} />
          }} />
          <Route exact path='/others/:parkCode' render={({ match }) => {
            const { parkCode } = match.params;
            const park = this.props.others.find(park => park.parkCode === parkCode);
            return <Park park={park} />
          }} />
          <Route exact path='/favorites/:parkCode' render={({ match }) => {
            const { parkCode } = match.params;
            const park = this.props.favorites.find(park => park.parkCode === parkCode);
            return <Park park={park} />
          }} />
          {!this.state.isLoading && <Route component={NoMatch} />}
        </Switch>
      </main>
    )
  }
}

export const mapStateToProps = state => ({
  parks: state.parks,
  monts: state.monts,
  others: state.others,
  favorites: state.favorites
});

export const mapDispatchToProps = dispatch => ({
  storeParks: parks => dispatch(storeParks(parks)),
  storeMonts: monts => dispatch(storeMonts(monts)),
  storeOthers: others => dispatch(storeOthers(others)),
  addFavorite: park => dispatch(addFavorite(park)),
  removeFavorite: park => dispatch(removeFavorite(park))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

App.propTypes = {
  props : PropTypes.shape({
    addFavorite: PropTypes.func,
    removeFavorite: PropTypes.func,
    favorites: PropTypes.array,
    parks: PropTypes.array,
    others: PropTypes.array,
    monts: PropTypes.array,
    storeMonts: PropTypes.func,
    storeOthers: PropTypes.func,
    storeParks: PropTypes.func
  })
}
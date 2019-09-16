import React from 'react';
import { shallow } from 'enzyme';
import { ParksContainer, mapStateToProps } from '../ParksContainer/ParksContainer';

describe('ParksContainer', () => {

  let wrapper, mockStore, mockAddFavorite, mockRemoveFavorite;
  beforeEach(() => {
    mockStore = {
      parks: [{
        "states": "DC",
        "directionsInfo": "The memorial is located at the corner of...",
        "directionsUrl": "http://www.nps.gov/afam/planyourvisit/directions.htm",
        "url": "https://www.nps.gov/afam/index.htm",
        "weatherInfo": "Washington DC gets to see all four seasons...",
        "name": "African American Civil War Memorial",
        "latLong": "lat:38.916554, long:-77.025977",
        "description": "Over 200,000 African-American soldiers...",
        "designation": "",
        "parkCode": "afam",
        "id": "1A47416F-DAA3-4137-9F30-14AF86B4E547",
        "fullName": "African American Civil War Memorial",
        "type": "parks"
      },
      {
        "states": "GA",
        "directionsInfo": "To Augusta Canal Discovery Center...",
        "directionsUrl": "http://augustacanal.com/directions.php",
        "url": "https://www.nps.gov/auca/index.htm",
        "weatherInfo": "The weather varies...",
        "name": "Augusta Canal",
        "latLong": "lat:33.5099067687988, long:-82.0053787231445",
        "description": "The Augusta Canal...",
        "designation": "National Heritage Area",
        "parkCode": "auca",
        "id": "813548D1-F8EA-4C07-8878-17FB3C385378",
        "fullName": "Augusta Canal National Heritage Area",
        "type": "parks"
      }],
      monts: [{
        "states": "DC",
        "directionsInfo": "The memorial is located at the corner of...",
        "directionsUrl": "http://www.nps.gov/afam/planyourvisit/directions.htm",
        "url": "https://www.nps.gov/afam/index.htm",
        "weatherInfo": "Washington DC gets to see all four seasons...",
        "name": "African American Civil War Memorial",
        "latLong": "lat:38.916554, long:-77.025977",
        "description": "Over 200,000 African-American soldiers...",
        "designation": "",
        "parkCode": "afam",
        "id": "1A47416F-DAA3-4137-9F30-14AF86B4E547",
        "fullName": "African American Civil War Memorial",
        "type": "parks"
      },
      {
        "states": "GA",
        "directionsInfo": "To Augusta Canal Discovery Center...",
        "directionsUrl": "http://augustacanal.com/directions.php",
        "url": "https://www.nps.gov/auca/index.htm",
        "weatherInfo": "The weather varies...",
        "name": "Augusta Canal",
        "latLong": "lat:33.5099067687988, long:-82.0053787231445",
        "description": "The Augusta Canal...",
        "designation": "National Heritage Area",
        "parkCode": "auca",
        "id": "813548D1-F8EA-4C07-8878-17FB3C385378",
        "fullName": "Augusta Canal National Heritage Area",
        "type": "parks"
      }],
      others: [{
        "states": "DC",
        "directionsInfo": "The memorial is located at the corner of...",
        "directionsUrl": "http://www.nps.gov/afam/planyourvisit/directions.htm",
        "url": "https://www.nps.gov/afam/index.htm",
        "weatherInfo": "Washington DC gets to see all four seasons...",
        "name": "African American Civil War Memorial",
        "latLong": "lat:38.916554, long:-77.025977",
        "description": "Over 200,000 African-American soldiers...",
        "designation": "",
        "parkCode": "afam",
        "id": "1A47416F-DAA3-4137-9F30-14AF86B4E547",
        "fullName": "African American Civil War Memorial",
        "type": "parks"
      },
      {
        "states": "GA",
        "directionsInfo": "To Augusta Canal Discovery Center...",
        "directionsUrl": "http://augustacanal.com/directions.php",
        "url": "https://www.nps.gov/auca/index.htm",
        "weatherInfo": "The weather varies...",
        "name": "Augusta Canal",
        "latLong": "lat:33.5099067687988, long:-82.0053787231445",
        "description": "The Augusta Canal...",
        "designation": "National Heritage Area",
        "parkCode": "auca",
        "id": "813548D1-F8EA-4C07-8878-17FB3C385378",
        "fullName": "Augusta Canal National Heritage Area",
        "type": "parks"
      }],
      favorites: [{
        "states": "DC",
        "directionsInfo": "The memorial is located at the corner of...",
        "directionsUrl": "http://www.nps.gov/afam/planyourvisit/directions.htm",
        "url": "https://www.nps.gov/afam/index.htm",
        "weatherInfo": "Washington DC gets to see all four seasons...",
        "name": "African American Civil War Memorial",
        "latLong": "lat:38.916554, long:-77.025977",
        "description": "Over 200,000 African-American soldiers...",
        "designation": "",
        "parkCode": "afam",
        "id": "1A47416F-DAA3-4137-9F30-14AF86B4E547",
        "fullName": "African American Civil War Memorial",
        "type": "parks"
      },
      {
        "states": "GA",
        "directionsInfo": "To Augusta Canal Discovery Center...",
        "directionsUrl": "http://augustacanal.com/directions.php",
        "url": "https://www.nps.gov/auca/index.htm",
        "weatherInfo": "The weather varies...",
        "name": "Augusta Canal",
        "latLong": "lat:33.5099067687988, long:-82.0053787231445",
        "description": "The Augusta Canal...",
        "designation": "National Heritage Area",
        "parkCode": "auca",
        "id": "813548D1-F8EA-4C07-8878-17FB3C385378",
        "fullName": "Augusta Canal National Heritage Area",
        "type": "parks"
      }]
    };
    mockAddFavorite = jest.fn();
    mockRemoveFavorite = jest.fn();
    wrapper = shallow(<ParksContainer 
      type="parks"
      parks={mockStore.parks}
      addFavorite={mockAddFavorite}
      removeFavorite={mockRemoveFavorite}
      />);
  });
  
  it('should match the parks snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should match the monts snapshot', () => {
    wrapper = shallow(<ParksContainer
      type="monts"
      monts={mockStore.monts}
      addFavorite={mockAddFavorite}
      removeFavorite={mockRemoveFavorite}
    />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should match the others snapshot', () => {
    wrapper = shallow(<ParksContainer
      type="others"
      others={mockStore.others}
      addFavorite={mockAddFavorite}
      removeFavorite={mockRemoveFavorite}
    />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should match the favorites snapshot', () => {
    wrapper = shallow(<ParksContainer
      type="favorites"
      favorites={mockStore.favorites}
      addFavorite={mockAddFavorite}
      removeFavorite={mockRemoveFavorite}
    />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should return an object with parks data from mapStateToProps', () => {
    const mockState = {
      parks: mockStore.parks,
      monts: mockStore.monts,
      others: mockStore.others,
      favorites: mockStore.favorites
    };
    const expected = {
      parks: mockStore.parks,
      monts: mockStore.monts,
      others: mockStore.others,
      favorites: mockStore.favorites
    };
    const mappedProps = mapStateToProps(mockState);
    expect(mappedProps).toEqual(expected);
  });

});
import React from 'react';
import { shallow, mount } from 'enzyme';
import { MemoryRouter } from 'react-router';
import { App, mapStateToProps, mapDispatchToProps } from './App';
import Home from '../../components/Home/Home';
import { ParksContainer } from '../ParksContainer/ParksContainer';
import NoMatch from '../../components/NoMatch/NoMatch';
import { storeParks, storeMonts, storeOthers, addFavorite, removeFavorite } from '../../actions';

describe('App', () => {

  let mockPark, mockStoreParks, mockStoreMonts, mockStoreOthers, mockStore;
  beforeEach(() => {
    mockStoreParks = jest.fn();
    mockStoreMonts = jest.fn();
    mockStoreOthers = jest.fn();
    mockPark = {
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
    }
    mockStore = {
      type: "parks",
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
  })

    it.skip('should show a Home component for / router', () => {
      const component = mount(<MemoryRouter initialEntries={['/']} >
        <App 
        storeParks={mockStoreParks} 
        storeMonts={mockStoreMonts} 
        storeOthers={mockStoreOthers} 
        props={mockStore}/>
      </MemoryRouter>
      );
      expect(component.find(Home)).toHaveLength(1);
    });

    it.skip('should show a ParksContainer component for /parks router', () => {
      const component = shallow(<MemoryRouter initialEntries={['/parks']}>
        <App
          storeParks={mockStoreParks}
          storeMonts={mockStoreMonts}
          storeOthers={mockStoreOthers}
          props={mockStore} 
        />
      </MemoryRouter>)
      expect(component.find(ParksContainer)).toHaveLength(1);
    });

    it.skip('should show a ParksContainer component for /monuments router', () => {
      const component = shallow(<MemoryRouter initialEntries={['/monuments']}>
        <App
          storeParks={mockStoreParks}
          storeMonts={mockStoreMonts}
          storeOthers={mockStoreOthers}
          props={mockStore} 
        />
      </MemoryRouter>)
      expect(component.find(ParksContainer)).toHaveLength(1);
    });

    it.skip('should show a ParksContainer component for /others router', () => {
      const component = shallow(<MemoryRouter initialEntries={['/others']}>
        <App
          storeParks={mockStoreParks}
          storeMonts={mockStoreMonts}
          storeOthers={mockStoreOthers}
          props={mockStore} 
          />
      </MemoryRouter>)
      expect(component.find(ParksContainer)).toHaveLength(1);
    });

    it.skip('should show a ParksContainer component for /favorites router', () => {
      const component = shallow(<MemoryRouter initialEntries={['/favorites']}>
        <App
          storeParks={mockStoreParks}
          storeMonts={mockStoreMonts}
          storeOthers={mockStoreOthers}
          props={mockStore} 
        />
      </MemoryRouter>)
      expect(component.find(ParksContainer)).toHaveLength(1);
    });

    it.skip('should show a NoMatch component for an undefined route', () => {
      const component = mount(<MemoryRouter initialEntries={['/abc']}>
        <App
          storeParks={mockStoreParks}
          storeMonts={mockStoreMonts}
          storeOthers={mockStoreOthers}
          props={mockStore} 
          />
      </MemoryRouter>)
      expect(component.find(NoMatch)).toHaveLength(1);
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

  it('should call a storeParks dispatch with the proper action', () => {
    const mockDispatch = jest.fn();
    const actionToDispatch = storeParks([mockPark, mockPark]);
    const mappedProps = mapDispatchToProps(mockDispatch);
    mappedProps.storeParks([mockPark, mockPark]);
    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
  });

  it('should call a storeMonts dispatch with the proper action', () => {
    const mockDispatch = jest.fn();
    const actionToDispatch = storeMonts([mockPark, mockPark]);
    const mappedProps = mapDispatchToProps(mockDispatch);
    mappedProps.storeMonts([mockPark, mockPark]);
    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
  });

  it('should call a storeOthers dispatch with the proper action', () => {
    const mockDispatch = jest.fn();
    const actionToDispatch = storeOthers([mockPark, mockPark]);
    const mappedProps = mapDispatchToProps(mockDispatch);
    mappedProps.storeOthers([mockPark, mockPark]);
    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
  });

  it('should call a addFavorite dispatch with the proper action', () => {
    const mockDispatch = jest.fn();
    const actionToDispatch = addFavorite(mockPark);
    const mappedProps = mapDispatchToProps(mockDispatch);
    mappedProps.addFavorite(mockPark);
    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
  });

  it('should call a removeFavorite dispatch with the proper action', () => {
    const mockDispatch = jest.fn();
    const actionToDispatch = removeFavorite(mockPark);
    const mappedProps = mapDispatchToProps(mockDispatch);
    mappedProps.removeFavorite(mockPark);
    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
  });

});

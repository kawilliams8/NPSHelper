import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';
import { MemoryRouter } from 'react-router';
import { App } from './App';
import Home from '../Home/Home';
import { ParksContainer } from '../ParksContainer/ParksContainer';
import NoMatch from '../../components/NoMatch/NoMatch';


describe('App', () => {

  let mockStoreParks, mockStoreMonts, mockStoreOthers;
  beforeEach(() => {
    mockStoreParks = jest.fn();
    mockStoreMonts = jest.fn();
    mockStoreOthers = jest.fn();
  })

    it('should show a Home component for / router', () => {
      const component = mount(<MemoryRouter initialEntries={['/']} >
        <App storeParks={mockStoreParks} storeMonts={mockStoreMonts} storeOthers={mockStoreOthers}/>
      </MemoryRouter>
      );
      expect(component.find(Home)).toHaveLength(1);
    });

    it('should show a ParksContainer component for /parks router', () => {
      const mockParksData = [{}]
      const component = mount(<MemoryRouter initialEntries={['/parks']}>
        <ParksContainer props={mockParksData} type="parks" />
      </MemoryRouter>)
      expect(component.find(ParksContainer)).toHaveLength(1);
    });

    it('should show a ParksContainer component for /monuments router', () => {
      const mockMontsData = [{}]
      const component = mount(<MemoryRouter initialEntries={['/monuments']}>
        <ParksContainer props={mockMontsData} type="monuments" />
      </MemoryRouter>)
      expect(component.find(ParksContainer)).toHaveLength(1);
    });

    it('should show a ParksContainer component for /others router', () => {
      const mockOthersData = [{}]
      const component = mount(<MemoryRouter initialEntries={['/others']}>
        <ParksContainer props={mockOthersData} type="others"/>
      </MemoryRouter>)
      expect(component.find(ParksContainer)).toHaveLength(1);
    });

    it('should show a ParksContainer component for /favorites router', () => {
      const mockFavoritesData = [{}]
      const component = mount(<MemoryRouter initialEntries={['/favorites']}>
        <ParksContainer favorites={mockFavoritesData} />
      </MemoryRouter>)
      expect(component.find(ParksContainer)).toHaveLength(1);
    });

    it('should show a NoMatch component for an undefined route', () => {
      const component = mount(<MemoryRouter initialEntries={['/abc']}>
        <App storeParks={mockStoreParks} storeMonts={mockStoreMonts} storeOthers={mockStoreOthers}/>
      </MemoryRouter>)
      expect(component.find(NoMatch)).toHaveLength(1);
    });

});

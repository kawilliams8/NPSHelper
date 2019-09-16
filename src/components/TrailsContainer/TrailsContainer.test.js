import React from 'react';
import { shallow } from 'enzyme';
import TrailsContainer from '../TrailsContainer/TrailsContainer';

describe('TrailsContainer', () => {

  let wrapper, mockPark;
  beforeEach(() => {
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
    wrapper = shallow(<TrailsContainer 
      data={mockPark}
    />)
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  })

})
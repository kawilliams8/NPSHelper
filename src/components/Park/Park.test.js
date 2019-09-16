import React from 'react';
import { shallow } from 'enzyme';
import { Park } from '../Park/Park';

describe('Park', () => {

  let wrapper, mockPark, mockAddFavorite, mockRemoveFavorite;
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
      "type": "parks",
      "images": [
        {
          "credit": "NPS Photo",
          "altText": "Site Statue",
          "title": "African American Civil War Statue",
          "id": "3406",
          "caption": "A poignant reminder of our nations past",
          "url": "https://www.nps.gov/common/uploads/structured_data/3C816B50-1DD8-B71B-0BF380049FB6B6A2.jpg"
        }
      ]
    }
    mockAddFavorite = jest.fn();
    mockRemoveFavorite = jest.fn();
    wrapper = shallow(<Park park={mockPark}
      addFavorite={mockAddFavorite}
      removeFavorite={mockRemoveFavorite}
      />)
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should call the addFavorite method when clicked', () => {
    wrapper.find('button').at(0).simulate('click');
    expect(mockAddFavorite).toHaveBeenCalled();
  });

  it('should call the removeFavorite method when clicked', () => {
    wrapper.find('button').at(1).simulate('click');
    expect(mockRemoveFavorite).toHaveBeenCalled();
  });
})
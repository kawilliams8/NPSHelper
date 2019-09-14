import * as actions from '../actions';
import { shallow } from 'enzyme';

describe('Actions', () => {

  let mockParks;
  beforeEach(() => {
    mockParks = [{
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
      "fullName": "African American Civil War Memorial"
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
      "fullName": "Augusta Canal National Heritage Area"
    }];
  });

  it('should return an action for STORE_PARKS', () => {
    const expected = {
      type: 'STORE_PARKS',
      parks: mockParks
    }
    let result = actions.storeParks(mockParks);
    expect(result).toEqual(expected);
  });

  it('should return an action for STORE_MONTS', () => {
    const expected = {
      type: 'STORE_MONTS',
      monts: mockParks
    }

    let result = actions.storeMonts(mockParks);
    expect(result).toEqual(expected);
  });

  it('should return an action for STORE_OTHERS', () => {
    const expected = {
      type: 'STORE_OTHERS',
      others: mockParks
    }

    let result = actions.storeOthers(mockParks);
    expect(result).toEqual(expected);
  });

});
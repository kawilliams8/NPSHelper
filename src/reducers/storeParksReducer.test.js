import storeParksReducer from '../reducers/storeParksReducer.js';

describe('storeParksReducer', () => {

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

  it('should return initial state by default', () => {
    const expected = [];
    const result = storeParksReducer(undefined, {});
    expect(result).toEqual(expected);
  });

  it('should return park objects in state when you store the parks', () => {
    const mockAction = {
      type: "STORE_PARKS",
      parks: mockParks
    }
    const expected = mockParks;
    const result = storeParksReducer(undefined, mockAction);
    expect(result).toEqual(expected);
  });

  it('should return initial state when you pass a bad action', () => {
    const mockAction = {
      type: "BAD_ACTION",
      parks: mockParks
    }
    const expected = [];
    const result = storeParksReducer(undefined, mockAction);
    expect(result).toEqual(expected);
  });
});
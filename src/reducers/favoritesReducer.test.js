import favoritesReducer from '../reducers/storeMontsReducer.js';

describe('storeFavoritesReducer', () => {

  let mockMont, mockState;
  beforeEach(() => {
    mockMont = {
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
      }

    mockState = [mockMont = {
      "states": "DC",
      "directionsInfo": "Another mock monument",
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
    }]
  });

  it('should return initial state by default', () => {
    const expected = [];
    const result = favoritesReducer(undefined, {});
    expect(result).toEqual(expected);
  });

  it('should return a monument object when you add a favorite', () => {
    const mockAction = {
      type: "ADD_FAVORITE",
      park: mockMont
    }
    const expected = [mockMont];
    const result = favoritesReducer(mockState, mockAction);
    expect(result).toEqual(expected);
  });

  it('should return a monument object when you remove a favorite', () => {
    const mockAction = {
      type: "REMOVE_FAVORITE",
      park: mockMont
    }
    const expected = [];
    const result = favoritesReducer(undefined, mockAction);
    expect(result).toEqual(expected);
  });

  it('should return initial state when you pass a bad action', () => {
    const mockAction = {
      type: "BAD_ACTION",
      park: mockMont
    }
    const expected = [];
    const result = favoritesReducer(undefined, mockAction);
    expect(result).toEqual(expected);
  });
});
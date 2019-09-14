import * as actions from '../actions';

describe('Actions', () => {

  let mockPark, mockParks;
  beforeEach(() => {
    mockPark = {
      "states": "UT",
      "directionsInfo": "From the North:\nTake I-15 south to UT-20 (exit 95). Travel east on UT-20 to US-89. Follow US-89 south to UT-12. Travel east on UT-12 to UT-63. Take UT-63 south to Bryce Canyon National Park.\n\nFrom the South through Zion National Park:\nTake I-15 north to UT-9 (exit 16). Follow UT-9 east through Zion National Park to US-89. Travel north on US-89 to UT-12. Go east on UT-12 to UT-63. Take UT-63 south to Bryce Canyon National Park.",
      "directionsUrl": "http://www.nps.gov/brca/planyourvisit/directions.htm",
      "url": "https://www.nps.gov/brca/index.htm",
      "weatherInfo": "http://forecast.weather.gov/MapClick.php?lat=37.63&lon=-112.17#.VpUamdHUhaR",
      "name": "Bryce Canyon",
      "latLong": "lat:37.58399144, long:-112.1826689",
      "description": "Hoodoos (irregular columns of rock) exist on every continent, but here is the largest concentration found anywhere on Earth. Situated along a high plateau at the top of the Grand Staircase, the park's high elevations include numerous life communities, fantastic dark skies, and geological wonders that defy description.",
      "images": [
        {
          "credit": "NPS Photo / Brian B. Roanhorse February 24, 2015",
          "altText": "Bryce Canyon Visitor Center Toll booths in winter.",
          "title": "Bryce Canyon Visitor Center Toll Booths",
          "id": "3089",
          "caption": "Opening the gates at Bryce Canyon National Park under snow.",
          "url": "https://www.nps.gov/common/uploads/structured_data/3C7F8B29-1DD8-B71B-0B5EA38E8C5E5606.jpg"
        }
      ],
      "designation": "National Park",
      "parkCode": "brca",
      "id": "6B1D053D-714F-46D1-B410-04BE868F14C1",
      "fullName": "Bryce Canyon National Park"
    }
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
    }]
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

  it('should return an action for ADD_FAVORITE', () => {
    const expected = {
      type: 'ADD_FAVORITE',
      park: mockPark
    }

    let result = actions.addFavorite(mockPark);
    expect(result).toEqual(expected);
  });

  it.skip('should return an action for REMOVE_FAVORITE', () => {
    const expected = {
      type: 'REMOVE_FAVORITE',
      park: mockPark
    }

    let result = actions.removeFavorite(mockPark);
    expect(result).toEqual(expected);
  });

});
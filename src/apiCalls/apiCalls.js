import { key } from '../containers/App/key.js';

export const fetchParks = async () => {
  const url = `https://developer.nps.gov/api/v1/parks?api_key=${key.nps_api_key}`
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error('There was an error loading the parks')
  }
  const parks = await response.json();
  return parks.data
}
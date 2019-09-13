export const storeParks = parks => ({
  type: 'STORE_PARKS',
  parks
});

export const addFavorite = park => ({
  type: 'ADD_FAVORITE',
  park
});

export const removeFavorite = park => ({
  type: 'REMOVE_FAVORITE',
  park
});
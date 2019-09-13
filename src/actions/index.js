export const storeParks = parks => ({
  type: 'STORE_PARKS',
  parks
});

export const storeMonts = monts => ({
  type: 'STORE_MONTS',
  monts
});

export const storeOthers = others => ({
  type: 'STORE_OTHERS',
  others
});

export const addFavorite = park => ({
  type: 'ADD_FAVORITE',
  park
});

export const removeFavorite = park => ({
  type: 'REMOVE_FAVORITE',
  park
});
const favoritesReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_FAVORITE':
      return [...state, { id: Date.now(), park: action.park, isFavorite: true }];
    case 'REMOVE_FAVORITE':
      let remainingFavs = state.filter(park => park.id !== action.id)
      return remainingFavs;
    default:
      return state;
  }
}

export default favoritesReducer;
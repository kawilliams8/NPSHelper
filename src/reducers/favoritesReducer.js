const favoritesReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_FAVORITE':
      return [...state, action.park];
    case 'REMOVE_FAVORITE':
      let remainingFavs = state.filter(park => park.id !== action.park.id)
      return remainingFavs;
    default:
      return state;
  }
}

export default favoritesReducer;
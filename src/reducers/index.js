import { combineReducers } from 'redux';
import { favoritesReducer } from '../reducers/favoritesReducer';
import { storeParksReducer } from '../reducers/storeParksReducer';

const rootReducer = combineReducers({
  parks: storeParksReducer,
  favorites: favoritesReducer,
});

export default rootReducer;
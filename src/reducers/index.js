import { combineReducers } from 'redux';
import storeParksReducer from '../reducers/storeParksReducer';
import storeMontsReducer from '../reducers/storeMontsReducer';
import storeOthersReducer from '../reducers/storeOthersReducer';
import favoritesReducer from '../reducers/favoritesReducer';

const rootReducer = combineReducers({
  parks: storeParksReducer,
  monts: storeMontsReducer,
  others: storeOthersReducer,
  favorites: favoritesReducer,
});

export default rootReducer;
export const storeParksReducer = (state = [], action) => {
  switch (action.type) {
    case 'STORE_PARKS':
      return action.parks;
    default:
      return state;
  }
}
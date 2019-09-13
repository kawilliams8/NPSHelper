const storeMontsReducer = (state = [], action) => {
  switch (action.type) {
    case 'STORE_MONTS':
      return action.monts;
    default:
      return state;
  }
}

export default storeMontsReducer;
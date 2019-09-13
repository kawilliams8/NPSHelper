const storeOthersReducer = (state = [], action) => {
  switch (action.type) {
    case 'STORE_OTHERS':
      return action.others;
    default:
      return state;
  }
}

export default storeOthersReducer;
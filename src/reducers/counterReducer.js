const counterReducer = (state = 0, {type}) => {
  switch (type) {
    case 'COUNTER_INCREMENT':
      return state + 1
    case 'COUNTER_DECREMENT':
      return state - 1
    default:
      return state
  }
}

export default counterReducer

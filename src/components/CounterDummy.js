import React from 'react'

export const CounterDummy = ({counter, counterIncrement, counterDecrement}) => <div>
  <h4>
    Counter value: {counter}
    <button onClick={counterIncrement}>+</button>
    <button onClick={counterDecrement}>-</button>
  </h4>
</div>

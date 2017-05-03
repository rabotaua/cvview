import React from 'react'

export const CounterDummy = ({counter, counterIncrement, counterDecrement}) => <div>
  <h4>
    <button onClick={counterIncrement}>+</button>
	  { ' ' }
    <button onClick={counterDecrement}>-</button>
	  <br/>
	  Counter value: {counter}
  </h4>
</div>

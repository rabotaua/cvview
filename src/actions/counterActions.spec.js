import { counterDecrement, counterIncrement } from './counterActions'

describe('counterIncrement', () => {
  it('should pass COUNTER_INCREMENT type', () => {
    const {type} = counterIncrement()
    expect(type).toEqual('COUNTER_INCREMENT')
  })
})

describe('counterDecrement', () => {
  it('should pass COUNTER_DECREMENT type', () => {
    const {type} = counterDecrement()
    expect(type).toEqual('COUNTER_DECREMENT')
  })
})

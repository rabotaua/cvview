import counterReducer from './counterReducer'
import { counterDecrement, counterIncrement } from '../actions/counterActions'
describe('counterReducer', () => {
  it('should return state if action is not known', () => {
    const state = counterReducer(10, {type: 'ACME'})
    expect(state).toBe(10)
  })
  it('should handle COUNTER_INCREMENT', () => {
    const state = counterReducer(20, counterIncrement())
	  expect(state).toBe(21)
  })
  it('should handle COUNTER_INCREMENT', () => {
    const state = counterReducer(30, counterDecrement())
    expect(state).toBe(29)
  })
})

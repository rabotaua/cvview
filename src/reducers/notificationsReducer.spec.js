import notifyReducer from './notificationsReducer'
import { notifyClose } from '../actions/notifyActions'

describe('notificationsReducer', () => {
	it('should do nothing to unknown events', () => {
		const state = notifyReducer([], {type: 'ACME'})
		expect(state).toEqual([])
	})

	it('should handle NOTIFY_SUCCESS', () => {
		const state = notifyReducer([], {type: 'NOTIFY_SUCCESS', message: 'Hello World!', id: Date.now()})
		expect(state.length).toBe(1)
		expect(state[0].message).toBe('Hello World!')
	})

	it('should handle NOTIFY_CLOSE', () => {
		const state = notifyReducer([{id: 1, message: '1'}], notifyClose(1))
		expect(state.length).toBe(0)
	})
})

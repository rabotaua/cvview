import { isResumeLoadedSelector } from './isResumeLoadedSelector'
describe('isResumeLoadedSelector', () => {
	it('should return false for empty object', () => {
		const state = {resume: {}}
		const result = isResumeLoadedSelector(state)
		expect(result).toBe(false)
	})

	it('should return true if there is resume object', () => {
		const state = {resume: {foo: 'bar'}}
		const result = isResumeLoadedSelector(state)
		expect(result).toBe(true)
	})
})

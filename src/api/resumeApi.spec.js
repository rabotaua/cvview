import fetchMock from 'fetch-mock'
import { getSimilar } from './resumeApi'

describe('resumeApi', () => {
	describe('getSimilar', () => {
		it('should not return resume we are looking at now', () => {
			fetchMock.get('http://localhost:3001/resume/1', [{id: 1}, {id: 2}])
			return getSimilar(1).then(resumes => {
				expect(resumes.length).toBe(1)
				expect(resumes[0].id).toBe(2)
			})
		})
	})
})

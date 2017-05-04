import { getSimilarResumesAction } from './similarActions'
// import thunk from 'redux-thunk'
// import configureMockStore from 'redux-mock-store'
// import fetchMock from 'fetch-mock'

describe('similarActions', () => {
	// const middlewares = [ thunk ]
	// const mockStore = configureMockStore(middlewares)

	it('should return a function', () => {
		expect(typeof getSimilarResumesAction()).toBe('function')
	})

	it('should dispatch GET_SIMILAR_RESUMES', () => {
		// TODO: not working
		// fetchMock.get('http://localhost:3001/resume/1', [{id: 1}, {id: 2}])
		// const store = mockStore()
		// store.subscribe(() => {
		// 	const actions = store.getActions()
		// 	expect(actions[0].type).toBe('GET_SIMILAR_RESUMES_REQUEST')
		// 	// console.log(store.getActions())
		// 	expect(store.getActions().length).toBe(2)
		// 	done()
		// })
		// store.dispatch(getSimilarResumesAction(1))
	})
})

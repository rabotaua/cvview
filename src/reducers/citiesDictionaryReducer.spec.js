import citiesDictionaryReducer from './citiesDictionaryReducer'
import { getCitiesDictionarySuccess } from '../actions/dictionaryActions'
describe('counterReducer', () => {
	it('should return state if action is not known', () => {
		const state = citiesDictionaryReducer({}, {type: 'ACME'})
		expect(state).toEqual({})
	})

	it('should handle GET_CITIES_DICTIONARY_SUCCESS and convert it to hashmap', () => {
		const cities = [
			{id: 1, ru: 'city1'},
			{id: 2, ru: 'city2'}
		]
		const action = getCitiesDictionarySuccess(cities)
		const state = citiesDictionaryReducer({}, action)
		expect(state).toEqual({
			1: {id: 1, ru: 'city1'},
			2: {id: 2, ru: 'city2'}
		})
	})
})

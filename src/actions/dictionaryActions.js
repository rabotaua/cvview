import { getCitiesDictionary, getVacanciesDictionary } from '../api/dictionaryApi'

const getCitiesDictionaryRequest = () => ({
	type: 'GET_CITIES_DICTIONARY_REQUEST'
})

const getCitiesDictionaryFailure = error => ({
	type: 'GET_CITIES_DICTIONARY_FAILURE',
	error
})

export const getCitiesDictionarySuccess = cities => ({
	type: 'GET_CITIES_DICTIONARY_SUCCESS',
	cities
})

export const getCitiesDictionaryAction = () => dispatch => {
	dispatch(getCitiesDictionaryRequest())
	getCitiesDictionary()
		.then(cities => dispatch(getCitiesDictionarySuccess(cities)))
		.catch(error => dispatch(getCitiesDictionaryFailure(error)))
}

export const getVacanciesDictionaryAction = notebookId => dispatch => {
	getVacanciesDictionary(notebookId)
		.then(vacancies => dispatch({
			type: 'GET_VACANCIES_DICTIONARY',
			vacancies
		}))
}

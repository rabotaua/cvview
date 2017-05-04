import 'whatwg-fetch'

export const getCitiesDictionary = () => fetch(`https://api.rabota.ua/dictionary/city`)
	.then(res => res.json())

export const getVacanciesDictionary = notebookId => fetch(`https://api.rabota.ua/company/${notebookId}/vacancies`)
	.then(res => res.json())

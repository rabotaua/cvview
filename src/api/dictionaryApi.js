import 'whatwg-fetch'

export const getCitiesDictionary = id => fetch(`https://api.rabota.ua/dictionary/city`)
	.then(res => res.json())

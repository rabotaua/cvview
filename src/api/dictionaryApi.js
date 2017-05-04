import 'whatwg-fetch'

export const getCitiesDictionary = id => fetch(`https://api.rabota.ua/dictionary/cities`)
	.then(res => res.json())

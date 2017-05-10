/* global ga */

const gaMiddleware = store => next => action => {
	const classOf = (object) => Object.prototype.toString.call(object).slice(8, -1)

	if (action.hasOwnProperty('gaEvent') && classOf(action.gaEvent) === 'Array') {
		ga('send', 'event', ...action.gaEvent)
	}

	if (action.type === 'ASYNC_GA_FULFILLED' && classOf(action.payload) === 'Array') {
		ga('send', 'event', ...action.payload)
	}

	return next(action)
}

export default gaMiddleware

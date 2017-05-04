export const sendVacancyApi = (resumeId, vacancyId, message) => new Promise((resolve, reject) => setTimeout(() => {
	if (Date.now() % 2 === 0) {
		reject({message: 'Something went wrong'})
	} else {
		resolve()
	}
}, 300))

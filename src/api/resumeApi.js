import 'whatwg-fetch'

export const getResume = id => fetch(`http://localhost:3001/resume/${id}`)
	.then(res => res.json())

export const getSimilar = id => fetch(`http://localhost:3001/resume`)
	.then(res => res.json())
	.then(resumes => resumes.filter(resume => resume.id !== id))

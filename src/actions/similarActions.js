import { getSimilar } from '../api/resumeApi'

const getSimilarResumesRequest = () => ({
	type: 'GET_SIMILAR_RESUMES_REQUEST'
})

const getSimilarResumesFailure = error => ({
	type: 'GET_SIMILAR_RESUMES_FAILURE',
	error
})

const getSimilarResumesSuccess = resumes => ({
	type: 'GET_SIMILAR_RESUMES_SUCCESS',
	resumes
})

export const getSimilarResumesAction = id => dispatch => {
	dispatch(getSimilarResumesRequest())
	getSimilar(id)
		.then(resumes => dispatch(getSimilarResumesSuccess(resumes)))
		.catch(error => dispatch(getSimilarResumesFailure(error)))
}

import { getResume } from '../api/resumeApi'

export const getResumeText = id => dispatch => {
	// jQuery.getJSON('.....123').then(resume => {
	// 	jQuery(window).trigger('GET_RESUME_TEXT', resume)
	// })
	getResume(id).then(resume => {
		dispatch({
			type: 'GET_RESUME',
			resume
		})
	})
}

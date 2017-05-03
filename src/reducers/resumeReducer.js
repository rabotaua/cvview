// jQuery(window).on('GET_RESUME_TEXT', reducer)

const resumeReducer = (state = {}, event) => {
	switch (event.type) {
		case 'GET_RESUME':
			return event.resume
		default:
			return state
	}
}

export default resumeReducer

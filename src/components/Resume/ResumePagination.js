import React from 'react'
import scrollTo from '../../util/smoothScroll'

export const ResumePagination = ({resume, getResumeText}) => {
	const {prevID, nextID} = resume

	const getResume = id => {
		getResumeText(id)
		scrollTo(document.body, 0, 300)
	}

	return <div className="fd-f-left-middle fd-f-g20">
		<button onClick={() => getResume(prevID)}>prev</button>
		<button onClick={() => getResume(nextID)}>next</button>
	</div>
}


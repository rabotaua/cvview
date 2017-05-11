import React from 'react'
import scrollTo from '../../util/smoothScroll'

export const ResumePagination = ({resume, getResumeText}) => {
	// const {personal, position, experiences, updateDate} = resume
	// const {prevID, nextID} = resume
	console.log(resume)

	const getResume = id => {
		getResumeText(id)
		scrollTo(document.body, 0, 300)
	}

	return <div className="fd-f-left-middle fd-f-g20">
		<button onClick={() => getResume(resume.id)}>prev</button>
		<button onClick={() => getResume(resume.id)}>next</button>
	</div>
}


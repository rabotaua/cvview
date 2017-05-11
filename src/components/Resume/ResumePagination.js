import React from 'react'
import scrollTo from '../../util/smoothScroll'

export const ResumePagination = ({resume, getResumeText}) => {
	const {prevID, nextID} = resume

	const getResume = id => {
		if(id) {
			getResumeText(id)
		}
		scrollTo(document.body, 0, 300)
	}

	return <div className="fd-f-right-middle fd-f-g20">
		<span style={{cursor: 'pointer', color: '#3366cc'}} onClick={() => getResume(prevID)}>
			<i className="fi-arrows-left"></i>
			&nbsp;&nbsp;
			prev
		</span>
		<span style={{cursor: 'pointer', color: '#3366cc'}} onClick={() => getResume(nextID)}>
			next
			&nbsp;&nbsp;
			<i className="fi-arrows-right"></i>
		</span>
	</div>
}


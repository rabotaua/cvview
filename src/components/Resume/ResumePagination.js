import React from 'react'
import scrollTo from '../../util/smoothScroll'

export const ResumePagination = ({resume, getResumeText}) => {

	const {prevID, nextID} = resume

	const getResume = id => {
		if(id) {
			getResumeText(id)
			scrollTo(document.body, 0, 300)
		}
	}

	const arrowsStyle = { cursor: 'pointer', color: '#3366cc', userSelect: 'none' }

	return <div className="fd-f-right-middle fd-f-g20">
		<span style={arrowsStyle} onClick={() => getResume(prevID)}>
			<i className="fi-arrows-left"></i>
			&nbsp;&nbsp;
			prev
		</span>
		<span style={arrowsStyle} onClick={() => getResume(nextID)}>
			next
			&nbsp;&nbsp;
			<i className="fi-arrows-right"></i>
		</span>
	</div>
}


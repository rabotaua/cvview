import React from 'react'
import scrollTo from '../../util/smoothScroll'

export const NextResumeItem = ({resume, getResumeText}) => {
	const {prevID, nextID} = resume

	const getResume = id => {
		if(id) {
			getResumeText(id)
		}
		scrollTo(document.body, 0, 300)
	}

	// const nextResume = getResumeText(nextID)
	// console.log(nextResume)

	console.log(nextID)
	// console.log(getResumeText(nextID))

	return <div className="f-paper fd-p20" style={{marginTop: '10px'}}>
		<h3 className="f-custom-heading f-custom-heading fd-fat-gunso">
			Следующее резюме в списке результатов
		</h3>
		{/*{getResume(nextID)}*/}
		{/*{name}*/}
	</div>
}


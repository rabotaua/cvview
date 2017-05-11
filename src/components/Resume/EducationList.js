import React from 'react'
import EducationListItem from './EducationListItem'

const EducationList = (props) => {
	const { educations } = props
	let title

	if(educations.length != 0) {
		title = <h2 className="fd-syoi f-text-gray">Образование</h2>
	}

	return <div>
		{title}
		{educations.map(education => <EducationListItem key={education.id} education={education} />)}
	</div>
}


export default EducationList

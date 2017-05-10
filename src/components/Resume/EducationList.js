import React from 'react'
import EducationListItem from './EducationListItem'

const EducationList = (props) => {
	const { educations } = props

	return <div>
		<hr/>
		<h2 className="fd-syoi f-text-gray">Образование</h2>
		{educations.map(education => <EducationListItem key={education.id} education={education} />)}
	</div>
}


export default EducationList

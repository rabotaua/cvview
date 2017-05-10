import React from 'react'
import EducationListItem from './EducationListItem'

const EducationList = (props) => {
	const { educations } = props

	return <div>
		{educations.map(education => <EducationListItem key={education.id} education={education} />)}
	</div>
}


export default EducationList

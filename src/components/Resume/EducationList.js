import React from 'react'
import EducationListItem from './EducationListItem'
import Title from './Title'

const EducationList = (props) => {
	const { educations } = props
	let title = 'Образование'

	return <div id="cv-educations">
		{educations.length ? <Title title={title} /> : ''}
		{educations.map(education => <EducationListItem key={education.id} education={education} />)}
	</div>
}


export default EducationList

import React from 'react'
import ExperienceListItem from './ExperienceListItem'
import Title from './Title'

const ExperienceList = (props) => {
	const { experiences, branches } = props
	let title = 'Опыт работы'

	return <div id="cv-experiences">
		{experiences.length ? <Title title={title} /> : ''}
		{experiences.map(experience => <ExperienceListItem key={experience.id} experience={experience} branches={branches} />)}
	</div>
}


export default ExperienceList

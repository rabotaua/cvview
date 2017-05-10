import React from 'react'
import ExperienceListItem from './ExperienceListItem'

const ExperienceList = (props) => {
	const { experiences, branches } = props

	return <div>
		{experiences.map(experience => <ExperienceListItem key={experience.id} experience={experience} branches={branches} />)}
	</div>
}


export default ExperienceList

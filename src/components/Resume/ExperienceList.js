import React from 'react'
import ExperienceListItem from './ExperienceListItem'

const ExperienceList = (props) => {
	const { experiences, branches } = props

	return <div>
		<hr/>
		<h2 className="fd-syoi f-text-gray">Опыт работы</h2>
		{experiences.map(experience => <ExperienceListItem key={experience.id} experience={experience} branches={branches} />)}
	</div>
}


export default ExperienceList

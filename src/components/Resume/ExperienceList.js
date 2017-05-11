import React from 'react'
import ExperienceListItem from './ExperienceListItem'

const ExperienceList = (props) => {
	const { experiences, branches } = props
	let title

	if(experiences.length !== 0) {
		title = <h2 className="fd-syoi f-text-gray">Опыт работы</h2>
	}

	return <div id="cv-experience">
		{title}
		{experiences.map(experience => <ExperienceListItem key={experience.id} experience={experience} branches={branches} />)}
	</div>
}


export default ExperienceList

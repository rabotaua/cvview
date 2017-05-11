import React from 'react'

const Skills = (props) => {
	const { skill } = props
	let title

	if(skill.text != null) {
		title = <h2 className="fd-syoi f-text-gray">Ключевая информация</h2>
	}

	return <div>
		{title}
		<div className="fd-craftsmen" dangerouslySetInnerHTML={{__html: skill.text}} />
	</div>
}


export default Skills

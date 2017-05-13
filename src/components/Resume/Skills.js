import React from 'react'
import Title from './Title'

const Skills = (props) => {
	const { skill } = props
	let title = 'Ключевая информация'

	return <div>
		{skill.text != null ? <Title title={title} /> : ''}
		<div className="fd-craftsmen" dangerouslySetInnerHTML={{__html: skill.text}} />
	</div>
}


export default Skills

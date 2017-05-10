import React from 'react'

const Skills = (props) => {
	const { skill } = props

	return <div>
		<h2 className="fd-syoi f-text-gray">Ключевая информация</h2>
		<div style={{fontSize: '14px'}} dangerouslySetInnerHTML={{__html: skill.text}} />
	</div>
}


export default Skills

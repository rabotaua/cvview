import React from 'react'

const PositionsList = (props) => {
	const { experiences } = props

	let positions

	if(experiences.length > 2) {
		positions = `${experiences[0].position}, ${experiences[1].position.toLowerCase()}, ${experiences[2].position.toLowerCase()}`
	} else if (experiences.length === 2) {
		positions = `${experiences[0].position}, ${experiences[1].position.toLowerCase()}`
	} else if(experiences.length === 1) {
		positions = `${experiences[0].position}`
	}

	return <div>
		{positions}
	</div>
}

export default PositionsList

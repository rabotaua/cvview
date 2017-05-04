import React from 'react'
import PropTypes from 'prop-types'

const ExperienceListSmall = ({experiences = []}) => experiences.length ? <div>
	{experiences.map(({id, position, startWork, endWork}) => <div key={id}>
		{position} {startWork} {endWork}
	</div>)}
</div> : null

ExperienceListSmall.propTypes = {
	experiences: PropTypes.arrayOf(PropTypes.shape({
		id: PropTypes.number.isRequired,
		position: PropTypes.string.isRequired,
		startWork: PropTypes.string.isRequired,
		endWork: PropTypes.string.isRequired
	}))
}

export default ExperienceListSmall

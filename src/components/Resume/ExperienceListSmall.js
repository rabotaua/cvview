import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'

const ExperienceListItemSmall = ({position, startWork, endWork}) => {
	const hasEndWokr = endWork && endWork !== '1900-01-01T00:00:00'
	const period = hasEndWokr ? moment.duration(moment(endWork).diff(startWork)).humanize() : 'till now'
	return <div>
		{position} {period}

	</div>
}

const ExperienceListSmall = ({experiences = []}) => {
	if (!experiences.length) return null

	return <div>
		{experiences.map(exp => <ExperienceListItemSmall key={exp.id} {...exp} />)}
	</div>
}

ExperienceListSmall.propTypes = {
	experiences: PropTypes.arrayOf(PropTypes.shape({
		id: PropTypes.number.isRequired,
		position: PropTypes.string.isRequired,
		startWork: PropTypes.string.isRequired,
		endWork: PropTypes.string.isRequired
	}))
}

export default ExperienceListSmall

import React from 'react'
import moment from 'moment'
import PropTypes from 'prop-types'

const WorkPeriod = (props) => {
	const { startWork, endWork, format } = props
	const hasEndWork = endWork && endWork !== '1900-01-01T00:00:00'
	const period = hasEndWork ? moment.duration(moment(endWork).diff(startWork)).humanize() : 'till now'
	const start = moment(startWork).format(format)
	const end = moment(endWork).format(format)


	return <div>
		<div>{period}</div>
		<div><b>{start}</b></div>
		<div><b>{end}</b></div>
	</div>
}

WorkPeriod.propTypes = {
	format: PropTypes.string
}

WorkPeriod.defaultProps = {
	format: 'MMM YYYY'
}



export default WorkPeriod

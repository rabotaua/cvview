import React from 'react'
import PropTypes from 'prop-types'

const Position = (props) => {
	const { position } = props

	return <div>{position}</div>
}

Position.propTypes = {
	position: PropTypes.string.isRequired
}


export default Position

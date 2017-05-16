import React from 'react'
import PropTypes from 'prop-types'

const ResumePhoto = ({photo, id, position, getResumeText}) => {
	return <div>
		<img style={{ cursor: 'pointer' }} src={photo} alt={position} onClick={() => getResumeText(id)}/>
	</div>
}

ResumePhoto.propTypes = {
	getResumeText: PropTypes.func.isRequired,
	resume: PropTypes.shape({
		photo: PropTypes.string.isRequired,
		position: PropTypes.shape({
			position: PropTypes.string.isRequired
		})
	})
}

export default ResumePhoto

import React from 'react'
import PropTypes from 'prop-types'

const ResumePhoto = ({resume, getResumeText}) => {
	const {id, photo, position} = resume
	return <div>
		<img style={{ cursor: 'pointer' }} src={photo} alt={position.position} onClick={() => getResumeText(id)}/>
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

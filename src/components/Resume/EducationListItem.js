import React from 'react'

const ExperienceListItem = (props) => {
	const { education } = props

	return <div className="fd-craftsmen">

		<div className="fd-f-left">
			<div style={{marginRight: '40px'}}>
				<p>{education.year}</p>
			</div>
			<div>
				<p>{education.schoolName}</p>
				<p>{education.speciality}, {education.diploma}</p>
				<p>{education.location}</p>
			</div>
		</div>
	</div>
}


export default ExperienceListItem

import React from 'react'

export const SimilarResumesListItem = ({id, personal, position, getResumeText}) => <div>
	<div>
		<a href="#" onClick={event => getResumeText(id)}>{position.position}</a>
		<span>{personal.name}</span>
		<span>{personal.surName}</span>
	</div>
</div>

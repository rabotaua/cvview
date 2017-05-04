import React from 'react'

export const SimilarResumesListItem = ({personal, position}) => <div>
	<div>
		<strong>{position.position}</strong>
		<span>{personal.name}</span>
		<span>{personal.surName}</span>
	</div>
</div>

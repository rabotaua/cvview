import React from 'react'
import { SimilarResumesListItem } from './SimilarResumesListItem'

export const SimiliarResumesList = ({similar = []}) => similar.length
	? <fieldset>
		<legend>Similar</legend>
		{similar.map(resume => <SimilarResumesListItem key={resume.id} {...resume} />)}
	</fieldset>
	: <div>nothing here</div>

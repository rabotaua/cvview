import React from 'react'
import { SimilarResumesListItem } from './SimilarResumesListItem'

export const SimiliarResumesList = ({similar = [], citiesDictionary, getResumeText}) => {
	if (!similar.length) return <div>nothing here</div>
	return <fieldset>
		<legend>Similar</legend>
		{similar.map(resume =>
			<SimilarResumesListItem key={resume.id} resume={resume} citiesDictionary={citiesDictionary} getResumeText={getResumeText}/>)}
	</fieldset>
}

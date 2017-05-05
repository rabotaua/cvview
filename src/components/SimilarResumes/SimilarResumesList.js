import React from 'react'
import { SimilarResumesListItem } from './SimilarResumesListItem'

export const SimiliarResumesList = ({similar = [], citiesDictionary, getResumeText}) => {
	if (!similar.length) return <div>nothing here</div>
	return <div className="f-paper fd-p20" style={{marginTop: '20px'}}>
		<div className="fd-c-stretch fd-f-g20">
			<div>
				<h3 className="f-custom-heading fd-fat-daimyo">Similar</h3>
			</div>
			<div>
				{similar.map(resume =>
					<SimilarResumesListItem key={resume.id} resume={resume} citiesDictionary={citiesDictionary} getResumeText={getResumeText}/>)}
			</div>
		</div>
	</div>
}

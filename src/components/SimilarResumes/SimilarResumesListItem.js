import React from 'react'
import ResumePhoto from '../Resume/ResumePhoto'

export const SimilarResumesListItem = ({resume, getResumeText}) => {
	const {personal, position} = resume
	const {name, surName, cityId, dateBirth} = personal
	const {salary} = position
	return <div>
		<div>
			<table>
				<tbody>
				<tr>
					<td>
						<ResumePhoto resume={resume} getResumeText={getResumeText}/>
					</td>
					<td>
						<p>
							<a href="#" onClick={event => getResumeText(resume.id)}>{resume.position.position}</a>
						</p>
						<p>
							<span>{name} {surName}</span>
							<span>{cityId}</span>
							<span>{dateBirth}</span>
							<span>{salary}</span>
						</p>
					</td>
				</tr>
				</tbody>
			</table>
		</div>
	</div>
}

import React from 'react'
import ResumePhoto from '../Resume/ResumePhoto'
import ExperienceListSmall from '../Resume/ExperienceListSmall'
import moment from 'moment'

export const SimilarResumesListItem = ({resume, getResumeText}) => {
	const {personal, position, experiences, updateDate} = resume
	const {name, surName, cityId, dateBirth} = personal
	const {salary} = position
	const updatedAgo = moment(updateDate).fromNow()

	return <div>
		<div>
			<table width="100%">
				<tbody>
				<tr>
					<td width="1">
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
						<ExperienceListSmall experiences={experiences.slice(0, 2)}/>
					</td>
					<td width="1" style={{whiteSpace: 'nowrap'}}>
						{updatedAgo}
					</td>
				</tr>
				</tbody>
			</table>
		</div>
	</div>
}

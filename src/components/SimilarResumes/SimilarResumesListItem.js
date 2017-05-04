import React from 'react'
import ResumePhoto from '../Resume/ResumePhoto'
import ExperienceListSmall from '../Resume/ExperienceListSmall'
import moment from 'moment'

export const SimilarResumesListItem = ({resume, citiesDictionary, getResumeText}) => {
	const {personal, position, experiences, updateDate} = resume
	const {name, surName, cityId, dateBirth} = personal
	const {salary} = position
	const updatedAgo = moment(updateDate).fromNow()
	const age = moment(dateBirth).fromNow(true)
	const city = citiesDictionary[cityId].ru

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
							{' '}
							<span>{city}</span>
							{' '}
							<span>{age}</span>
							{' '}
							{salary ? <span>${salary}</span> : null}
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

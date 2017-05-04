import React from 'react'
import ResumePhoto from '../Resume/ResumePhoto'
import ExperienceListSmall from '../Resume/ExperienceListSmall'
import moment from 'moment'
import scrollTo from '../../util/smoothScroll'

export const SimilarResumesListItem = ({resume, citiesDictionary, getResumeText}) => {
	const {personal, position, experiences, updateDate} = resume
	const {name, surName, cityId, dateBirth} = personal
	const {salary} = position
	const updatedAgo = moment(updateDate).fromNow()
	const age = moment(dateBirth).fromNow(true)
	const city = citiesDictionary[cityId].ru

	const getResume = id => {
		getResumeText(id)
		scrollTo(document.body, 0, 300)
	}

	return <div className="fd-f-left-middle fd-f-g20">
		<div>
			<ResumePhoto resume={resume} getResumeText={getResume}/>
		</div>
		<div className="fd-f1">
			<p>
				<a style={{cursor: 'pointer'}}
				   onClick={() => getResume(resume.id)}>{resume.position.position}</a>
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
		</div>
		<div>
			{updatedAgo}
		</div>
	</div>
}

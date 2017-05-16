import React from 'react'
import ResumePhoto from '../Resume/ResumePhoto'
import ExperienceListSmall from '../Resume/ExperienceListSmall'
import moment from 'moment'
import scrollTo from '../../util/smoothScroll'
import CityAgeSalaryContainer from '../../containers/CityAgeSalaryContainer'

export const SimilarResumesListItem = ({resume, getResumeText}) => {
	const {id, personal, position, experiences, updateDate, photo} = resume
	const {name, surName, cityId, dateBirth} = personal
	const updatedAgo = moment(updateDate).fromNow()

	const getResume = id => {
		getResumeText(id)
		scrollTo(document.body, 0, 300)
	}

	return <div className="fd-f-left-middle fd-f-g20">
		<div>
			<ResumePhoto photo={photo} position={position} id={id} getResumeText={getResume}/>
		</div>
		<div className="fd-f1">
			<p>
				<a style={{cursor: 'pointer'}}
				   onClick={() => getResume(resume.id)}>{resume.position.position}</a>
			</p>
			<p>
				<span>{name} {surName}</span>
			</p>
			<CityAgeSalaryContainer cityId={cityId} position={position} dateBirth={dateBirth} />
			<ExperienceListSmall experiences={experiences.slice(0, 2)}/>
		</div>
		<div>
			{updatedAgo}
		</div>
	</div>
}

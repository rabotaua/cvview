import React from 'react'
import moment from 'moment'
import ExperienceList from '../components/Resume/ExperienceList'
import CVTextPhoto from '../components/Resume/CVTextPhoto'
import CVTextPersonalInfo from '../components/Resume/CVTextPersonalInfo'
import Skills from '../components/Resume/Skills'
import EducationList from '../components/Resume/EducationList'
import TrainingsList from '../components/Resume/TrainingsList'
import AdditionalsList from '../components/Resume/AdditionalsList'
import LanguagesList from '../components/Resume/LanguagesList'
import ResumePaginationContainer from '../containers/ResumePaginationContainer'
import ContactsContainer from '../containers/ContactsContainer'
import './CVText.css'
import scrollTo from '../util/smoothScroll'

export class CvText extends React.Component {
	componentWillMount () {
		this.props.getResumeText(this.props.resume.id || window.defaultResumeId)
	}

	render () {
		if (!this.props.isResumeLoaded) return null

		const {experiences, skill, photo, educations, trainings, additionals, languages, updateDate} = this.props.resume

		const goToBlock = (elem) =>	{
			console.log(elem)
			scrollTo(elem, 0, 300)
		}

		const experienceBlock = document.getElementById('cv-experience')

		// same as
		// const personal = this.props.resume.personal
		// const photo = this.props.resume.photo
		// const experiences = this.props.resume.experiences

		return <div>
			<div className="f-paper fd-p20">
				<ResumePaginationContainer />
			</div>
			<div className="f-paper fd-p20" style={{ marginBottom: 10}}>
				<div>обновлено {moment(updateDate).format('DD MMMM YYYY')}</div>
				<br/>
				<div className="fd-f-left">
					<div>
						<CVTextPhoto photo={photo}/>
					</div>
					<div>
						<CVTextPersonalInfo {...this.props.resume} cities={this.props.cities}  />
					</div>
				</div>
			</div>
			<ContactsContainer/>
			<div className="f-paper fd-p20">
				<ul className="cv-text-links-list f-reset-list fd-craftsmen" style={{marginBottom: '30px'}}>
					<li>
						{(experiences.length
							? <a href="" className="f-pseudo-link" onClick={() => goToBlock(experienceBlock)}>Опыт работы</a>
							: <div></div>)}
					</li>
					<li>
						{(educations.length
							? <a href="" className="f-pseudo-link">Образование</a>
							: <div></div>)}
					</li>
					<li>
						{(trainings.length
							? <a href="" className="f-pseudo-link">Сертификаты</a>
							: <div></div>)}
					</li>
					<li>
						{(languages.length
							? <a href="" className="f-pseudo-link">Языки</a>
							: <div></div>)}
					</li>
				</ul>
				<Skills skill={skill} />
				<ExperienceList experiences={experiences} branches={this.props.branches} />
				<EducationList educations={educations} />
				<TrainingsList trainings={trainings} />
				<AdditionalsList additionals={additionals} />
				<LanguagesList languages={languages} />
			</div>

		</div>

	}
}

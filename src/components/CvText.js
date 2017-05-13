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
import LikeDislikeResumeContainer from '../containers/LikeDislikeResumeContainer'
import ResumePaginationContainer from '../containers/ResumePaginationContainer'
import ContactsContainer from '../containers/ContactsContainer'
import './CVText.css'
import scrollTo from '../util/smoothScroll'

export class CvText extends React.Component {
	componentWillMount () {
		this.props.getResumeText(this.props.resume.id || window.defaultResumeId)
	}

	goToBlock(e) {
		const id = e.target.getAttribute('href').slice(1)
		const elem = document.getElementById(id)
		if(elem) {
			scrollTo(document.body, elem.offsetTop, 300)
		}
	}


	render () {
		if (!this.props.isResumeLoaded) return null
		const {experiences, skill, photo, educations, trainings, additionals, languages, updateDate} = this.props.resume

		return <div>
			<div className="f-paper fd-p20">
				<div className="fd-f-between">
					<div className="fd-f-left"><LikeDislikeResumeContainer /></div>
					<div className="fd-f-right"><ResumePaginationContainer /></div>
				</div>

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
							? <a href="#cv-experiences" className="f-pseudo-link" onClick={this.goToBlock.bind(this)}>Опыт работы</a>
							: '')}
					</li>
					<li>
						{(educations.length
							? <a href="#cv-educations" className="f-pseudo-link" onClick={this.goToBlock.bind(this)}>Образование</a>
							: '')}
					</li>
					<li>
						{(trainings.length
							? <a href="#cv-trainings" className="f-pseudo-link" onClick={this.goToBlock.bind(this)}>Сертификаты</a>
							: '')}
					</li>
					<li>
						{(languages.length
							? <a href="#cv-languages" className="f-pseudo-link" onClick={this.goToBlock.bind(this)}>Языки</a>
							: '')}
					</li>
				</ul>
				<Skills skill={skill} />
				<ExperienceList experiences={experiences} />
				<EducationList educations={educations} />
				<TrainingsList trainings={trainings} />
				<AdditionalsList additionals={additionals} />
				<LanguagesList languages={languages} />
			</div>

		</div>

	}
}

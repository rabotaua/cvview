import React from 'react'
import ExperienceList from '../components/Resume/ExperienceList'
import CVTextPhoto from '../components/Resume/CVTextPhoto'
import CVTextPersonalInfo from '../components/Resume/CVTextPersonalInfo'
import EducationList from '../components/Resume/EducationList'
import TrainingsList from '../components/Resume/TrainingsList'
import AdditionalsList from '../components/Resume/AdditionalsList'
import LanguagesList from '../components/Resume/LanguagesList'
import ContactsContainer from '../containers/ContactsContainer'

export class CvText extends React.Component {
	componentWillMount () {
		this.props.getResumeText(this.props.resume.id || window.defaultResumeId)
	}

	render () {
		if (!this.props.isResumeLoaded) return null

		const {experiences, skill, personal, photo, position, educations, trainings, additionals, languages, searchState} = this.props.resume


		// same as
		// const personal = this.props.resume.personal
		// const photo = this.props.resume.photo
		// const experiences = this.props.resume.experiences


		// ["additionals","contact","educations","experiences","languages","personal","photo","position","skill","state","trainings","uiLanguage","searchState","updateDate","rtfLink","viewLink","resumeCount","id"]


		return <div>
			<div className="f-paper fd-p20" style={{ marginBottom: 10}}>
				<div className="fd-f-left">
					<div>
						<CVTextPhoto photo={photo}/>
					</div>
					<div>
						<CVTextPersonalInfo personal={personal} searchState={searchState} experiences={experiences} position={position} cities={this.props.cities} />
					</div>
				</div>
			</div>
			<ContactsContainer/>
			<div className="f-paper fd-p20">
				<h2 style={{fontSize: '22px', color: '#777'}}>Ключевая информация</h2>
				<div style={{fontSize: '14px'}} dangerouslySetInnerHTML={{__html: skill.text}} />
				<hr/>
				<h2 style={{fontSize: '22px', color: '#777'}}>Опыт работы</h2>
				<ExperienceList experiences={experiences} branches={this.props.branches} />
				<hr/>
				<h2 style={{fontSize: '22px', color: '#777'}}>Образование</h2>
				<EducationList educations={educations} />
				<hr/>
				<h2 style={{fontSize: '22px', color: '#777'}}>Курсы, тренинги, сертификаты</h2>
				<TrainingsList trainings={trainings} />
				<hr/>
				<h2 style={{fontSize: '22px', color: '#777'}}>Дополнительная информация</h2>
				<AdditionalsList additionals={additionals} />
				<hr/>
				<h2 style={{fontSize: '22px', color: '#777'}}>Языки</h2>
				<LanguagesList languages={languages} />
			</div>

		</div>

	}
}

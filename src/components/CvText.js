import React from 'react'
import ExperienceListItem from '../components/Resume/ExperienceListItem'

export class CvText extends React.Component {
	componentWillMount () {
		this.props.getResumeText(this.props.resume.id || window.defaultResumeId)
	}

	render () {
		if (!this.props.isResumeLoaded) return null

		const { personal, photo, experiences, skill } = this.props.resume
		// same as
		// const personal = this.props.resume.personal
		// const photo = this.props.resume.photo
		// const experiences = this.props.resume.experiences


		// ["additionals","contact","educations","experiences","languages","personal","photo","position","skill","state","trainings","uiLanguage","searchState","updateDate","rtfLink","viewLink","resumeCount","id"]




		// this.props.resume.experiences[1].companySite

		return <div>
			<h3>Skill</h3>
			<div dangerouslySetInnerHTML={{__html: skill.text}} />

			<h3>Exp</h3>
			<div>{experiences.map(experience => <ExperienceListItem key={experience.id} experience={experience} />)}</div>

		</div>

		// // return <fieldset>
		// // 	<legend>CVTEXT</legend>
		// // 	<h4>
		// // 		<img src={photo} alt="user" style={{ height: 100, marginRight: 20, verticalAlign: 'middle' }}/>
		// // 		{personal.name} {personal.surName} {personal.dateBirth}
		// // 	</h4>
		// 	{/*<pre>{JSON.stringify(this.props)}</pre>*/}
		// 	{/*/!*{this.props.experiences.position}*!/*/}
		// {/*</fieldset>*/}
	}
}

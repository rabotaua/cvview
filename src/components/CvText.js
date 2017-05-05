import React from 'react'
import ExperienceList from '../components/Resume/ExperienceList'

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

		return <fieldset>
			<legend>CVTEXT</legend>
			<h2><strong>Skill</strong></h2>
			<div dangerouslySetInnerHTML={{__html: skill.text}} />

			<h2><strong>Exp</strong></h2>
			<ExperienceList experiences={experiences} branches={this.props.branches} />

		</fieldset>

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

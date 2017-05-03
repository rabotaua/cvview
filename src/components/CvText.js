import React from 'react'

// export const CvText = (props) => <div>
// 	<fieldset>
// 		<legend>CVTEXT</legend>
// 		<pre>{JSON.stringify(props.getResumeText)}</pre>
// 	</fieldset>
// </div>

export class CvText extends React.Component {
	componentWillMount () {
		this.props.getResumeText(3496188)
	}

	render () {
		if (Object.keys(this.props.resume).length === 0) return null

		return <fieldset>
			<legend>CVTEXT</legend>
			<h4>{this.props.resume.personal.name} {this.props.resume.personal.surName}</h4>
			<pre>{JSON.stringify(this.props)}</pre>
		</fieldset>
	}
}

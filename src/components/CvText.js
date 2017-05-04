import React from 'react'

export class CvText extends React.Component {
	componentWillMount () {
		this.props.getResumeText(3496188)
	}

	render () {
		if (!this.props.isResumeLoaded) return null

		const { personal } = this.props.resume

		return <fieldset>
			<legend>CVTEXT</legend>
			<h4>{personal.name} {personal.surName}</h4>
			{/*<pre>{JSON.stringify(this.props)}</pre>*/}
		</fieldset>
	}
}

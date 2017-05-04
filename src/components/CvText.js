import React from 'react'

export class CvText extends React.Component {
	componentWillMount () {
		this.props.getResumeText(this.props.resume.id || window.defaultResumeId)
	}

	render () {
		if (!this.props.isResumeLoaded) return null

		const { personal, photo } = this.props.resume

		return <div className="f-paper fd-p20">
			<h4>
				<img src={photo} alt="user" style={{ height: 100, marginRight: 20, verticalAlign: 'middle' }}/>
				{personal.name} {personal.surName}
			</h4>
			{/*<pre>{JSON.stringify(this.props)}</pre>*/}
		</div>
	}
}

import React, { Component } from 'react'

export default class ContactsSocials extends Component {
	render() {
		const { socialLinks } = this.props

		return socialLinks && socialLinks.length ?
			<div>
				<p style={{ margin: 0 }}><strong>Social links:</strong></p>
				{ socialLinks.map(soc => (
					<p style={{ fontSize: 12 }} key={soc.text}>
						<a href={soc.text}>{soc.text}</a>
					</p>)) }
			</div> : null
	}
}

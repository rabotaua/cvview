import React, { Component } from 'react'

export default class ContactsSocials extends Component {
	render() {
		const { socialLinks } = this.props

		return socialLinks && socialLinks.length ?
			<div>
				<p style={{ margin: 0 }}><strong>Social links:</strong></p>
				{ socialLinks.map((soc, id) => (
					<p style={{ fontSize: 12 }} key={id}>
						<a href={soc.text}>{soc.text}</a>
					</p>)) }
			</div> : null
	}
}

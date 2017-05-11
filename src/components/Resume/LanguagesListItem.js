import React from 'react'

const LanguagesListItem = (props) => {
	const { language } = props

	return <div className="fd-craftsmen">
		<p><strong>{language.languageName}</strong></p>
		<p>{language.skillName}</p>
	</div>
}


export default LanguagesListItem

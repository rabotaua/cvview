import React from 'react'

const LanguagesListItem = (props) => {
	const { language } = props

	return <div style={{fontSize: '14px'}}>
		<p><strong>{language.languageName}</strong></p>
		<p>{language.skillName}</p>
	</div>
}


export default LanguagesListItem

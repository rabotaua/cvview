import React from 'react'
import LanguagesListItem from './LanguagesListItem'
import Title from './Title'

const LanguagesList = (props) => {
	const { languages } = props
	let title = 'Языки'

	return <div id="cv-languages">
		{languages.length ? <Title title={title} /> : ''}
		{languages.map(language => <LanguagesListItem key={language.languageId} language={language} />)}
	</div>
}


export default LanguagesList

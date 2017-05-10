import React from 'react'
import LanguagesListItem from './LanguagesListItem'

const LanguagesList = (props) => {
	const { languages } = props

	return <div>
		{languages.map(language => <LanguagesListItem key={language.id} language={language} />)}
	</div>
}


export default LanguagesList

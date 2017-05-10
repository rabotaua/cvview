import React from 'react'
import LanguagesListItem from './LanguagesListItem'

const LanguagesList = (props) => {
	const { languages } = props

	return <div>
		<hr/>
		<h2 className="fd-syoi f-text-gray">Языки</h2>
		{languages.map(language => <LanguagesListItem key={language.languageId} language={language} />)}
	</div>
}


export default LanguagesList

import React from 'react'
import LanguagesListItem from './LanguagesListItem'

const LanguagesList = (props) => {
	const { languages } = props
	let title

	if(languages.length !== 0) {
		title = <h2 className="fd-syoi f-text-gray">Языки</h2>
	}

	return <div>
		{title}
		{languages.map(language => <LanguagesListItem key={language.languageId} language={language} />)}
	</div>
}


export default LanguagesList

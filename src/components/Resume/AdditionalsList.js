import React from 'react'
import AdditionalsListItem from './AdditionalsListItem'

const AdditionalsList = (props) => {
	const { additionals } = props
	let title

	if(additionals.length != 0) {
		title = <h2 className="fd-syoi f-text-gray">Дополнительная информация</h2>
	}

	return <div>
		{title}
		{additionals.map(additional => <AdditionalsListItem key={additional.id} additional={additional} />)}
	</div>
}


export default AdditionalsList

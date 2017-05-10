import React from 'react'
import AdditionalsListItem from './AdditionalsListItem'

const AdditionalsList = (props) => {
	const { additionals } = props

	return <div>
		<hr/>
		<h2 className="fd-syoi f-text-gray">Дополнительная информация</h2>
		{additionals.map(additional => <AdditionalsListItem key={additional.id} additional={additional} />)}
	</div>
}


export default AdditionalsList

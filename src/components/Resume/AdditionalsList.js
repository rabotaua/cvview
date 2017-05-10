import React from 'react'
import AdditionalsListItem from './AdditionalsListItem'

const AdditionalsList = (props) => {
	const { additionals } = props

	return <div>
		{additionals.map(additional => <AdditionalsListItem key={additional.id} additional={additional} />)}
	</div>
}


export default AdditionalsList

import React from 'react'

const AdditionalsListItem = (props) => {
	const { additional } = props

	return <div style={{fontSize: '14px'}}>
		<p><strong>{additional.title}</strong></p>
		<p><div dangerouslySetInnerHTML={{__html: additional.description}}/></p>
	</div>
}


export default AdditionalsListItem

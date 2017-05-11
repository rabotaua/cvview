import React from 'react'

const AdditionalsListItem = (props) => {
	const { additional } = props

	return <div className="fd-craftsmen">
		<p><strong>{additional.title}</strong></p>
		<div dangerouslySetInnerHTML={{__html: additional.description}}/>
	</div>
}


export default AdditionalsListItem

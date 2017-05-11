import React from 'react'

const TrainingsListItem = (props) => {
	const { training } = props

	return <div className="fd-craftsmen">

		<div className="fd-f-left">
			<div style={{marginRight: '40px'}}>
				<p>{training.year}</p>
			</div>
			<div>
				<p>{training.name}</p>
				<div dangerouslySetInnerHTML={{__html: training.description}}/>
				<p>{training.location}</p>
			</div>
		</div>
	</div>
}


export default TrainingsListItem

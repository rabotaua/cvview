import React from 'react'
import TrainingsListItem from './TrainingsListItem'

const TrainingsList = (props) => {
	const { trainings } = props

	return <div>
		{trainings.map(training => <TrainingsListItem key={training.id} training={training} />)}
	</div>
}


export default TrainingsList

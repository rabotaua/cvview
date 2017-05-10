import React from 'react'
import TrainingsListItem from './TrainingsListItem'

const TrainingsList = (props) => {
	const { trainings } = props

	return <div>
		<hr/>
		<h2 className="fd-syoi f-text-gray">Курсы, тренинги, сертификаты</h2>
		{trainings.map(training => <TrainingsListItem key={training.id} training={training} />)}
	</div>
}


export default TrainingsList

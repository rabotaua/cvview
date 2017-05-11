import React from 'react'
import TrainingsListItem from './TrainingsListItem'

const TrainingsList = (props) => {
	const { trainings } = props
	let title

	if(trainings.length !== 0) {
		title = <h2 className="fd-syoi f-text-gray">Курсы, тренинги, сертификаты</h2>
	}

	return <div>
		{title}
		{trainings.map(training => <TrainingsListItem key={training.id} training={training} />)}
	</div>
}


export default TrainingsList

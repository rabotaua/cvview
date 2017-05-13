import React from 'react'
import TrainingsListItem from './TrainingsListItem'
import Title from './Title'

const TrainingsList = (props) => {
	const { trainings } = props
	let title = 'Курсы, тренинги, сертификаты'

	return <div id="cv-trainings">
		{trainings.length ? <Title title={title} /> : ''}
		{trainings.map(training => <TrainingsListItem key={training.id} training={training} />)}
	</div>
}


export default TrainingsList

import React from 'react'
import moment from 'moment'
import ExperienceListSmall from '../Resume/ExperienceListSmall'
import PositionsList from '../Resume/PositionsList'

const CVTextPersonalInfo = (props) => {
	const { experiences, personal, position, cities, searchState } = props
	const {name, surName, cityId, dateBirth} = personal
	const {salary} = position

	const searchStatus = searchState ? 'Активно ищу работу' : 'Не активно ищу работу'

	const age = moment().format('YYYY') - moment(dateBirth).format('YYYY')
	const city = cities[cityId] ? cities[cityId].ru : ''

	return <div>
		<div style={{fontSize : '20px', fontWeight : 'bold'}}>
			{name} {surName}
		</div>
		<div>
			<PositionsList experiences={experiences} />
		</div>
		<br/>
		<div className="fd-f-left">
			<p style={{marginRight: '10px'}}>{city} </p>
			<p style={{marginRight: '10px'}}>{age} years </p>
			<p>{salary} грн. </p>
		</div>
		<div>
			<p style={{color: '#5fc378'}}>{searchStatus}</p>
		</div>
		<div>
			<ExperienceListSmall experiences={experiences.slice(0, 2)}/>
		</div>
	</div>
}


export default CVTextPersonalInfo

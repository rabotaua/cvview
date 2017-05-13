import React from 'react'
import ExperienceListSmall from '../Resume/ExperienceListSmall'
import PositionsList from '../Resume/PositionsList'
import CityAgeSalaryContainer from '../../containers/CityAgeSalaryContainer'

const CVTextPersonalInfo = (props) => {
	const { experiences, personal, position, searchState } = props
	const {name, surName, cityId, dateBirth} = personal
	const searchStatus = searchState ? 'Активно ищу работу' : 'Работаю но открыт для предложений'

	return <div>
		<div style={{fontSize : '20px', fontWeight : 'bold'}}>
			{name} {surName}
		</div>
		<PositionsList experiences={experiences} />
		<br/>
		<CityAgeSalaryContainer cityId={cityId} position={position} dateBirth={dateBirth} />
		<p style={{color: '#5fc378'}}>{searchStatus}</p>
		<ExperienceListSmall experiences={experiences.slice(0, 2)}/>
	</div>
}

export default CVTextPersonalInfo

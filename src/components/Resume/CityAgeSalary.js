import React from 'react'
import moment from 'moment'

const CityAgeSalary = (props) => {
	const { cities, cityId, position, dateBirth } = props
	const {salary} = position

	// console.log(props)

	const city = cities[cityId] ? cities[cityId].ru : ''
	const age = moment().format('YYYY') - moment(dateBirth).format('YYYY')

	return <div className="fd-f-left">
		<p style={{marginRight: '10px'}}>{city} </p>
		<p style={{marginRight: '10px'}}>{age} years </p>
		<p>{salary ? <span>{salary} грн.</span> : null}  </p>
	</div>
}


export default CityAgeSalary

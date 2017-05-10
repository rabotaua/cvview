import React from 'react'

const CompanyName = (props) => {
	const { id, name } = props

	const companyNameAsText = <span>{name}</span>
	const companyNameAsLink = <a href={'https://rabota.ua/company/'+ id}>{name}</a>
	const companyName = id ? companyNameAsLink : companyNameAsText

	return companyName
}


export default CompanyName

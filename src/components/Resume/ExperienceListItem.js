import React from 'react'
import CompanyName from './CompanyName'
import Position from './Position'
import WorkPeriod from './WorkPeriod'

const ExperienceListItem = (props) => {
	const { experience, branches } = props
	const branchName = branches.filter(branch => branch.id ==experience.branchId)[0].ru
	const cityname = cities[cityid].ru
	// {
	// 	"id": 8856658,
	// 	"position": "Старший управляющий",
	// 	"company": "ТОВ \"Кофе Хауз.Украина\"",
	// 	"branchId": 26,
	// 	"description": "<p><b>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Старший управляющий в ТОВ. \"Кофе Хауз.Украина\"</b></p><p>O&nbsp; опыт управление операционной деятельностью кофеен от 5 до 9 локаций</p><p>O&nbsp; координация всех процессов в кофейнях (персонал 100 человек, контроль от безопасности и качества продукции до формирования количества продукции, контроль необходимого оборудования на локации для достижения максимальных результатов товарооборотов, относительно поставленного плана, ежегодный прирост + 10%, на локациях возраста более 7 лет)</p><p>O&nbsp; выявление недостатка процессов в кофейнях и их коррекция, с целью выполнения товарооборота и ПНЛ</p><p>O&nbsp; разработка новых концепций направленных на увеличение товарооборота, относительно генераторов продаж вокруг локаций (акустические вечера в кофейне, в районе которой закрылся ночной клуб, прирост (продолжительность концерта 2 часа) составил 66% с первого дня события).</p><p>O&nbsp; создание маркетингового продукта для повышения товарооборота, ориентированное поднять ТО в конкретное время на кофейне.</p><p>Март 2013 - Ноябрь 2014</p><p><b>&nbsp; Управляющий 2-ой категории в ТОВ. \"Кофе Хауз.Украина\"</b></p><p>O&nbsp; управление операционной деятельностью кофеен (от 5 до 9 локаций, от 120 до 180 сотрудникам,</p><p>O&nbsp; координация всех процессов в кофейнях</p><p>O&nbsp; выявление недостатка процессов в кофейнях и их коррекция</p><p>O&nbsp; разработка новых концепций направленных на увеличение товарооборота</p><p>O&nbsp; создание маркетингового продукта для повышения товарооборота</p><p>Сентябрь 2009 - Февраль 2011</p><p><b>&nbsp; Директор 2-ой категории в ТОВ. \"Кофе Хауз.Украина\"</b></p><p>O&nbsp; управление операционной деятельностью кофейни (3 локации, около 120 сотрудников)</p><p>O&nbsp; координация всех процессов в кофейне</p><p>O&nbsp; &nbsp;выявление недостатка процессов в кофейне и их коррекция</p><p>O&nbsp; разработка новых концепций направленных на увеличение товарооборота</p><p>O&nbsp; создание маркетингового продукта для повышения товарооборота</p><p>Июль 2009 - Сентябрь 2009</p><p><b>&nbsp; Директор 1-ой категории в ТОВ. \"Кофе Хауз.Украина\"</b></p><p></p><p>O&nbsp; повысить товарооборот кофейни на 42%, достигла цели в сентябре 2009</p>",
	// 	"notebookCompanyId": 0,
	// 	"companySite": "",
	// 	"startWork": "2009-07-01T00:00:00",
	// 	"endWork": "2015-07-01T00:00:00",
	// 	"employeesAmount": 0,
	// }

	// const companyNameAsText = <span>{experience.company}</span>
	// const companyNameAsLink = <a href={'https://rabota.ua/company/'+ experience.notebookCompanyId}>{experience.company}</a>
	// const companyName = experience.notebookCompanyId ? companyNameAsLink : companyNameAsText

	return <div>
		<h3><strong>Position:</strong></h3>
		<Position position={experience.position} />
		<br/>

		<h3><strong>Work Period:</strong></h3>
		<WorkPeriod {...experience} />
		<br/>

		<h3><strong>Company Name:</strong></h3>
		<CompanyName id={experience.notebookCompanyId} name={experience.company} />
		<h4>branch: {branchName}</h4>
		{/*<CompanyName2 {...experience} />*/}
		{/*same*/}
		{/*<CompanyName2 employeesAmount={experience.employeesAmount} endWork={experience.endWork} />*/}
		<br/>

		<h3><strong>Description:</strong></h3>
		<div dangerouslySetInnerHTML={{__html: experience.description}}></div>
	</div>
}


export default ExperienceListItem

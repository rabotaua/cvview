import React from 'react'
import CompanyName from './CompanyName'
import Position from './Position'
import WorkPeriod from './WorkPeriod'

const ExperienceListItem = (props) => {
	const { experience, branches } = props
	const branchName = (branches.filter(branch => branch.id === experience.branchId)[0] || {ru: ''}).ru

	return <div style={{fontSize: '14px'}}>
		<div className="fd-f-left">
			<div>
				<h3><strong>Work Period:</strong></h3>
				<WorkPeriod {...experience} />
			</div>
			<div>
				<h3><strong> Position:</strong></h3>
				<Position position={experience.position} />
				<br/>
				<h3><strong>Company Name:</strong></h3>
				<CompanyName id={experience.notebookCompanyId} name={experience.company} />
				<h4>branch: {branchName}</h4>
				<p>{experience.employeesAmount}</p>
				<h3><strong>Description:</strong></h3>
				<div dangerouslySetInnerHTML={{__html: experience.description}}/>
			</div>
		</div>
	</div>
}


export default ExperienceListItem

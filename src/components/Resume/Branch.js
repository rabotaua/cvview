import React from 'react'

const Branch = (props) => {
	const { experience, branches} = props
	const branchName = (branches.filter(branch => branch.id === experience.branchId)[0] || {ru: ''}).ru

	return <h4><span>branch: </span>{branchName}</h4>
}


export default Branch

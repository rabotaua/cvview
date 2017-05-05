import React from 'react'
// import PropTypes from 'prop-types'

export const SendVacancyTrigger = ({showModal}) => <div>
	<button onClick={showModal}>send vacancy</button>
</div>

// TODO: propTypes are broken somehow
// SendVacancyTrigger.propTypes = {
// 	showModal: PropTypes.func.isRequier
// }

export default SendVacancyTrigger

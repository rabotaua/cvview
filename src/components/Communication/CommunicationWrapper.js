import React from 'react'
import authHoc from '../authHoc'
import SendVacancyContainer from '../../containers/SendVacancyContainer'
import SendMessage from '../../containers/SendMessage'

export const CommunicationWrapper = () => <div className="f-paper fd-p20">
	<SendVacancyContainer />
	<SendMessage/>
</div>

export default authHoc(CommunicationWrapper)(null)

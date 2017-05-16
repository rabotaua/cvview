import React from 'react'
import authHoc from '../authHoc'
import SendVacancyContainer from '../../containers/SendVacancyContainer'
import SendMessageContainer from '../../containers/SendMessageContainer'

export const CommunicationWrapper = () => <div className="f-paper fd-p20">
	<SendVacancyContainer />
	<SendMessageContainer />
</div>

export default authHoc(CommunicationWrapper)(null)

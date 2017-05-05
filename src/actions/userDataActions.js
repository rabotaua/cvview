import { getUserData } from '../api/userDataApi'

export const getUserDataAction = id => dispatch => {
	getUserData(id).then(data => {
		dispatch({ type: 'SET_USER_DATA', data })
	})
}

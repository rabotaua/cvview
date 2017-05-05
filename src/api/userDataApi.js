export const getUserData = (id) => fetch(`http://localhost:3001/users/?id=${id}`)
	.then(res => res.json())

import 'whatwg-fetch'

export const getResume = (id) => fetch(`http://localhost:3001/resume/${id}`)
  .then(res => res.json())

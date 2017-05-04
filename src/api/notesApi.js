import 'whatwg-fetch'

export const getResumeNotes = resumeId => fetch(`http://localhost:3001/note/?resumeId=${resumeId}`)
  .then(res => res.json())

export const addNewNoteApi = data => (
	fetch(`http://localhost:3001/note/`, { method: 'POST', body: data })
)

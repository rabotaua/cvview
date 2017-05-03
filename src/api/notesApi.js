import 'whatwg-fetch'

export const getResumeNotes = resumeId => fetch(`http://localhost:3001/note/?resumeId=${resumeId}`)
  .then(res => res.json())


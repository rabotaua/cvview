const fakeData = (id) => ({
	"phone": "0957014616",
	"additionalPhones": [],
	"email": "fakeemail@mail.ua",
	"skype": "",
	"portfolio": [],
	"socialNetworks": [],
	"resumeId": id
})

export const openContactsApi = (resumeBody) => (
	fetch(`http://localhost:3001/resume/${resumeBody.id}`, {
		method: 'PUT',
		body: JSON.stringify({ ...resumeBody, contact: { ...fakeData(resumeBody.id) } }),
		headers: { 'Content-Type': 'application/json' }
	})
)

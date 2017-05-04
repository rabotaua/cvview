import React, { Component } from 'react'
import { connect } from 'react-redux'
import ContactsPhones from '../components/Contacts/ContactsPhones'
import ContactsEmail from '../components/Contacts/ContactsEmail'
import ContactsSocials from '../components/Contacts/ContactsSocials'

class ContactsContainer extends Component {
	render() {
		const { contacts } = this.props

		if (!contacts || (contacts.hasOwnProperty('length') && !contacts.length))
			return null

		return <div className="fd-f-between" style={{ padding: 30, margin: 40, border: '1px solid #ddd' }}>
			<div>
				<ContactsPhones
					additionalPhones={contacts.additionalPhones}
					phone={contacts.phone}
				/>
				<br/>
				<ContactsEmail email={contacts.email}/>
			</div>
			<div>
				<ContactsSocials socialLinks={contacts.socialNetworks}/>
			</div>
		</div>
	}
}

const mapStateToProps = (state) => ({
	contacts: state.resume.contact
})

export default connect(mapStateToProps)(ContactsContainer)

import React, { Component } from 'react'
import ContactsPhones from './ContactsPhones'
import ContactsEmail from './ContactsEmail'
import ContactsSocials from './ContactsSocials'
import OpenContacts from './OpenContacts'

export default class ContactsAndSocialWrap extends Component {
	render() {
		const { contacts, unUsedContacts } = this.props

		if (!contacts)
			return <OpenContacts openContacts={this.props.openContactsAction} unUsedContacts={unUsedContacts}/>

		return <div className="f-paper fd-p20 fd-f-between">
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

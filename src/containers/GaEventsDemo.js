/* global ga */

import React, { Component } from 'react'
import { connect } from 'react-redux'
import faker from 'faker'

const labelComponent = (name) => {
	return <label htmlFor={name.toLowerCase()}>
		{name} { ' ' }
	</label>
}

class GaDemo extends Component {

	getInputValues() {
		return [
			this.categoryInput.value || 'test-category',
			this.actionInput.value || 'test-action',
			this.labelInput.value || '',
			this.valueInput.value || null
		]
	}

	simpleGaSend() {
		ga('send', 'event', ...this.getInputValues())
	}

	throughMiddleware() {
		this.props.dispatch({
			type: "DO_ANYTHING_BRO",
			payload: { name: 'Alex', age: 24 },
			gaEvent: this.getInputValues()
		})
	}

	usingPromise() {
		this.props.dispatch({
			type: "ASYNC_GA",
			id: Date.now(),

			payload: new Promise(resolve => {
				setTimeout(() => {
					resolve(this.getInputValues())
				}, ~~(Math.random() * 2000))
			})
		})
	}


	render() {
		return <div style={{ textAlign: 'left', fontSize: 15 }}>
			<fieldset style={{ width: '50%', margin: '0 auto' }}>
				<legend>Goooooogle Analytics</legend>
				<br/>
				<div>
					{labelComponent('Category')}
					<input defaultValue={faker.random.word()} ref={input => this.categoryInput = input} id="category"
					       type="text"/>
				</div>
				<div>
					{labelComponent('Action')}
					<input defaultValue={faker.random.word()} ref={input => this.actionInput = input} id="action"
					       type="text"/>
				</div>
				<div>
					{labelComponent('Label')}
					<input defaultValue={faker.random.word()} ref={input => this.labelInput = input} id="label"
					       type="text"/>
				</div>
				<div>
					{labelComponent('Value')}
					<input defaultValue={~~(Math.random() * 111)} ref={input => this.valueInput = input} id="value"
					       type="number"/>
				</div>

				<br/>
				<button type="submit" onClick={this.simpleGaSend.bind(this)}>
					Simple
				</button>
				{ ' ' }
				<button onClick={this.throughMiddleware.bind(this)}>
					Sync using middleware
				</button>
				{ ' ' }
				<button onClick={this.usingPromise.bind(this)}>
					Async using middleware
				</button>

			</fieldset>
		</div>
	}
}

export default connect(state => state)(GaDemo)

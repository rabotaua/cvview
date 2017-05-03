import React, { Component } from 'react'


export default class AddControl extends Component {
	constructor() {
		super()

		this.addInput = null
	}

	addNewItem(e) {
		e.preventDefault()
		const inputVal = this.addInput.value.trim()

		if (inputVal) {
			this.props.addItemAction(inputVal)
			this.addInput.value = ''
		}
	}

    render() {
	    return <form action="#" onSubmit={this.addNewItem.bind(this)}>
		    <input type="text" ref={input => this.addInput = input}/>
	        {' '}
		    <button type="submit">add new item</button>
        </form>
    }
}
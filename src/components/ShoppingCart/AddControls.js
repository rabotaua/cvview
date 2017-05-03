import React, { Component } from 'react'

export default class AddControl extends Component {
    render() {
        return <form action="#">
	        <input type="text" ref={input => this.addInput} />
	        {' '}
	        <button>add new item</button>
        </form>
    }
}
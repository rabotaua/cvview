import React from 'react'

export default class ControlQuestionList extends React.Component {
	constructor() {
		super()
		this.state = {
			isExpanded: false
		}
		this.toggleList = this.toggleList.bind(this)
	}

	toggleList() {
		this.setState({
			isExpanded: !this.state.isExpanded
		})
	}

	render() {
		const controlQuestions = this.props.controlQuestions ? this.props.controlQuestions.map(item => {
			let {id, question, answer, isAnswered} = item
			let answerText = isAnswered ? answer : 'Не уазано'
			return <li key={id}>
				<strong>{question}</strong><br />
				<span style={{color: 'green'}}>{answerText}</span>
			</li>
		}) : []

		return <div>
			<h3 onClick={this.toggleList} style={{cursor: 'pointer'}}>
				<b>Ответы на контрольные вопросы</b>
			</h3>
			<ul style={{display: this.state.isExpanded ? 'block' : 'none', listStyle: 'none', paddingLeft: 0}}>
				{controlQuestions}
			</ul>
		</div>
	}
}


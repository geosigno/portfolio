import React from 'react';
import ReactDOM from 'react-dom';

import autosize from 'autosize';

import { Form } from './form';
import { FormAction } from './form-action';

import './form.scss';

export class FormContainer extends React.Component {
	constructor(props) {
		super(props);
		this.inputs = {
			1: {
				label: "what's your email?",
				name: 'email',
				type: 'email',
			},
			2: {
				label: "what's your subject?",
				name: 'subject',
				type: 'text',
			},
			3: {
				label: "what's your message?",
				name: 'message',
				type: 'textarea',
			},
		};
		this.state = {
			active: 1,
			contact: {
				email: '',
				subject: '',
				message: '',
			},
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleKeyPress = this.handleKeyPress.bind(this);
		this.handleNextClick = this.handleNextClick.bind(this);
		this.handlePreviousClick = this.handlePreviousClick.bind(this);
	}

	componentDidMount() {
		autosize(document.querySelector('textarea'));
	}

	handleChange(e) {
		let target = e.target,
			name = target.name,
			value = target.value;

		this.setState(prevState => {
			return {
				contact: {
					...prevState.contact,
					[name]: value,
				},
			};
		});
	}

	handleKeyPress(e) {
		if (e.key == 'Enter') {
			this.handleNextClick(e);
			return false;
		}
	}

	handleNextClick(e) {
		e.preventDefault();

		let currentStep = this.state.active,
			nextStep = currentStep + 1;

		let currentValue = this.state.contact[this.inputs[currentStep].name];

		if (!currentValue) return;

		if (!this.inputs[nextStep]) return;

		this.setState({
			active: nextStep,
		});
	}

	handlePreviousClick(e) {
		e.preventDefault();

		let currentStep = this.state.active,
			previousStep = currentStep - 1;

		this.setState({
			active: previousStep,
		});
	}

	render() {
		return (
			<Form
				inputs={this.inputs}
				handleChange={this.handleChange}
				handleKeyPress={this.handleKeyPress}
				activeInput={this.state.active}
			>
				<FormAction
					currentStep={this.state.active}
					totalSteps={Object.keys(this.inputs).length}
					handlePreviousClick={this.handlePreviousClick}
					handleNextClick={this.handleNextClick}
				/>
			</Form>
		);
	}
}

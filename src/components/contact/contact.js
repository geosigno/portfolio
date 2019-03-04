import React from 'react';
import ReactDOM from 'react-dom';

import { Heading } from '../heading/heading';
import { Geo } from '../geo/geo';
import { FormContainer } from '../form/formContainer';

import './contact.scss';

export class Contact extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div className="contact__container container container--small">
				<Heading title={'Contact me'} />
				<Geo />
				<FormContainer />
			</div>
		);
	}
}

ReactDOM.render(<Contact />, document.getElementById('contact'));

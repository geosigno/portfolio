import React from 'react';
import ReactDOM from 'react-dom';

import { Heading } from '../heading/heading';
import { Geo } from '../geo/geo';

import './contact.scss';

export class Contact extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div className="contact__container">
				<Heading title={'Contact me'} />
				<Geo />
			</div>
		);
	}
}

ReactDOM.render(<Contact />, document.getElementById('contact'));

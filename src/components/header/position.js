import React from 'react';
import PropTypes from 'prop-types';

export class Position extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<h1>
				<span>I am a front-end</span>
				<span>{this.props.position}</span>
			</h1>
		);
	}
}

Position.propTypes = {
	position: PropTypes.string,
};

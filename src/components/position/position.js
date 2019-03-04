import React from 'react';
import PropTypes from 'prop-types';

import './position.scss';

export class Position extends React.Component {
	constructor(props) {
		super(props);
	}

	shouldComponentUpdate(nextProps) {
		return nextProps.position !== this.props.position;
	}

	render() {
		return (
			<h1 className="position">
				<span>I am a front-end</span>
				<span>{this.props.position}</span>
			</h1>
		);
	}
}

Position.propTypes = {
	position: PropTypes.string,
	className: PropTypes.string,
};

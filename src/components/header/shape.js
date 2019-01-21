import React from 'react';
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export class Shape extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		let renderShapes = [];

		for (const key in this.props.shape) {
			let shape = (
				<a key={key} href="#">
					<FontAwesomeIcon icon={['fab', key]} style={this.props.shape[key].style} className={'shape fab fa-' + key + (this.props.shape[key].active ? ' active' : '')} />
				</a>
			);
			renderShapes.push(shape);
		}

		return <div>{renderShapes}</div>;
	}
}

Shape.propTypes = {
	shape: PropTypes.object,
};

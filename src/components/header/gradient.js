import React from 'react';
import PropTypes from 'prop-types';

export class Gradient extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return this.props.gradients.map((item, index) => <div key={index} className={'header__gradient ' + item + (item == this.props.gradient ? ' active' : '')} />);
	}
}

Gradient.propTypes = {
	gradients: PropTypes.array,
	gradient: PropTypes.string,
};

import React from 'react';

import { Position } from '../position/position';

export class PositionContainer extends React.Component {
	constructor() {
		super();
		this.positions = ['lead', 'developer', 'hard-worker', 'learner'];
		this.state = {
			position: 'lead',
		};
	}

	componentDidMount() {
		this.switchPosition();
	}

	switchPosition() {
		let i = 1;
		setInterval(() => {
			this.setState({
				position: this.positions[i++],
			});

			//if index is above the length of positions
			//start again from the begining
			// == infinite loop
			if (i >= this.positions.length) {
				i = 0;
			}
		}, 2000);
	}

	render() {
		return <Position position={this.state.position} className="header__title" />;
	}
}

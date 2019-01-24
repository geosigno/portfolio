import React from 'react';
import ReactDOM from 'react-dom';

import { Shape } from '../shape/shape';

import './header.scss';

export class Header extends React.Component {
	constructor() {
		super();
		this.positions = ['lead', 'developer', 'hard-worker', 'learner'];
		this.state = {
			position: 'lead',
		};
	}

	componentWillMount() {
		let i = 1;
		setInterval(() => {
			this.setState({
				position: this.positions[i++],
			});

			if (i >= this.positions.length) {
				i = 0;
			}
		}, 2000);
	}

	render() {
		return (
			<div className="header__container">
				<div className="header__background" />

				<div className="header__gradient" />

				<Shape />

				<h1 className="header__title">
					<span>I am a front-end</span>
					<span>{this.state.position}</span>
				</h1>
			</div>
		);
	}
}

ReactDOM.render(<Header />, document.getElementById('header'));

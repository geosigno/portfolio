import React from 'react';
import ReactDOM from 'react-dom';

import { Position } from './position';
import { Gradient } from './gradient';
import { Shape } from './shape';

import './header.scss';

export class Header extends React.Component {
	constructor() {
		super();

		this.positions = ['lead', 'developer', 'hard-worker', 'learner'];
		this.gradients = ['header--1', 'header--2'];
		this.shapes = ['react', 'sass', 'js-square', 'github-alt', 'gulp', 'npm', 'html5', 'css3-alt', 'git', 'node-js', 'yarn', 'stack-overflow'];

		this.state = {
			position: 'lead',
			gradient: 'header--1',
			shape: this.initShape(),
		};
	}

	initShape() {
		let initialShape = {};
		this.shapes.forEach(shape => {
			initialShape[shape] = {};
			initialShape[shape]['style'] = this.getShapePosition();
			initialShape[shape]['active'] = false;
		});

		return initialShape;
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

		let j = 1;
		this.interval = setInterval(() => {
			this.setState({
				gradient: this.gradients[j++],
			});

			if (j >= this.gradients.length) {
				j = 0;
			}
		}, 3000);

		let k = 0;
		this.shapeInterval = setInterval(() => {
			//get current shape
			let shape = this.shapes[k++],
				//get ramdom position for that shape
				shapeStyle = this.getShapePosition();

			//copy the state shape into a temp object
			let tempObject = this.state.shape;

			tempObject[shape] = {};
			tempObject[shape]['style'] = shapeStyle;
			tempObject[shape]['active'] = true;

			this.setState(
				{
					shape: tempObject,
				},
				function() {
					//Remove the active state after 2 sec
					setTimeout(() => {
						tempObject[shape]['active'] = false;
						this.setState({
							shape: tempObject,
						});
					}, 2000);
				},
			);

			if (k >= this.shapes.length) {
				k = 0;
			}
		}, 800);
	}

	getShapePosition() {
		let randomY = Math.floor(Math.random() * 30 + 1),
			randomX = Math.floor(Math.random() * 50 + 1);

		let styleTop = 'inherit',
			styleBottom = 'inherit',
			styleLeft = 'inherit',
			styleRight = 'inherit';

		if (Math.floor(Math.random() * 2) + 1 === 1) {
			styleTop = `${randomY}%`;
		} else {
			styleBottom = `${randomY}%`;
		}

		if (Math.floor(Math.random() * 2) + 1 === 1) {
			styleLeft = `${randomX}%`;
		} else {
			styleRight = `${randomX}%`;
		}

		return {
			top: styleTop,
			bottom: styleBottom,
			left: styleLeft,
			right: styleRight,
		};
	}

	render() {
		return (
			<div className="header__container">
				<Shape shape={this.state.shape} />

				<Gradient gradient={this.state.gradient} gradients={this.gradients} />

				<Position position={this.state.position} />
			</div>
		);
	}
}

ReactDOM.render(<Header />, document.getElementById('header'));

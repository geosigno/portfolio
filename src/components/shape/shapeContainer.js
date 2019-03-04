import React from 'react';

import { Shape } from './shape';

import './shape.scss';

export class ShapeContainer extends React.Component {
	constructor() {
		super();
		this.shapes = [
			'react',
			'sass',
			'js-square',
			'github-alt',
			'gulp',
			'npm',
			'html5',
			'css3-alt',
			'git',
			'node-js',
			'yarn',
			'stack-overflow',
		];
	}

	componentWillMount() {
		this.setState({
			shape: this.initShapes(),
		});
	}

	componentDidMount() {
		this.switchShape();
	}

	initShapes() {
		const initialShapes = {};

		this.shapes.forEach(shape => {
			initialShapes[shape] = {};
		});

		return initialShapes;
	}

	setShapeActive(shape) {
		let shapes = this.state.shape;

		shapes[shape].style = this.getShapePosition();
		shapes[shape].active = true;

		this.setState(
			{
				shape: shapes,
			},
			() => {
				setTimeout(() => {
					this.unsetShapeActive(shape);
				}, 2000);
			},
		);
	}

	unsetShapeActive(shape) {
		let shapes = this.state.shape;

		shapes[shape].active = false;

		this.setState({
			shape: shapes,
		});
	}

	switchShape() {
		let i = 0;
		setInterval(() => {
			//get current shape
			let shape = this.shapes[i++];

			this.setShapeActive(shape);

			//if index is above the length of shapes
			//start again from the begining
			// == infinite loop
			if (i >= this.shapes.length) {
				i = 0;
			}
		}, 800);
	}

	getShapePosition() {
		let ramdomX = Math.floor(Math.random() * 100 + 1),
			ramdomY = Math.floor(Math.random() * 100 + 1),
			styleTop = ramdomX + '%',
			styleLeft = ramdomY + '%';

		if (ramdomX > 50) {
			styleTop = `calc(${styleTop} - 200px)`;
		}

		if (ramdomY > 50) {
			styleLeft = `calc(${styleLeft} - 200px)`;
		}

		return {
			top: styleTop,
			left: styleLeft,
		};
	}

	render() {
		return <Shape className="shape" shapes={this.state.shape} />;
	}
}

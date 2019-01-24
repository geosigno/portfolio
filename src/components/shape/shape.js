import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './shape.scss';

export class Shape extends React.Component {
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
		this.state = {
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
		let i = 0;
		setInterval(() => {
			//get current shape
			let shape = this.shapes[i++],
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
			styleTop = `calc(${styleTop} - 256px)`;
		}

		if (ramdomY > 50) {
			styleLeft = `calc(${styleLeft} - 256px)`;
		}

		return {
			top: styleTop,
			left: styleLeft,
		};
	}

	render() {
		let renderShapes = [];

		for (const key in this.state.shape) {
			let shape = (
				<a key={key} href="#">
					<FontAwesomeIcon
						icon={['fab', key]}
						style={this.state.shape[key].style}
						className={
							'shape fab fa-' + key + (this.state.shape[key].active ? ' active' : '')
						}
					/>
				</a>
			);
			renderShapes.push(shape);
		}

		return <div>{renderShapes}</div>;
	}
}

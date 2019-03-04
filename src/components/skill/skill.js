import React from 'react';
import ReactDOM from 'react-dom';

import { Heading } from '../heading/heading';

import { Shape } from './../shape/shape';

import './skill.scss';

export class Skill extends React.Component {
	constructor() {
		super();

		this.shapes = {
			html5: {
				title: 'HTML',
				color: '#e34f26',
			},
			sass: {
				title: 'SASS/CSS',
				color: '#c69',
			},
			'js-square': {
				title: 'JS/ES6',
				color: '#f7df1e',
			},
			react: {
				title: 'ReactJS',
				color: '#00d8ff',
			},
			webpack: {
				title: 'Webpack',
				color: '#333333',
			},
			'node-js': {
				title: 'NodeJS',
				color: '#6cc24a',
			},
			gulp: {
				title: 'Gulp',
				color: '#DB4446',
			},
			'github-alt': {
				title: 'Git',
				color: '#f1502f',
			},
			'node-js': {
				title: 'NodeJS',
				color: '#6cc24a',
			},
		};
	}

	render() {
		return (
			<div className="skill__container">
				<Heading title={'I do know'} />
				<Shape className="skill__slider" shapes={this.shapes} />
			</div>
		);
	}
}

ReactDOM.render(<Skill />, document.getElementById('skill'));

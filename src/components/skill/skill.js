import React from 'react';
import ReactDOM from 'react-dom';

import Slider from 'react-slick';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Heading } from '../heading/heading';

import './skill.scss';

export class Skill extends React.Component {
	constructor() {
		super();

		this.state = {
			skills: {
				html: {
					title: 'HTML',
					color: '#e34f26',
					icon: 'html5',
					text:
						'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
				},
				css: {
					title: 'SASS',
					color: '#c69',
					icon: 'sass',
					text:
						'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
				},
				js: {
					title: 'Javascript',
					color: '#f7df1e',
					icon: 'js-square',
					text:
						'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
				},
				react: {
					title: 'ReactJS',
					color: '#00d8ff',
					icon: 'react',
					text:
						'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
				},
				webpack: {
					title: 'Webpack',
					icon: 'gulp',
					text:
						'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
				},
				node: {
					title: 'nodeJS',
					color: '#6cc24a',
					icon: 'node-js',
					text:
						'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
				},
				gulp: {
					title: 'Gulp',
					color: '#DB4446',
					icon: 'gulp',
					text:
						'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
				},
				git: {
					title: 'Git',
					color: '#f1502f',
					icon: 'git',
					text:
						'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
				},
			},
		};
	}

	render() {
		const settings = {
			dots: false,
			infinite: true,
			speed: 600,
			focusOnSelect: true,
			centerMode: true,
			cssEase: 'ease-in-out',
			autoplay: true,
			slidesToShow: 7,
			slidesToScroll: 1,
		};

		let renderSkills = [];

		for (const key in this.state.skills) {
			let icon = this.state.skills[key].icon,
				color = this.state.skills[key].color,
				title = this.state.skills[key].title,
				text = this.state.skills[key].text;

			let skill = (
				<div key={key} className="skill__item">
					<FontAwesomeIcon color={color} icon={['fab', icon]} />
					<h3 style={{ color: color }}>{title}</h3>
					<p>{text}</p>
				</div>
			);
			renderSkills.push(skill);
		}

		return (
			<div className="skill__container">
				<Heading title={ "I do know" } />
				<Slider {...settings}>{renderSkills}</Slider>
			</div>
		);
	}
}

ReactDOM.render(<Skill />, document.getElementById('skill'));

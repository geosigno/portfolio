import React from 'react';
import ReactDOM from 'react-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import avatar from './bio.jpg';
import './bio.scss';

export class Bio extends React.Component {
	constructor() {
		super();
		this.state = {
			avatar: avatar,
			name: 'Geoffrey',
			text:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
			socials: {
				linkedin: {
					icon: 'linkedin-in',
					color: '#0077b5',
					link: '#',
				},
				twitter: {
					icon: 'twitter',
					color: '#38A1F3',
					link: '#',
				},
			},
		};
	}

	render() {
		const socialList = [];
		for (const key in this.state.socials) {
			let icon = this.state.socials[key].icon,
				link = this.state.socials[key].link,
				color = this.state.socials[key].color;

			let listItem = (
				<li key={key}>
					<a href={link}>
						<FontAwesomeIcon color={color} icon={['fab', icon]} />
					</a>
				</li>
			);
			socialList.push(listItem);
		}

		return (
			<div className="bio__container">
				<div className="bio__avatar">
					<img src={this.state.avatar} />
				</div>

				<div className="bio__content">
					<h2>Hello, I'm {this.state.name}</h2>
					<p>
						{this.state.text}
						{this.state.text}
					</p>
					<p>{this.state.text}</p>
					<p>{this.state.text}</p>
				</div>

				<ul className="bio__social">{socialList}</ul>
			</div>
		);
	}
}

ReactDOM.render(<Bio />, document.getElementById('bio'));

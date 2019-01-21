import React from 'react';
import ReactDOM from 'react-dom';

import avatar from './bio.jpg';
import './bio.scss';

export class Bio extends React.Component {
	constructor() {
		super();
		this.state = {
			avatar: avatar,
			name: 'Geoffrey',
			text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
		}
	}

	render() {
		return (
			<div className="bio__container">
				<div className="bio__avatar">
					<img src={this.state.avatar} />
				</div>

				<div className="bio__content">
					<h2>{this.state.name}</h2>
					<p>{this.state.text}</p>
				</div>
			</div>
		);
	}
}

ReactDOM.render(<Bio />, document.getElementById('bio'));

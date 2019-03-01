import React from 'react';
import ReactDOM from 'react-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Heading } from '../heading/heading';

import avatar from './bio.jpg';
import './bio.scss';

export class Bio extends React.Component {
	constructor() {
		super();
		this.state = {
			avatar: avatar,
			name: 'Geoffrey',
			socials: {
				linkedin: {
					icon: 'linkedin-in',
					color: '#0077b5',
					link: 'https://www.linkedin.com/in/geoffrey-signorato-2475268a',
				},
				twitter: {
					icon: 'twitter',
					color: '#38A1F3',
					link: '#',
				},
				medium: {
					icon: 'medium',
					color: '#000',
					link: 'https://medium.com/@geoffrey.signorato',
				},
				github: {
					icon: 'github-alt',
					color: '#000',
					link: 'https://github.com/geosenna',
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
					<a href={link} target="_blank">
						<FontAwesomeIcon color={color} icon={['fab', icon]} />
					</a>
				</li>
			);
			socialList.push(listItem);
		}

		return (
			<div className="bio__container container container--small">
				<div className="bio__avatar">
					<img src={this.state.avatar} />
				</div>

				<div className="bio__content">
					<Heading title={"Hello, I'm " + this.state.name} />
					<p>
						I’m 27, it has been more than 10 years that I have a fondness for web. I
						learnt it on my own, travelling countless tutorials and the amazing at the
						time siteduzero.com (at the time). I built many website using HTML, CSS,
						jQuery and PHP/MySQL.
					</p>
					<p>
						A lot of change now. Bundles are trending and JS frameworks make life
						easier, but I do still have my thirst for knowledge. Having growth during
						the start of the nowadays web make me appreciate even more what we have
						today. I know what it is to set up a website from scratch without any
						framework of nodeJS.
					</p>
					<p>
						I always had an affinity for design and UX. Writing strong Javascript yes,
						but also create design and use Sass to build it the way I want. My
						speciality is front-end, but at the time I started web, there wasn’t any
						front end or back end. At that time the term wes webmaster, some guys that
						were created website end to end.
					</p>
					<p>In my everyday work, I use JS/ES6, Sass, React, Gulp and Webpack.</p>
					<p>
						I studied in France and and graduated a professional degree in web
						development.
					</p>
					<p>
						I currently work as a Front-end Technical Lead at Proximity BBDO Indian
						Ocean in Mauritius Island.
					</p>
				</div>

				<ul className="bio__social">{socialList}</ul>
			</div>
		);
	}
}

ReactDOM.render(<Bio />, document.getElementById('bio'));

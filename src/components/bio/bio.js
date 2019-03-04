import React from 'react';
import ReactDOM from 'react-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Heading } from '../heading/heading';
import { Social } from '../social/social';

import avatar from './bio.jpg';

import './bio.scss';

export class Bio extends React.Component {
	constructor() {
		super();
	}

	render() {
		return (
			<div className="bio__container container container--small">
				<div className="bio__avatar">
					<img src={avatar} alt="Geoffrey Signorato" />
				</div>

				<div className="bio__content">
					<Heading title={"Hello, I'm Geoffrey"} />
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
				<Social />
			</div>
		);
	}
}

ReactDOM.render(<Bio />, document.getElementById('bio'));

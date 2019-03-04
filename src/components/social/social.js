import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './social.scss';

export class Social extends React.Component {
	constructor() {
		super();
		this.socials = {
			linkedin: {
				icon: 'linkedin-in',
				color: '#0077b5',
				link: 'https://www.linkedin.com/in/geoffrey-signorato-2475268a',
			},
			// twitter: {
			// 	icon: 'twitter',
			// 	color: '#38A1F3',
			// 	link: '#',
			// },
			medium: {
				icon: 'medium',
				color: '#000',
				link: 'https://medium.com/@geoffrey.signorato',
			},
			github: {
				icon: 'github-alt',
				color: '#000',
				link: 'https://github.com/geosigno',
			},
		};
	}

	render() {
		return (
			<ul className="social">
				{Object.keys(this.socials).map(social => (
					<li key={social}>
						<a href={this.socials[social].link} target="_blank">
							<FontAwesomeIcon
								color={this.socials[social].color}
								icon={['fab', this.socials[social].icon]}
							/>
							<span className="show-for-sr">{social}</span>
						</a>
					</li>
				))}
			</ul>
		);
	}
}

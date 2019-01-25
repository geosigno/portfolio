import React from 'react';
import ReactDOM from 'react-dom';

import azureloLogo from './azurelo.png';
import orizonteLogo from './orizonte.png';
import simpleParallaxLogo from './simpleParallax.png';
import azureloThumbnail from './azureloContent.png';
import orizonteThumbnail from './orizonteContent.png'
import simpleParallaxThumbnail from './simpleParallaxContent.png';

import './portfolio.scss';

//const responsiveImage = require('./simpleParallaxcontent.png?sizes[]=600,sizes[]=1200,sizes[]=1920,quality=100');

export class Portfolio extends React.Component {
	constructor() {
		super();
		this.state = {
			projects: {
				azurelo: {
					title: 'Azurelo',
					slogan: 'a responsive blog theme',
					text: 'Blah Blah this is very good. Blah Blah this is very good. Blah Blah this is very good. Blah Blah this is very good. Blah Blah this is very good. Blah Blah this is very good. Blah Blah this is very good. Blah Blah this is very good. Blah Blah this is very good. Blah Blah this is very good. Blah Blah this is very good. Blah Blah this is very good. Blah Blah this is very good. Blah Blah this is very good. Blah Blah this is very good. Blah Blah this is very good. Blah Blah this is very good. Blah Blah this is very good. Blah Blah this is very good. Blah Blah this is very good. Blah Blah this is very good. s',
					logo: azureloLogo,
					thumbnail: azureloThumbnail,
					url: 'https://anakao-theme.com/azurelo/',
				},
				simpleParallax: {
					title: 'simpleParallax',
					slogan: 'a JS library',
					text: 'Blah Blah this is very good. Blah Blah this is very good. Blah Blah this is very good. Blah Blah this is very good. Blah Blah this is very good. Blah Blah this is very good. Blah Blah this is very good. Blah Blah this is very good. Blah Blah this is very good. Blah Blah this is very good. Blah Blah this is very good. Blah Blah this is very good. Blah Blah this is very good. Blah Blah this is very good. Blah Blah this is very good. Blah Blah this is very good. Blah Blah this is very good. Blah Blah this is very good. Blah Blah this is very good. Blah Blah this is very good. Blah Blah this is very good. s',
					logo: simpleParallaxLogo,
					thumbnail: simpleParallaxThumbnail,
					url: 'https://simpleparallax.com/',
				},
				orizonte: {
					title: 'Orizonte',
					slogan: 'a responsive blog theme',
					text: 'Blah Blah this is very good. Blah Blah this is very good. Blah Blah this is very good. Blah Blah this is very good. Blah Blah this is very good. Blah Blah this is very good. Blah Blah this is very good. Blah Blah this is very good. Blah Blah this is very good. Blah Blah this is very good. Blah Blah this is very good. Blah Blah this is very good. Blah Blah this is very good. Blah Blah this is very good. Blah Blah this is very good. Blah Blah this is very good. Blah Blah this is very good. Blah Blah this is very good. Blah Blah this is very good. Blah Blah this is very good. Blah Blah this is very good. s',
					logo: orizonteLogo,
					thumbnail: orizonteThumbnail,
					url: 'https://anakao-theme.com/orizonte/',
				},
			},
		};
		this.handleClick = this.handleClick.bind(this);
	}
	handleClick(e) {
		e.target.classList.add('active');
	}
	render() {
		const projects = [];
		let i = 0;
		for (const key in this.state.projects) {
			let title = this.state.projects[key].title,
				slogan = this.state.projects[key].slogan,
				text = this.state.projects[key].text,
				logo = this.state.projects[key].logo,
				thumbnail = this.state.projects[key].thumbnail,
				url = this.state.projects[key].url;

			let project = (
				<li className={'portfolio__item ' + (i++%2 !== 0 ? 'reversed' : '')} key={key} onClick={this.handleClick}>
					<div className="portfolio__item-container container">
						<div className="portfolio__content">
							<div className="portfolio__image">
								<img src={thumbnail} />
							</div>
						</div>
						<div className="portfolio__content">
							<h3 className="portfolio__title">{title}, <br />{slogan}</h3>
							<p>{text}</p>
							<a className="btn" href={url} >Take a look</a>
						</div>
					</div>
				</li>
			);

			projects.push(project);
		}
		return (
			<div className="portfolio__container">
				<h2>Some project I did</h2>
				<ul className="portfolio__list">{projects}</ul>
			</div>
		);
	}
}

ReactDOM.render(<Portfolio />, document.getElementById('portfolio'));

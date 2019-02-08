import React from 'react';
import ReactDOM from 'react-dom';

import azureloLogo from './azurelo.png';
import orizonteLogo from './orizonte.png';
import simpleParallaxLogo from './simpleParallax.png';
import azureloThumbnail from './azureloContent.png';
import orizonteThumbnail from './orizonteContent.png';
import simpleParallaxThumbnail from './simpleParallaxContent.png';

import './portfolio.scss';

import { Heading } from '../heading/heading';

//const responsiveImage = require('./simpleParallaxcontent.png?sizes[]=600,sizes[]=1200,sizes[]=1920,quality=100');

export class Portfolio extends React.Component {
	constructor() {
		super();
		this.state = {
			projects: {
				azurelo: {
					title: 'Azurelo',
					slogan: 'a responsive blog theme',
					text: (
						<p>
							Azurelo is my first Wordpress theme. I spent a lot of time working the
							design, and tried to have a very classy theme but only with the very
							essential. The hard part was to integrate it as a wordpress theme,
							validated by Theme Forest. I had to revise my basics in PHP. This has
							been a great experience to build this theme from an end to end. A great
							deal of attention as been put into the front-end architecture. I used
							PUG, SASS and JS bundled by the great Gulp.
						</p>
					),
					logo: azureloLogo,
					thumbnail: azureloThumbnail,
					url: 'https://anakao-theme.com/azurelo/',
				},
				simpleParallax: {
					title: 'simpleParallax',
					slogan: 'a JS library',
					text: (
						<div>
							<p>
								When I was working on my second theme (below), I really wanted to
								add some parallax effect I was on the Apple website. I hit a wall! I
								couldn’t find any plugin that apply a subtle parallax effects on
								images itself, and not css background images.
							</p>
							<p>
								So I decided to put the theme I was working on in pause, and start
								to think on a parallax solution that would fit what i want.
							</p>
							<p>
								It wa the first time I has to created a plugin instead of simply use
								one. This is an exercise I would recommend to any developer. You are
								facing a lot of unusual situation. You oblige to think in a
								different way you usually do.
							</p>
							<p>
								First version was jQuery. Today the plugin is in version 3 in pure
								JS and ES6.
							</p>
						</div>
					),
					logo: simpleParallaxLogo,
					thumbnail: simpleParallaxThumbnail,
					url: 'https://simpleparallax.com/',
				},
				orizonte: {
					title: 'Orizonte',
					slogan: 'a responsive blog theme',
					text:
						'Blah Blah this is very good. Blah Blah this is very good. Blah Blah this is very good. Blah Blah this is very good. Blah Blah this is very good. Blah Blah this is very good. Blah Blah this is very good. Blah Blah this is very good. Blah Blah this is very good. Blah Blah this is very good. Blah Blah this is very good. Blah Blah this is very good. Blah Blah this is very good. Blah Blah this is very good. Blah Blah this is very good. Blah Blah this is very good. Blah Blah this is very good. Blah Blah this is very good. Blah Blah this is very good. Blah Blah this is very good. Blah Blah this is very good. s',
					logo: orizonteLogo,
					thumbnail: orizonteThumbnail,
					url: 'https://anakao-theme.com/orizonte/',
				},
			},
		};
		this.handleClick = this.handleClick.bind(this);
		this.handleMouseEnter = this.handleMouseEnter.bind(this);
		this.handleMouseLeave = this.handleMouseLeave.bind(this);
	}
	handleClick(e) {
		e.target.classList.add('active');
	}
	handleMouseEnter(e) {
		let item = e.target.closest('.portfolio__item ');
		item.querySelector('.portfolio__image').classList.add('hover');
	}
	handleMouseLeave(e) {
		let item = e.target.closest('.portfolio__item ');
		item.querySelector('.portfolio__image').classList.remove('hover');
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
				url = this.state.projects[key].url,
				odd = i++ % 2 !== 0;

			let project = (
				<li
					className={'portfolio__item ' + (odd ? 'reversed' : '')}
					key={key}
					onClick={this.handleClick}
				>
					<div className="portfolio__item-container container">
						<div className="portfolio__content">
							<div className="portfolio__image">
								<img src={thumbnail} />
							</div>
						</div>
						<div className="portfolio__content">
							<h3 className="portfolio__title">
								{title}, <br />
								{slogan}
							</h3>
							{text}
							<a
								className="btn"
								href={url}
								onMouseEnter={this.handleMouseEnter}
								onMouseLeave={this.handleMouseLeave}
							>
								Take a look
							</a>
						</div>
					</div>
				</li>
			);

			projects.push(project);
		}
		return (
			<div className="portfolio__container">
				<Heading title={'Some project I did'} />
				<ul className="portfolio__list">{projects}</ul>
			</div>
		);
	}
}

ReactDOM.render(<Portfolio />, document.getElementById('portfolio'));

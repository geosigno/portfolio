import React from 'react';
import ReactDOM from 'react-dom';

import azureloLogo from './azurelo.png';
import orizonteLogo from './orizonte.png';
import simpleParallaxLogo from './simpleParallax.png';

import './portfolio.scss';

export class Portfolio extends React.Component {
	constructor() {
		super();
		this.state = {
			projects: {
				azurelo: {
					title: 'Azurelo, a responsive blog theme',
					text: 'Blah Blah this is very good',
					logo: azureloLogo,
					url: 'https://anakao-theme.com/azurelo/',
				},
				simpleParallax: {
					title: 'simpleParallax, a JS plugin',
					text: 'Blah Blah this is very good',
					logo: simpleParallaxLogo,
					url: 'https://simpleparallax.com/',
				},
				orizonte: {
					title: 'Orizonte, a responsive blog theme',
					text: 'Blah Blah this is very good',
					logo: orizonteLogo,
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
		for (const key in this.state.projects) {
			let title = this.state.projects[key].title,
				text = this.state.projects[key].text,
				logo = this.state.projects[key].logo,
				url = this.state.projects[key].url;

			let project = (
				<li className="portfolio__item" key={key} onClick={this.handleClick}>
					<img src={logo} />
					<h3>{title}</h3>
					{/* <p>{text}</p> */}
					{/* <a href={url} >See it</a> */}
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

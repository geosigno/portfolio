import React from 'react';
import ReactDOM from 'react-dom';

import 'intersection-observer';
import SmoothScroll from 'smooth-scroll/dist/smooth-scroll.js';

import './navigation.scss';

export class Navigation extends React.Component {
	constructor() {
		super();
		this.items = ['bio', 'portfolio', 'skill', 'contact'];
		this.state = {
			active: '',
		};
	}

	componentDidMount() {
		this.observerActive();
		this.attachScrollEvent();
	}

	observerActive() {
		const options = {
			threshold: 0.2,
		};
		let observer = new IntersectionObserver(this.observerActiveCallback.bind(this), options);
		let sections = document.querySelectorAll('section');
		sections.forEach(section => observer.observe(section));
	}

	observerActiveCallback(entries) {
		entries.forEach(entry => {
			if (entry.isIntersecting && entry.intersectionRatio >= 0.2) {
				const id = entry.target.id;
				this.setState({
					active: id,
				});
			}
		});
	}

	attachScrollEvent() {
		new SmoothScroll('#nav a', {
			speedAsDuration: true,
			speed: 500,
			offset: 32,
		});
	}

	render() {
		return (
			<ul>
				{this.items.map(item => (
					<li key={item} className={item === this.state.active ? 'active' : ''}>
						<a href={'#' + item}>{item}</a>
					</li>
				))}
			</ul>
		);
	}
}

ReactDOM.render(<Navigation />, document.getElementById('nav'));

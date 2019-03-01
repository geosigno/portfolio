import 'normalize.css';
import './app.scss';

import './components/icons/icons';

import Header from './components/header/header';
import Contact from './components/contact/contact';
import Bio from './components/bio/bio';
import Portfolio from './components/portfolio/portfolio';
import Skill from './components/skill/skill';
import Navigation from './components/navigation/navigation';
import Form from './components/form/form';

import simpleParallax from 'simple-parallax-js';

var image1 = document.querySelectorAll('#portfolio img')[0],
	image2 = document.querySelectorAll('#portfolio img')[1],
	image3 = document.querySelectorAll('#portfolio img')[2];

new simpleParallax(image1, {
	orientation: 'left',
	scale: 1.3,
	overflow: true,
});
new simpleParallax(image2, {
	orientation: 'right',
	scale: 1.3,
	overflow: true,
});
new simpleParallax(image3, {
	orientation: 'left',
	scale: 1.3,
	overflow: true,
});

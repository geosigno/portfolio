import 'normalize.css';
import './app.scss';

import './components/icons/icons';

import Header from './components/header/header';
import Bio from './components/bio/bio';
import Portfolio from './components/portfolio/portfolio';
import Skill from './components/skill/skill';

import simpleParallax from 'simple-parallax-js';

var image = document.querySelectorAll('#portfolio img');
new simpleParallax(image, {
    orientation: 'down',
    scale: 1.3,
	overflow: true
});
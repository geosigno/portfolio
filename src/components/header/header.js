import React from 'react';
import ReactDOM from 'react-dom';

import { PositionContainer } from '../position/positionContainer';
import { ShapeContainer } from '../shape/shapeContainer';

import './header.scss';

export class Header extends React.Component {
	constructor() {
		super();
	}

	render() {
		return (
			<div className="header__container">
				<div className="header__background" />

				<div className="header__gradient" />

				<ShapeContainer />

				<PositionContainer />
			</div>
		);
	}
}

ReactDOM.render(<Header />, document.getElementById('header'));

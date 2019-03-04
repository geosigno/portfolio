import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './form-action.scss';

export const FormAction = props => {
	return (
		<div className="form__action">
			<a
				href="#"
				className="form__previous"
				style={props.currentStep < 2 ? { display: 'none' } : null}
				onClick={props.handlePreviousClick}
			>
				previous
			</a>
			<a href="#" className="form__next" onClick={props.handleNextClick}>
				<p className="show-for-sr">next</p>
				<FontAwesomeIcon icon={['fa', 'arrow-right']} />
			</a>
			<p className="form__step">
				step {props.currentStep}/{props.totalSteps}
			</p>
		</div>
	);
};

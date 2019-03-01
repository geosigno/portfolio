import React from 'react';

import './form.scss';

export const FormAction = props => {
	return (
		<div className="form__action">
			<a
				href="#"
				style={props.currentStep < 2 ? { display: 'none' } : null}
				onClick={props.handlePreviousClick}
			>
				previous
			</a>
			<a href="#" onClick={props.handleNextClick}>
				next
			</a>
			<p>
				step {props.currentStep}/{props.totalSteps}
			</p>
		</div>
	);
};

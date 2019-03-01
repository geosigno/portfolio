import React from 'react';

import { Input } from './inputs/input';
import { Textarea } from './inputs/textarea';

import './form.scss';

export const Form2 = props => {
	let renderInput = Object.keys(props.inputs).map(key => {
		const input = props.inputs[key],
			isActive = key == props.activeInput;

		if (input.type === 'textarea') {
			return (
				<Textarea
					key={key}
					label={input.label}
					name={input.name}
					value={input.value}
					onChange={props.handleChange}
					style={!isActive ? { display: 'none' } : null}
				/>
			);
		} else {
			return (
				<Input
					key={key}
					label={input.label}
					name={input.name}
					type={input.type}
					value={input.value}
					onChange={props.handleChange}
					style={!isActive ? { display: 'none' } : null}
				/>
			);
		}
	});
	return <form className="form">{renderInput}</form>;
};

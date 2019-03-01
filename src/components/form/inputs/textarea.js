import React from 'react';

export const Textarea = props => {
	const handleFocus = e => {
		let target = e.target,
			label = target.closest('label');

		if (label.classList.contains('active')) return;

		label.classList.add('active');
	};

	const handleBlur = e => {
		let target = e.target,
			label = target.closest('label'),
			value = target.value;

		if (value) return;

		label.classList.remove('active');
	};

	return (
		<label style={props.style}>
			<span>{props.label}</span>
			<textarea
				id={props.name}
				name={props.name}
				type={props.type}
				defaultValue={props.value}
				onFocus={handleFocus}
				onBlur={handleBlur}
				onChange={props.onChange}
			/>
		</label>
	);
};

import React from 'react';

export const Input = props => {
	return (
		<label style={props.style}>
			<span className="show-for-sr">{props.label}</span>
			<input
				id={props.name}
				name={props.name}
				type={props.type}
				placeholder={props.label}
				value={props.value}
				onChange={props.onChange}
				onKeyPress={props.onKeyPress}
			/>
		</label>
	);
};

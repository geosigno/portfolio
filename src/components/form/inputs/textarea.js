import React from 'react';

export const Textarea = props => {
	return (
		<label style={props.style}>
			<span className="show-for-sr">{props.label}</span>
			<textarea
				id={props.name}
				name={props.name}
				type={props.type}
				placeholder={props.label}
				defaultValue={props.value}
				onChange={props.onChange}
			/>
		</label>
	);
};

import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import webpackIcon from './webpack.svg';

export const Shape = props => {
	return (
		<ul className={props.className}>
			{Object.keys(props.shapes).map(shape => (
				<li key={shape}>
					{shape === 'webpack' ? (
						<div
							className="webpack-icon"
							dangerouslySetInnerHTML={{ __html: webpackIcon }}
						/>
					) : (
						<FontAwesomeIcon
							icon={['fab', shape]}
							color={props.shapes[shape].color}
							style={props.shapes[shape].style}
							className={
								'fab fa-' + shape + (props.shapes[shape].active ? ' active' : '')
							}
						/>
					)}
					{props.shapes[shape].title ? (
						<h3 style={{ color: props.shapes[shape].color }}>
							{props.shapes[shape].title}
						</h3>
					) : null}
				</li>
			))}
		</ul>
	);
};

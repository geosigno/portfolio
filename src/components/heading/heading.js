import React from 'react';



import './heading.scss';

export class Heading extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <h2>
                <span>{this.props.title}</span>
            </h2>
        )
    }
}
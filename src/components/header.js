import React from "react";
import ReactDOM from "react-dom";

export class Header extends React.Component {

    constructor() {
        super();
        this.positions = ['lead', 'developer', 'hard-worker', 'learner']
        this.state = {
            positionIndex: 0,
            positionTitle: ''
        }
    }

    componentDidMount() {
        this.interval = setInterval( () =>  {

            // get next index of the positions
            let nextIndex = this.state.positionIndex + 1;

            // if next index is above the length of positions array
            // start again
            if (nextIndex >= this.positions.length) nextIndex = 0;

            //set the current position
            this.setState({
                positionIndex: nextIndex

            }, function() {

                let position = this.positions[this.state.positionIndex],
                    positionString = '';

                for (let i = 0; i < position.length; i++) {
                    var oh = setInterval( () =>  {
                        positionString += position[i];
                        
                        this.setState({
                            positionTitle: positionString
                        });

                        if (i == position.length - 1) {
                            clearInterval(oh);
                        }
                        

                    }, 1000);
                }

            });

        }, 10000);
    }

    render() {
        return (
            <header>
                I am a front-end
                <span> {this.state.positionTitle}</span>
            </header>
        )
    }
}

ReactDOM.render(<Header />, document.getElementById('header'));

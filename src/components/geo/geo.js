import React from 'react';

import './geo.scss';

export class Geo extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			distance: null,
		};
		this.options = {
			enableHighAccuracy: true,
			timeout: 5000,
			maximumAge: 0,
		};
		this.mauritiusLatitude = -20.20665;
		this.mauritiusLongitude = 57.6755;
		this.userLatitude = null;
		this.userLongitude = null;
		// this.handleClick = this.handleClick.bind(this);
		this.getCoordonateSuccess = this.getCoordonateSuccess.bind(this);
	}

	componentDidMount() {
		this.getCoordonate();
	}

	getCoordonate() {
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(
				this.getCoordonateSuccess,
				this.getCoordonateError,
				this.options,
			);
		}
	}

	getCoordonateSuccess(position) {
		const coordonate = position.coords;

		if (coordonate.latitude) {
			this.userLatitude = coordonate.latitude;
		}

		if (coordonate.longitude) {
			this.userLongitude = coordonate.longitude;
		}

		if (this.userLatitude && this.userLongitude) {
			this.calculateDistance();
		}
	}

	getCoordonateError(err) {
		console.warn(`ERREUR (${err.code}): ${err.message}`);
	}

	calculateDistance() {
		let distance;

		const R = 6371,
			dLat = ((this.userLatitude - this.mauritiusLatitude) * Math.PI) / 180,
			dLon = ((this.userLongitude - this.mauritiusLongitude) * Math.PI) / 180;

		const a =
			Math.sin(dLat / 2) * Math.sin(dLat / 2) +
			Math.cos((this.mauritiusLatitude * Math.PI) / 180) *
				Math.cos((this.userLatitude * Math.PI) / 180) *
				Math.sin(dLon / 2) *
				Math.sin(dLon / 2);

		const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

		const d = R * c;

		if (d > 1) {
			distance = Math.round(d) + 'km';
		} else {
			distance = Math.round(d * 1000) + 'm';
		}

		this.setState({
			distance: distance,
		});
	}

	// handleClick(e) {
	// 	e.preventDefault();
	// 	this.getCoordonate();
	// }

	render() {
		return (
			<div>
				<p>I am currenlty living into Mauritius Island.</p>
				{/* <p>Wanna check how far you are from me right now?</p>
				<a href="#" className="btn" onClick={this.handleClick}>
					yes, why not?
				</a> */}
				<div>
					<p>
						You are {this.state.distance} from me... Hmmm why don't you send me a
						message?
					</p>
				</div>
			</div>
		);
	}
}

import React from 'react';
import { getCityAPI } from '../api/weatherApi';
import { countryCodeConverter } from '../helpers/countryCode';
import { connect } from 'react-redux';

const CityView = ({ loc, back }) => {
	const getLocationWeather = async () => {
		let obj = await getCityAPI(loc.city, loc.country);
		console.log(obj);
	};

	return (
		<>
			<div>
				<h3>{ loc.city }{ loc.country ? ', ' : null}{countryCodeConverter(loc.country)}</h3>
			</div>
			<div>
				<div>Latitude: {loc.lat}</div>
				<div>Longitude: {loc.lon}</div>
			</div>
			<div>
				<button className="btn btn-lg" onClick={getLocationWeather}>Get today's weather</button>
				<button className="btn btn-lg btn-primary" onClick={back} >Back</button>
			</div>
		</>
	)
};

export default connect()(CityView);

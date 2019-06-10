import React, { useState } from 'react';
import { capitalize } from 'lodash';
import { connect } from 'react-redux';

const WeatherData = ({ weather }) => {

	const rainSnowMsg = ' mm in the last hour';
	const windMsg =  ' meters/sec';

	const weatherDescription = () => {
		return (weather.weather && weather.weather[0]) ? capitalize(weather.weather[0].description) : null;
	};

	const checkIfPropAndSubProp = (prop, subProp) => {
		return weather[prop] ? weather[prop][subProp] : null;
	};

	const convertTime = (timestamp) => {
		if (timestamp) {
			return new Date(timestamp).toLocaleTimeString("en-US")
		}
		return null;
	};

	const convertDate = (timestamp) => {
		if (timestamp) {
			return new Date(timestamp).toLocaleDateString("en-US");
		}
		return null;
	};

	const getWeatherIcon = () => {
		return weather.icon ? 'http://openweathermap.org/img/w/' + weather.icon + '.png' : null;
	};

	return (
		<>
			<table class="weather-details-table">
				<thead>
					<tr>
						<th>{convertDate(weather.dt)}</th>
						<th><img src={ getWeatherIcon() } /></th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>Weather forecast:</td>
						<td>{ weatherDescription() }</td>
					</tr>
					<tr>
						<td>Rain</td>
						<td>{checkIfPropAndSubProp('rain', '1h') || 0}{rainSnowMsg}</td>
					</tr>
					<tr>
						<td>Snow</td>
						<td>{checkIfPropAndSubProp('snow', '1h') || 0}{rainSnowMsg}</td>
					</tr>
					<tr>
						<td>Wind speed:</td>
						<td>{checkIfPropAndSubProp('wind', 'speed') || 0}{ windMsg }</td>
					</tr>
					<tr>
						<td>Wind direction:</td>
						<td>{checkIfPropAndSubProp('wind', 'deg') || 'N/A'}</td>
					</tr>
					<tr>
						<td>Sunrise:*</td>
						<td>{ convertTime(checkIfPropAndSubProp('sys', 'sunrise')) }</td>
					</tr>
					<tr>
						<td>Sunset:*</td>
						<td>{ convertTime(checkIfPropAndSubProp('sys', 'sunset')) }</td>
					</tr>
					<tr>
						<td>Current temperature:</td>
						<td>{ checkIfPropAndSubProp('main', 'temp') }</td>
					</tr>
					<tr>
						<td>Temperature - low:</td>
						<td>{ checkIfPropAndSubProp('main', 'temp_min') }</td>
					</tr>
					<tr>
						<td>Temperature - high:</td>
						<td>{ checkIfPropAndSubProp('main', 'temp_max') }</td>
					</tr>
				</tbody>
			</table>
			<div className="weather-details-denotation">
				<p>* - Denotes the time relative to the user's current time zone.</p>
			</div>
		</>
	);
};

export default connect()(WeatherData);



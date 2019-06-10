import React from 'react';
import {capitalize} from 'lodash';
import trash from '../images/icons8-waste-64.png';
import './WeatherLogDetails.scss';

export default function WeatherLogDetails({ weatherLogs, onClick, deleteLog }) {
	return (
		<>
			<table className="weather-log-details-container">
				<thead>
					<tr>
						<th>Date</th>
						<th>Weather</th>
						<th></th>
					</tr>
				</thead>
				<tbody>
					{weatherLogs.map((log, idx) =>
						<tr key={'weatherLog' + idx}>
							<td onClick={() => onClick(log._id)}>{ new Date(log.dt).toLocaleDateString()}</td>
							<td onClick={() => onClick(log._id)}>
								{ capitalize(log.weather[0].description) }
								<img src={'http://openweathermap.org/img/w/' + log.icon + '.png'}
									 alt={log.weather[0].description}
								/>
							</td>
							<td><img onClick={ () => deleteLog(log._id) } src={trash} alt="Trash it!" /></td>
						</tr>
					)}
				</tbody>
			</table>
		</>
	);
};

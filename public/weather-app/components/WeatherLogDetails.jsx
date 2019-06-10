import React from 'react';
import {capitalize} from 'lodash';

export default function WeatherLogDetails({ weatherLogs, onClick }) {
	console.log(weatherLogs);
	return (
		<>
			<table>
				<thead>
					<tr>
						<th>Date</th>
						<th></th>
					</tr>
				</thead>
				<tbody>
					{weatherLogs.map((log, idx) =>
						<tr key={'weatherLog' + idx} onClick={() => onClick(log._id)}>
							<td>{ new Date(log.dt).toLocaleDateString()}</td>
							<td>
								{ capitalize(log.weather[0].description) }
								<img src={'http://openweathermap.org/img/w/' + log.icon + '.png'}
									 alt={log.weather[0].description}
								/>
							</td>
						</tr>
					)}
				</tbody>
			</table>
		</>
	);
};

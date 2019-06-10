import React from 'react';
import {capitalize} from 'lodash';
import trash from '../images/icons8-waste-64.png';

export default function WeatherLogDetails({ weatherLogs, onClick, deleteLog }) {
	return (
		<>
			<table>
				<thead>
					<tr>
						<th>Date</th>
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
							<td><img onClick={ () => deleteLog(log._id) } src={trash} alt="Trash it!" /></td>
						</tr>
					)}
				</tbody>
			</table>
		</>
	);
};

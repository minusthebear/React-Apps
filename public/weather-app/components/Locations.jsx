import React, { useState } from 'react';
import { connect } from 'react-redux'
import { getAllLocations } from '../api/weatherApi';

const Locations = (props) => {

	let [ allLocations, setAllLocations ] = useState(null)

	const displayLocations = async () => {
		let locations = await getAllLocations();
		setAllLocations(locations);
	};

	const showAllLocations = () => {
		if (allLocations.length) {
			return (
				<table>
					<thead>
						<tr>
							<th>City</th>
							<th>Country</th>
							<th>Latitude</th>
							<th>Longitude</th>
						</tr>
					</thead>
					<tbody>
					{
						allLocations.map((val) =>
							<tr key={val._id}>
								<td>{val.city}</td>
								<td>{val.country}</td>
								<td>{val.lat}</td>
								<td>{val.lon}</td>
							</tr>
						)
					}
					</tbody>
				</table>
			)
		}
		return null;
	};

	return (
		<div>
			<button className="btn btn-primary btn-lg" onClick={displayLocations}>
				Get all locations
			</button>
			<div>
				{ allLocations ? showAllLocations() : null }
			</div>
		</div>
	)
};

export default connect()(Locations);

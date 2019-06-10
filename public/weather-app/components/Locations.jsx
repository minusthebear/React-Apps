import React, { useState } from 'react';
import { connect } from 'react-redux'
import {LocationTableRow} from "./LocationTableRow";

const Locations = ({ allLocations, displayLocations, selectCity, deleteCity }) => {

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
							<LocationTableRow
								key={val._id}
								loc={val}
								selectCity={selectCity}
								deleteCity={deleteCity}
							/>
						)
					}
					</tbody>
				</table>
			);
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

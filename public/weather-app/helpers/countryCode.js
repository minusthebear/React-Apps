import {find} from "lodash";
import countryCodes from "../../constants/allCountryCodes";

export const countryCodeConverter = (val) => {
	const country = find(countryCodes, (country) => {
		return val === country.code;
	});
	if (country.name) {
		return country.name;
	}
	return null;
};

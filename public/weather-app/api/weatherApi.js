import { handleResponse, handleError } from "./apiUtils";
import { API_KEY } from "../constants/API_key";
import { ALL_COUNTRY_APIS } from '../constants/API_URL';
import axios from 'axios';
import qs from 'qs';

const URL = 'http://localhost:8080';

export async function getAllCountryAPIs() {
    const res = await fetch(ALL_COUNTRY_APIS);
    return res.json();
}

export async function addNewLocation(obj) {
    const res = await axios.post(URL + '/addNewLocation', obj);
    return res;
}

export async function getAllLocations() {
    const res = await axios.get(URL + '/allLocations');
    return res.data;
}

export async function saveCurrentWeather(obj) {
    const res = await axios.post(URL + '/saveCurrentWeather', obj);
    return res;
};

export function getCityAPI(city, country) {
    let url = 'http://api.openweathermap.org/data/2.5/weather?q=' + city;
    if (country) {
        url = url + ',' + country;
    }
    url = url + '&APPID=' + API_KEY;

    try {
        return axios.get(url).then((res) => res.data);
    } catch (e) {
        throw new Error(e);
    }
}

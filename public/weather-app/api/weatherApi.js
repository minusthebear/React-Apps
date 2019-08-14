import { handleResponse, handleError } from "./apiUtils";
import { API_KEY } from "../../constants/API_key";
import axios from 'axios';

axios.defaults.withCredentials = true;
import qs from 'qs';

const URL = 'http://localhost:8080';

// TODO: CHANGE CREDENTIALS AND EXTERNAL API CALLS TO SERVER-SIDE

export async function addNewLocation(obj) {
    const res = await axios.post(URL + '/addNewLocation', obj);
    return res;
}

export async function getAllLocations() {
    const res = await axios.get(URL + '/allLocations');
    return res.data;
}

export async function saveCurrentWeather(obj) {
    try {
        const res = await axios.post(URL + '/saveCurrentWeather', obj);
        return res;
    } catch (e) {
        return e;
    }
}

export async function allWeatherLogsByLocation(id) {
    const res = await axios.get(URL + '/allWeatherLogsByLocation', { params: { id }});
    return res.data;
}

export async function getWeatherLog(_id) {
    const res = await axios.post(URL + '/getWeatherLog', { _id });
    return res.data;
}

export async function deleteLocation(id) {
    const res = await axios.delete(URL + '/deleteLocation', { data: {id} });
    return res.data;
}

export async function deleteWeatherLog(_id) {
    const res = await axios.delete(URL + '/deleteWeatherLog', { data: {_id} });
    return res.data;
}

export function getCityAPI(city, country) {

    let url = 'https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather?q=' + city;
    if (country) {
        url = url + ',' + country;
    }
    url = url + '&APPID=' + API_KEY;

    try {
        axios.defaults.withCredentials = false;
        let retVal = axios.get(url).then((res) => res.data);
        axios.defaults.withCredentials = true;
        return retVal;
    } catch (e) {
        throw new Error(e);
    } finally {
        axios.defaults.withCredentials = true;
    }
}

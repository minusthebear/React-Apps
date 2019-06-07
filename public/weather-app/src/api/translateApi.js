import { handleResponse, handleError } from "./apiUtils";
import { API_KEY } from "../constants/API_key";
import { ALL_COUNTRY_APIS } from '../constants/API_URL';
import axios from 'axios';

export async function getProjectJSON() {
    // const res = await fetch(process.env.PUBLIC_URL + '/Project-83aad4a1ca01.json');
    // return res.json();
}

export async function getTranslation(projectId) {
    //
    // const translate = new Translate({projectId});
    //
    // // The text to translate
    // const text = 'Hello, world!';
    //
    // // The target language
    // const target = 'ru';
    //
    // // Translates some text into Russian
    // const [translation] = await translate.translate(text, target);
    // console.log(`Text: ${text}`);
    // console.log(`Translation: ${translation}`)
}

export async function getAllCountryAPIs() {
    const res = await fetch(ALL_COUNTRY_APIS);
    return res.json();
}

// 'api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=55e3c9fc34a1cfe3fc0782d7f0ede2fa'

export function getCityAPI(city, country) {
    // let url = 'http://api.openweathermap.org/data/2.5/weather?q=' + city;
    // if (country) {
    //     url = url + ',' + country;
    // }
    // url = url + '&APPID=' + API_KEY;
    // console.log(url);
    // const res = await fetch(url).then(r => {
    //     return r;
    // });
    // const r = await res.json();
    // console.log(r);
    // return r;


    let url = 'http://api.openweathermap.org/data/2.5/weather?q=' + city;
    if (country) {
        url = url + ',' + country;
    }
    url = url + '&APPID=' + API_KEY;
    console.log(url);
    let res;

    try {
        return axios.get(url);
    } catch (e) {
        return null;
    }

}

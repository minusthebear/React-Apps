import { handleResponse, handleError } from "./apiUtils";
import { API_KEY } from "../constants/API_key";
import {  ALL_COUNTRY_APIS } from '../constants/API_URL';

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
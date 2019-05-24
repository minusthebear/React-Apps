import { handleResponse, handleError } from "./apiUtils";
import {Translate} from '@google-cloud/translate';

export async function getProjectJSON() {
    const res = await fetch(process.env.PUBLIC_URL + '/Project-83aad4a1ca01.json');
    return res.json();
}

export async function getTranslation() {

    const translate = new Translate({projectId});

    // The text to translate
    const text = 'Hello, world!';

    // The target language
    const target = 'ru';

    // Translates some text into Russian
    const [translation] = await translate.translate(text, target);
    console.log(`Text: ${text}`);
    console.log(`Translation: ${translation}`)
}
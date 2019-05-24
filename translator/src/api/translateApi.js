import { handleResponse, handleError } from "./apiUtils";

export async function getTranslation() {
    const res = await fetch(process.env.PUBLIC_URL + '/Project-83aad4a1ca01.json');
    return res.json();
}
//
// export function getCourses() {
//     return fetch(baseUrl)
//         .then(handleResponse)
//         .catch(handleError);
// }
//
// export function saveCourse(course) {
//     return fetch(baseUrl + (course.id || ""), {
//         method: course.id ? "PUT" : "POST", // POST for create, PUT to update when id already exists.
//         headers: { "content-type": "application/json" },
//         body: JSON.stringify(course)
//     })
//         .then(handleResponse)
//         .catch(handleError);
// }
//
// export function deleteCourse(courseId) {
//     return fetch(baseUrl + courseId, { method: "DELETE" })
//         .then(handleResponse)
//         .catch(handleError);
// }


//
// async function quickstart(
//     projectId = 'YOUR_PROJECT_ID' // Your GCP Project Id
// ) {
//     // Imports the Google Cloud client library
//     const {Translate} = require('@google-cloud/translate');
//
//     // Instantiates a client
//     const translate = new Translate({projectId});
//
//     // The text to translate
//     const text = 'Hello, world!';
//
//     // The target language
//     const target = 'ru';
//
//     // Translates some text into Russian
//     const [translation] = await translate.translate(text, target);
//     console.log(`Text: ${text}`);
//     console.log(`Translation: ${translation}`);
// }
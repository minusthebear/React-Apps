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
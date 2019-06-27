import axios from 'axios';

const URL = 'http://localhost:8080';

export async function saveSettings(obj) {
    const res = await axios.put(URL + '/updateSettings', obj);
    console.log(res);
    return res;
}
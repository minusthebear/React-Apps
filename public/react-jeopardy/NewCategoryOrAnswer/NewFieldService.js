export const setValueAndLabel = (k) => {
    let val = k.replace(/([A-Z])/g, ' $1').trim().replace(/^.{1}/g, k[0].toUpperCase());
    return {value: k, label: val };
};

export const getEntriesNames = (data, key) => {

    const firstVal = Object.entries(data[key][0]),
        arrEntries = [];

    firstVal.forEach((v) => {
        if (Array.isArray(v[1])) {
            arrEntries.push(v[0]);
        }
    });

    return arrEntries;
};

export const getPrimaryValues = (data, key) => {
    return data.map((item) => {
        return item[key];
    });
};

export default {
    setValueAndLabel,
    getEntriesNames,
    getPrimaryValues
}
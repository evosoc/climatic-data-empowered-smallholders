/*
IBM Cloud Function
 */
const needle = require('needle');
const apiKey = process.env.API_KEY;
async function main({geocode}) {
    try {
        const weekData = await get8Day(geocode);
        const today = await getToday(geocode);

        return {
            statusCode: 200,
            headers: { 'Content-Type': 'application/json' },
            body:  {
                weekData,
                today
            },
        };
    } catch (err) {
        console.log(err);
        return Promise.reject({
            statusCode: 500,
            headers: { 'Content-Type': 'application/json' },
            body: { message: err.message },
        });
    }
}

const get8Day = async (geocode) => {
    try {
        const url = `https://api.weather.com/v3/wx/forecast/daily/7day?geocode=${geocode}&format=json&units=e&language=en-US&apiKey=${apiKey}`
        let response = await needle('get', url, { headers: { 'accept': 'application/json' } });
        return transformData(response.body);
    } catch (err) {
        console.log(err);
        return [];
    }
}

const getToday = async (geocode) => {
    try {
        const url = `https://api.weather.com/v3/wx/forecast/hourly/1day/enterprise?geocode=${geocode}&format=json&units=e&language=en-US&apiKey=${apiKey}`;
        let response = await needle('get', url, { headers: { 'accept': 'application/json' } });
        return transformDayData(response.body);
    } catch (err) {
        console.log(err);
        return [];
    }

}


const transformData = (data) => {
    const result = [];
    for (let i = 0; i < 8; i++) {
        result.push({});
    }

    for (let key in data) {
        for (let i = 0; i < data[key].length; i++) {
            if (key !== "daypart") {
                const datumElement = data[key][i];
                result[i][key] = datumElement;
            }
        }
    }
    return result

};

const transformDayData = (data) => {
    const result = [];
    for (let i = 0; i < 24; i++) {
        result.push({});
    }

    for (let key in data) {
        for (let i = 0; i < data[key].length; i++) {
            if (key !== "daypart") {
                const datumElement = data[key][i];
                result[i][key] = datumElement;
            }
        }
    }
    return result

};

exports.main = main;

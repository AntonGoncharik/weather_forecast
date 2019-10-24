import * as axios from 'axios';

const instance = axios.create({
    baseURL: 'https://www.metaweather.com/api/location/'
});

export const getIdLocationAPI = (locationName) => {
    return instance.get(`search/?query=${locationName}`)
};

export const getWeatherForecastAPI = (id) => {
    return instance.get(id)
};